/*
if (!Rho.DPX) {
    Rho.DPX = {isMock: true};
    Rho.DPX.FLASH_ON = 'on';
    Rho.DPX.SOURCE_CAMERA = 'camera';
    Rho.DPX.RESOLUTION_SMALL = '1280x960';
    Rho.DPX.RESOLUTION_MEDIUM = '1600x1200';
    Rho.DPX.RESOLUTION_LARGE = '2048x1536';
    Rho.DPX.USER_MODE_SNAPSHOT = 'snapshot';
}
*/

var dpx_tests = (function() {
    var TEMPLATES_DIR = 'file:///sdcard/templates/';
    if (!Rho.RhoFile.exists(TEMPLATES_DIR) || Rho.RhoFile.isDir(TEMPLATES_DIR)) {
        alert('templates folder is not exist');
        return null;
    }

    var templates = [];

    $.each(Rho.RhoFile.listDir(TEMPLATES_DIR), function(idx, fileName) {
        if (fileName.match(/\.xml$/))
            templates.push(fileName);
    });
    // templates = ['a.xml', 'b.xml', 'c.xml'];

    var resolutions = [
        Rho.DPX.RESOLUTION_SMALL,
        Rho.DPX.RESOLUTION_MEDIUM,
        Rho.DPX.RESOLUTION_LARGE
    ]

    function fillDropDown(dropDown, input, values) {
        $.each(values, function(idx, fileName) {
            var a = $('<a>').attr({
                href: '#', 'data-x-value': fileName
            }).text(fileName).click(function(evt){
                input.val($(evt.target).data('x-value'));
            });
            var li = $('<li>').append(a);

            dropDown.append(li);
        });
    }


    $(document).ready(function(){
        fillDropDown($('ul.dropdown-menu.x-templates'),   $('input.form-control.x-template'),   templates);
        fillDropDown($('ul.dropdown-menu.x-resolutions'), $('input.form-control.x-resolution'), resolutions);
    });


    var each = function(object, f) {
        for (var p in object) {
            if (object.hasOwnProperty(p)) {
                f(p, object[p]);
            }
        } 
    };

    var list = function(object, f) {
        var list = [];
        each(object, function(k, v) {
            list.push(f(k, v));
        });
        return list;
    };

    var log = function(message) {
        console.log(message);
    };

    var pprint = function(list, prefix, value) {
        if (value instanceof Array) {
            list.push('[\n' + prefix + '    ');
            for (var i = 0; i < value.length; ++i) {
                pprint(list, prefix + '    ', value[i]);
                if (i < value.length - 1) {
                    list.push(',\n' + prefix + '    ');
                }
            }
            list.push('\n' + prefix + ']');
        } else if (value instanceof Object) {
            list.push('{');
            var first = true;
            each(value, function(k, v) {
                if (first) {
                    first = false;
                } else {
                    list.push(',');
                }
                list.push('\n' + prefix + "'" + k + "': ");
                pprint(list, prefix + '    ', v);
            });
            list.push('\n' + prefix + '}');
        } else if (value instanceof String) {
            list.push("'" + value + "'");
        } else {
            list.push(value);
        }
        return list.join('');
    };

    var log_call = function(dict) {
        var list = ['callbackType ' + dict['callbackType']];
        if (dict['processedForm'] !== undefined) {
            var template = dict['processedForm']['template'];
            list.push('template ' + template.number + ' ' + template.name);

            list.push('regions');
            var regions = dict['processedForm']['regions'];
            for (var i = 0; i < regions.length; ++i) {
                var region = regions[i];
                each(region, function(k, v) {
                    list.push(i + ':[' + k + ']:[' + v + ']');
                });
            }
        }
        log(list.join('\n    '));
        var ll = [];
        log(pprint(ll, '', dict));
    };

    var get_output = function() {
        return document.getElementById('output');
    };

    var remove_output = function() {
        var node = get_output();
        while (node.childNodes.length != 0) {
            node.removeChild(node.childNodes[node.childNodes.length - 1]);
        }
    };

    var create_tag = function(tag) {
        get_output().appendChild(document.createElement(tag));
    };

    var create_text = function(text) {
        get_output().appendChild(document.createTextNode(text));
    };

    var create_image = function(dpx, image) {
        var img = document.createElement('img');
        img.setAttribute('src', dpx.getDataUri(image['id']));
        get_output().appendChild(img);
        create_tag('br');
        create_text(image['width'] + 'x' + image['height']);
    };

    var show_failure = function(failure, dpx) {
        if (failure === undefined) {
            return;
        }
        create_tag('hr');
        create_text(failure);
    };

    var show_form = function(form, dpx) {
        if (form === undefined) {
            return;
        }
        var regions = form['regions'];
        for (var i = 0; i < regions.length; ++i) {
            var region = regions[i];

            create_tag('hr');
            create_text(region['processingMode'] + ' ' + region['number'] + ' ' + region['name']);
            create_tag('br');
            if (region['absoluteOcrConfidence'] !== undefined || region['absoluteOcrConfidence'] !== undefined) {
                create_text('AC: ' + region['absoluteOcrConfidence'] + ', ' + 'RC: ' + region['relativeOcrConfidence']);
                create_tag('br');
            } 
            create_text(region['processedData']);
            if (region.hasOwnProperty('image')) {
                create_tag('br');
                create_image(dpx, region['image']);
            }
        }
        create_tag('hr');
        create_image(dpx, form['formCapture']['image']);
    };


    var params = {
        'template': 'file:///sdcard/templates/Logistics%20Post.xml',

        'debug': true,

        'audioFeedback': false,
        'hapticFeedback': false,
        'ledFeedback': false,

        'flashMode': Rho.DPX.FLASH_ON,
        'inputSource': Rho.DPX.SOURCE_CAMERA, 
        'inputSourceFilename': '/sdcard/templates/1024w_754h_Delivery Attempt Notification.yuv', 
        'fileInteractiveMode': true, // false does not work
        'manualResolutionMode': true,
        'manualResolution': Rho.DPX.RESOLUTION_SMALL,
        'userMode': Rho.DPX.USER_MODE_SNAPSHOT,
        'zoomAmount': 100,
        'uiResultConfirmation': false
    };

    var create_dpx = function() {
        var dpx = new Rho.DPX();

        params.template = Rho.RhoFile.join(TEMPLATES_DIR, $('input.form-control.x-template').val());
        params.manualResolution = $('input.form-control.x-resolution').val();

        each(params, function(k, v) {
            create_text(k + ': "' + v + '"');
            create_tag('br');
            dpx.setProperty(k, v);
        });
        return dpx;
    };

    var callback = function(dict, dpx) {
        log_call(dict);
        create_tag('hr');
        create_text('callbackType ' + dict['callbackType']);
        create_tag('br');
        show_form(dict['processedForm'], dpx);
        show_failure(dict['failureReason'], dpx);
    };

    var capture = function() {
        try {
            var dpx = create_dpx();
            dpx.setCallback(function(dict) {
                callback(dict, dpx);

                if (dict['callbackType'] === 'success' || dict['callbackType'] === 'failure') {
                    dpx.close();
                }
            });
            dpx.captureDocument();
        } catch (e) {
            log('EXCEPTION ' + e);
        }
    };

    var dpx = undefined;

    var open = function() {
        try {
            dpx = create_dpx();
            dpx.setCallback(function(dict) {
                callback(dict, dpx);
            });
        } catch (e) {
            log('EXCEPTION ' + e);
        }
    };

    var start = function() {
        try {
            dpx.captureDocument();
        } catch (e) {
            log('EXCEPTION ' + e);
        }
    };

    var close = function() {
        try {
            dpx.close();
        } catch (e) {
            log('EXCEPTION ' + e);
        }
    };

    return {
        capture: capture,
        open: open,
        start: start,
        close: close,
        clear: remove_output
    };
})();

