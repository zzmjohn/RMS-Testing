function sleep (msec)
{
    var start = new Date().getTime();
    while (new Date().getTime() - start < msec);
}

describe('Network JS API', function() {
         
    var srvHost = SERVER_HOST;
    var srvPort = SERVER_PORT;
    var srvURL = "http://"+SERVER_HOST+":"+SERVER_PORT.toString();
         
    var callbackCount = 0;
         
    var connectionInfo = "";
    var failureMsg = "";
         
    var detectConnectionCallback = function(args) {
        dispCurrentProcess($.toJSON(args));
        callbackCount += 1;
        connectionInfo = args.connectionInformation;
        failureMsg = args.failureMessage;
    }
         
    beforeEach(function() {
        callbackCount = 0;
        connectionInfo = "";
        failureMsg = "";
    });
         
    afterEach(function() {
        Rho.Network.stopDetectingConnection(detectConnectionCallback);
    });

    it('VT293-0013 | cancel with wan/mguest connection', function() {

       var getCallback = function(args) {
            callbackCount += 1;
       }

       runs( function() {
            getProps = {
                url: "http://www.apache.org/licenses/LICENSE-2.0"
            };
            Rho.Network.get(getProps, getCallback);
            sleep(50);
            Rho.Network.cancel();
        } );

        runs(function() {
            expect(callbackCount).toEqual(0);
        });
    });
         
    it('VT293-0014 | detectConnection with wlan profile enabled', function() {
       
        runs( function() {
            detectconnectionProps = {
                 host: srvHost,
                 port: srvPort
            };
            Rho.Network.detectConnection(detectconnectionProps, detectConnectionCallback);
        } );
       
       waitsFor( function() {
                return callbackCount==1;
            },
            "Callback never called",
            5100
        );
            
        runs(function() {
            expect(callbackCount).toEqual(1);
            expect(connectionInfo).toEqual("Connected");
        });
    });

    it('VT293-0015 | detectConnection with sync', function() {

        detectconnectionProps = {
             host: srvHost,
             port: srvPort
        };

        var data = Rho.Network.detectConnection(detectconnectionProps);
        expect($.toJSON(data)).toEqual("null");

    });

    it('VT293-0016 | detectConnection with ananymous callback', function() {
       
        runs( function() {
            detectconnectionProps = {
                 host: srvHost,
                 port: srvPort
            };
            
            Rho.Network.detectConnection(detectconnectionProps, function(params){
                detectConnectionCallback(params);
            });
        } );
       
       waitsFor( function() {
                return callbackCount==1;
            },
            "Callback never called",
            5100
        );
            
        runs(function() {
            expect(callbackCount).toEqual(1);
            expect(connectionInfo).toEqual("Connected");
        });
    });

    it('VT293-0019 | detectConnection with exteranl profile disabled with pollinterval', function() {
       var flag = false;
        runs( function() {

            detectconnectionProps = {
                host: 'http://www.google.com',
                port: 80,
                pollInterval: 6000
            };
            
            Rho.Network.detectConnection(detectconnectionProps, detectConnectionCallback);

        } );
       
       waitsFor( function() {
                return callbackCount==1;
            },
            "Callback never called",
            5100
        );
            
        runs(function() {
            expect(callbackCount).toEqual(1);
            expect(connectionInfo).toEqual("Disconnected");
            setTimeout(function() {
                flag = true;
            }, 6000);
        });

        waitsFor( function() {
            return flag;
        },
        "6 sec wait to check PollInterval",
        7000
        );

        runs(function() {
            expect(callbackCount).toEqual(2);
            expect(connectionInfo).toEqual("Disconnected");
        });
    });

    it('VT293-0022 | detectConnection with dtectionTimeout', function() {
       var flag = false;
        runs( function() {

            detectconnectionProps = {
                host: 'http://www.google.com',
                port: 80,
                detectionTimeout: 1000
            };

            Rho.Network.detectConnection(detectconnectionProps, detectConnectionCallback);

        } );
       
       waitsFor( function() {
                return callbackCount==1;
            },
            "Callback never called",
            5100
        );
            
        runs(function() {
            expect(callbackCount).toEqual(1);
            expect(failureMsg).toEqual("Attempted to resolve hostname to connect to but did not succeed, return value (11001), last error (11001)");
        });

    });

    it('VT293-0023 | detectConnection with pollinterval and dtectionTimeout', function() {
       var flag = false;
        runs( function() {

            detectconnectionProps = {
                host: srvHost,
                port: srvPort,
                pollinterval: 6000,
                detectionTimeout: 5000
            };

            Rho.Network.detectConnection(detectconnectionProps, detectConnectionCallback);

            setTimeout(function() {
                flag = true;
            }, 12000);

        } );
       
       waitsFor( function() {
                return flag;
            },
            "Callback never called",
            13000
        );
            
        runs(function() {
            expect(callbackCount).toEqual(2);
            expect(connectionInfo).toEqual("Connected");
        });

    });

    it('VT293-0024 | stopDetectingConnection with wlan profile enabled', function() {
       var flag = false;
       runs( function() {

            detectconnectionProps = {
                host: srvHost,
                port: srvPort
            };

            Rho.Network.detectConnection(detectconnectionProps, detectConnectionCallback);

        } );

        waitsFor( function() {
                return callbackCount==1;
            },
            "Callback never called",
            5100
        );
       
        runs(function() {
            Rho.Network.stopDetectingConnection(detectConnectionCallback);
            setTimeout(function() {
                flag = true;
            }, 6000);
        });

        waitsFor( function() {
               return flag;
            },
            "Callback never called",
            7000
        );

        runs(function() {
            //After 12 sec of wait the count should not get increased to 2 as poll interval got stopped
            expect(callbackCount).toEqual(1);
            expect(connectionInfo).toEqual("Connected");
        });

    });

    it('VT293-0046 | get with valid url', function() {
       var fullURL = srvURL + "/download";
       var content = "";
       var errCode = -1;
       
        var getCallback = function(args) {
            callbackCount += 1;
            content = args.body;
            errCode = args.http_error;
        }
            
        runs( function() {
             getProps = {
                url: fullURL
             };
             Rho.Network.get(getProps, getCallback);
        });
       
       waitsFor( function() {
                return callbackCount==1;
            },
            "Callback never called",
            2000
        );
       
        runs(function() {
            expect(callbackCount).toEqual(1);
            expect(content).toEqual("Downloaded content");
            expect(errCode).toEqual('200');
        });
    });

});