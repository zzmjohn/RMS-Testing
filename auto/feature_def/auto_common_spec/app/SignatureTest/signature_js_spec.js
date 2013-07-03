describe("Signature JS API Test", function() {
	var getpropertiesdata ='';
	var getpropertydata ='';
    var callbackstatus = false;

    var callbackgetproperties = function (data){
		getpropertiesdata = JSON.stringify(data);
		callbackstatus = true;
	}

	var callbackgetproperty = function (data){
		getpropertydata = data;
		callbackstatus = true;
	}

		var arrSIGshow = getApplicablePropertiesShow();
		var arrSIGtake = getApplicablePropertiesFullScreen();

		(function(arrSignatureshow,arrSignaturetake){

			describe("Signature property using set/getProperty", function() {

				for (var i=0;i<arrSignatureshow.length;i++){

					(function(idx){
						it(arrSignatureshow[idx]['testName'], function() {

							    Rho.Signature.setProperty(arrSignatureshow[idx]['propertyName'],arrSignatureshow[idx]['propertyValue']);
								var data = Rho.Signature.getProperty(arrSignatureshow[idx]['propertyName']);
								expect(data).toEqual(arrSignatureshow[idx]['expectedResult']);
						});

					})(i);
				}
			});

			describe("Signature property Using set/getProperties ", function() {

				for (var i=0;i<arrSignatureshow.length;i++){

					(function(idx){
						it(arrSignatureshow[idx]['testName'], function() {
						
							var propertyName = arrSignatureshow[idx]['propertyName'];
							var propertyValue = arrSignatureshow[idx]['propertyValue'];

							if (propertyValue == 'true')
								var strProperty = '{"'+propertyName+'" :'+true+'}';
							else if (propertyValue == 'false')
								var strProperty = '{"'+propertyName+'" :'+false+'}';
							else if (!isNaN(propertyValue)){
								propertyValue = parseInt(propertyValue);
								var strProperty = '{"'+propertyName+'" :'+propertyValue+'}';
							}
							else{
								var strProperty = '{"'+propertyName+'" : "'+propertyValue+'"}'
							}

							var objProperty = JSON.parse(strProperty);
						
							Rho.Signature.setProperties(objProperty);

							var strGetProperty = '["'+arrSignatureshow[idx]['propertyName']+'"]';
							var objGetProperty = JSON.parse(strGetProperty);

							var data = Rho.Signature.getProperties(objGetProperty);

			
							data = data[arrSignatureshow[idx]['propertyName']];
							expect(data).toEqual(arrSignatureshow[idx]['expectedResult']);
	
						});
					})(i);
				}
			});

			describe("Signature property setting Directly", function() {

				for (var i=0;i<arrSignatureshow.length;i++){

					(function(idx){
						it(arrSignatureshow[idx]['testName'], function() {
							
							var propertyName = arrSignatureshow[idx]['propertyName'];
							var propertyValue = arrSignatureshow[idx]['propertyValue'];

							try{
								if (propertyValue == 'true')
									eval(Rho.Signature)[propertyName] = true;
								else if (propertyValue == 'false')
									eval(Rho.Signature)[propertyName] = false;
								else if (!isNaN(propertyValue)){
									propertyValue = parseInt(propertyValue);
									eval(Rho.Signature)[propertyName] = propertyValue;	
								}
								else{
									eval(Rho.Signature)[propertyName] = propertyValue;
								}

								//var data = Rho.Signature.getProperty(arrSignatureshow[idx]['propertyName']);
								var data = eval(Rho.Signature)[arrSignatureshow[idx]['propertyName']];
							}
							catch(err){

								var data = err.message;
							}

							expect(data).toEqual(arrSignatureshow[idx]['expectedResult']);

						});
					})(i);
				}
			});

			describe("set/get Property and set/get properties with all combination", function() {

				beforeEach(function() {
					getpropertiesdata ='';
					getpropertydata ='';
					callbackstatus = false;
				});

				it("VT299-2001 | call getProperties() with sync callback and hash |", function() {

					runs(function() {
					    Rho.Signature.setProperties({'bgColor':'#FF0000','border':'true','penWidth':'2'});
						Rho.Signature.getProperties(['bgColor','border','penWidth'],callbackgetproperties);
					});

					waitsFor(function(){
						return callbackstatus;
					});

					runs(function() {							
						expect(getpropertiesdata).toContain('#FF0000');
						expect(getpropertiesdata).toContain('true');
						expect(getpropertiesdata).toContain('2');
					});
				});

				it("VT299-2002 | call getProperties() with anonymous callback and hash |", function() {

					runs(function() {    
					    Rho.Signature.setProperties({'bgColor':'#FFFF00','border':false,'penWidth':1});
						Rho.Signature.getProperties(['bgColor','border','penWidth'],function(data){getpropertiesdata = JSON.stringify(data);callbackstatus = true;});
					});

					waitsFor(function(){
						return callbackstatus;
					});	

					runs(function() {								
						expect(getpropertiesdata).toContain('#FFFF00');
						expect(getpropertiesdata).toContain(false);
						expect(getpropertiesdata).toContain(1);
					});							
				});

				it("VT299-2000 | call getProperties() without callback |" + camtype, function() {

					    //Rho.Signature.clearAllProperties();
					    Rho.Signature.setProperties({'bgColor':'#FFFFFF','border':true,'penWidth':3});
						var data = Rho.Signature.getProperties(['compressionFormat','desiredHeight','outputFormat']);
						getpropertiesdata = JSON.stringify(data);
						expect(getpropertiesdata).toContain('#FFFFFF');
						expect(getpropertiesdata).toContain(true);
						expect(getpropertiesdata).toContain(3);
				});

				it("VT299-2004 | call getProperty() with sync callback and property |", function() {

					runs(function() {  									    
					    Rho.Signature.setProperty('compressionFormat','jpg');
						Rho.Signature.getProperty("compressionFormat",callbackgetproperty);
					});

					waitsFor(function(){
						return callbackstatus;
					});	
					
					runs(function() {	
						expect(getpropertydata).toEqual('jpg');
					});										
				});

				it("VT299-2005 | call getProperty() with anonymous callback and property |", function() {

					runs(function() {
					    Rho.Signature.setProperty('penWidth','5');
						Rho.Signature.getProperty('penWidth',function(data){getpropertydata = data;callbackstatus = true;});
					});

					waitsFor(function(){
						return callbackstatus;
					});	
					
					runs(function() {	
						expect(getpropertydata).toEqual('5');
					});								
				});

				it("VT299-2003 | call getProperty() without callback |", function() {
	    
					    Rho.Signature.setProperty('penWidth',4);
						var data = Rho.Signature.getProperty("penWidth");
						getpropertydata = data;
						expect(getpropertydata).toEqual(4);
				});

				it("VT299-2006 | call show() with all string |", function() {

					runs(function() {
					    Rho.Signature.show({'bgColor':'#FF0000','border':'true','penWidth':'2'});
						Rho.Signature.getProperties(['bgColor','border','penWidth'],callbackgetproperties);
					});

					waitsFor(function(){
						return callbackstatus;
					});

					runs(function() {							
						expect(getpropertiesdata).toContain('#FF0000');
						expect(getpropertiesdata).toContain('true');
						expect(getpropertiesdata).toContain('2');
					});
				});

				it("VT299-2007 | call takeFullScreen() with all string |", function() {

					runs(function() {
					    Rho.Signature.takeFullScreen({'bgColor':'#FF0000','outputFormat':'image','penWidth':'1'},sigCallback);
						Rho.Signature.getProperties(['bgColor','outputFormat','penWidth'],callbackgetproperties);
					});

					waitsFor(function(){
						return callbackstatus;
					});

					runs(function() {							
						expect(getpropertiesdata).toContain('#FF0000');
						expect(getpropertiesdata).toContain('image');
						expect(getpropertiesdata).toContain('1');
					});
				});

				it("VT299-2008| call show() with required data types |", function() {

					runs(function() {
					    Rho.Signature.show({'bgColor':'#FF0000','border':false,'penWidth':1});
						Rho.Signature.getProperties(['bgColor','border','penWidth'],callbackgetproperties);
					});

					waitsFor(function(){
						return callbackstatus;
					});

					runs(function() {							
						expect(getpropertiesdata).toContain('#FF0000');
						expect(getpropertiesdata).toContain(false);
						expect(getpropertiesdata).toContain(1);
					});
				});

				it("VT299-2009 | call takeFullScreen() with required data types |", function() {

					runs(function() {
					    Rho.Signature.takeFullScreen({'bgColor':'#FF0000','outputFormat':'image','penWidth':3},sigCallback);
						Rho.Signature.getProperties(['bgColor','outputFormat','penWidth'],callbackgetproperties);
					});

					waitsFor(function(){
						return callbackstatus;
					});

					runs(function() {							
						expect(getpropertiesdata).toContain('#FF0000');
						expect(getpropertiesdata).toContain('image');
						expect(getpropertiesdata).toContain(3);
					});
				});
			});

			describe("Signature property set using show()", function() {

				var flag = false;

				beforeEach(function() {
					flag = false;
				});

				afterEach(function() {
					Rho.Signature.hide();
				});

				for (var i=0;i<arrSignatureshow.length;i++){

					(function(idx){

						it(arrSignatureshow[idx]['testName'], function() {

							runs(function() {

								var propertyName = arrSignatureshow[idx]['propertyName'];
								var propertyValue = arrSignatureshow[idx]['propertyValue'];

								if (propertyValue == 'true')
									var strProperty = '{"'+propertyName+'" :'+true+'}';
								else if (propertyValue == 'false')
									var strProperty = '{"'+propertyName+'" :'+false+'}';
								else if (!isNaN(propertyValue)){
									propertyValue = parseInt(propertyValue);
									var strProperty = '{"'+propertyName+'" :'+propertyValue+'}';
								}
								else{
									var strProperty = '{"'+propertyName+'" : "'+propertyValue+'"}'
								}

								var objProperty = JSON.parse(strProperty);

								Rho.Signature.show(objProperty);

								setTimeout(function() {
									flag = true;
								}, ENABLE_TIMEOUT_VALUE);
							});

							waitsFor(function() {
								return flag;
							}, "Waiting for enable", 2000);
								
							runs(function() {

								var strGetProperty = '["'+arrSignatureshow[idx]['propertyName']+'"]';
								var objGetProperty = JSON.parse(strGetProperty);

								var data = Rho.Signature.getProperties(objGetProperty);

								data = data[arrSignatureshow[idx]['propertyName']];
								expect(data).toEqual(arrSignatureshow[idx]['expectedResult']);
							});

						});
					})(i);

				}
			});

			describe("Signature property set using takeFullScreen()", function() {

				var flag = false;

				beforeEach(function() {
					flag = false;
				});

				afterEach(function() {
					Rho.Signature.hide();
				});

				for (var i=0;i<arrSignaturetake.length;i++){

					(function(idx){

						it(arrSignaturetake[idx]['testName'], function() {

							runs(function() {

								var propertyName = arrSignaturetake[idx]['propertyName'];
								var propertyValue = arrSignaturetake[idx]['propertyValue'];

								if (propertyValue == 'true')
									var strProperty = '{"'+propertyName+'" :'+true+'}';
								else if (propertyValue == 'false')
									var strProperty = '{"'+propertyName+'" :'+false+'}';
								else if (!isNaN(propertyValue)){
									propertyValue = parseInt(propertyValue);
									var strProperty = '{"'+propertyName+'" :'+propertyValue+'}';
								}
								else{
									var strProperty = '{"'+propertyName+'" : "'+propertyValue+'"}'
								}

								var objProperty = JSON.parse(strProperty);

								Rho.Signature.takeFullScreen(objProperty, sigCallback);

								setTimeout(function() {
									flag = true;
								}, ENABLE_TIMEOUT_VALUE);
							});

							waitsFor(function() {
								return flag;
							}, "Waiting for enable", 2000);
								
							runs(function() {

								var strGetProperty = '["'+arrSignaturetake[idx]['propertyName']+'"]';
								var objGetProperty = JSON.parse(strGetProperty);

								var data = Rho.Signature.getProperties(objGetProperty);

								data = data[arrSignaturetake[idx]['propertyName']];
								expect(data).toEqual(arrSignaturetake[idx]['expectedResult']);
							});

						});
					})(i);

				}
			});

		})(arrSIGshow,arrSIGtake);

});
