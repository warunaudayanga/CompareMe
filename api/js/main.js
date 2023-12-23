var tmp;
var lastPge = '';
var d1 = false, d2 = false, d3 = false

var mobileKeys = {
    "title": ["brand", "model"],
    "image": {
        "key": "img",
        "default": "default/mobile.svg"
    },
    "specs": {
        "brand": "Brand",
        "model": "Model",

        "network": "Network",
        "network_speed": "Speed",
        "network_technology": "Technology",
        "network_gprs": "GPRS",
        "network_edge": "EDGE",
        "network_2g_bands": "2G",
        "network_3g_bands": "3G",
        "network_4g_bands": "4G",
        "network_5g_bands": "5G",

        "display": "Display",
        "display_type": "Type",
        "display_size": "Size",
        "display_resolution": "Resolutions",
        "display_protection": "Protection",

        "camera": "Main Camera",
        "main_camera": "Main",
        "main_camera_features": "Features",
        "main_camera_v1": "V1",
        "main_camera_single": "Single",
        "main_camera_dual": "Dual",
        "main_camera_dual_or_triple": "Dual or Triple",
        "main_camera_triple": "Triple",
        "main_camera_quad": "Quad",
        "main_camera_five": "Five",
        "main_camera_video": "Video",

        "selfie": "Selfie Camera", // <- Forced
        "selfie_camera": "Selfie",
        "selfie_camera_features": "Features",
        "selfie_camera_single": "Single",
        "selfie_camera_dual": "Dual",
        "selfie_camera_triple": "Triple",
        "selfie_camera_video": "Video",

        "launch": "Launch", // <- Forced
        "launch_announced": "Announced",
        "launch_status": "Status",

        "body": "Body",
        "body_build": "Build",
        "body_sim": "SIM",
        "body_dimensions": "Dimensions",
        "body_weight": "Weight",
        "body_keyboard": "Keyboard",

        "memory": "Memory",
        "memory_internal": "Internal",
        "memory_card_slot": "Card Slot",
        "memory_phonebook": "Phonebook",
        "memory_call_records": "Call Records",

        "sound": "Sound",
        "sound_loudspeaker": "Loudspeaker",
        "sound_3.5mm_jack": "3.5mm Jack",
        "sound_alert_types": "Alert Types",

        "comms": "Comms", // <- Forced
        "comms_wlan": "WLAN",
        "comms_bluetooth": "Bluetooth",
        "comms_infrared_port": "Infrared Port",
        "comms_gps": "GPS",
        "comms_nfc": "NFC",
        "comms_radio": "Radio",
        "comms_usb": "USB",

        "features": "Features",
        "features_languages": "Languages",
        "features_clock": "Clock",
        "features_alarm": "Alarm",
        "features_messaging": "Messenging",
        "features_browser": "Browser",
        "features_java": "Java",
        "features_games": "Games",
        "features_sensors": "Sensors",

        "platform": "Platform", // <- Forced
        "platform_os": "OS",
        "platform_chipset": "Chipset",
        "platform_cpu": "CPU",
        "platform_gpu": "GPU",

        "battery": "Battery",
        "battery_charging": "Charging",
        "battery_music_play": "Music Play",
        "battery_talk_time": "Talk Time",
        "battery_stand.by": "Standby",

        "misc": "Misc", // <- Forced
        "misc_colors": "Colors",
        "misc_price": "Price",
        "misc_models": "Models",
        "misc_sar_eu": "Sar Eu",
        "misc_sar": "Sar",

        "tests": "Tests",
        "tests_performance": "Performance",
        "tests_camera": "Camera",
        "tests_loudspeaker": "Loudspeaker",
        "tests_audio_quality": "Audio Quality",
        "tests_battery_life": "Battery Life",
        "tests_display": "Display"
    }
};
var laptopKeys = {
    "title": ["brand", "model"],
    "image": {
        "key": "img",
        "default": "default/laptop.svg"
    },
    "specs": {
        "brand": "Brand",
        "model": "Model",
        "summary": "Summary",
        "summary_storage": {
            "name": "Storage",
            "values": ["storage_hddCapacity"]
        },
        "summary_processor": {
            "name": "Processor",
            "values": ["performance_processor"]
        },
        "summary_display": {
            "name": "Display",
            "values": ["display_size", "display_resolution"]
        },
        "summary_Ram": {
            "name": "RAM",
            "values": ["memory_capacity", "memory_ramType"]
        },
        "multimedia": "Multimedia",
        "multimedia_secondaryCamRearFacing": "Secondary Cam Rear facing",
        "multimedia_microphoneType": "Microphone Type",
        "multimedia_inbuiltMicrophone": "Inbuilt Microphone",
        "multimedia_soundTechnologies": "Sound Technologies",
        "multimedia_webcam": "Webcam",
        "multimedia_audioSolution": "Audio Solution",
        "multimedia_speakers": "Speakers",
        "multimedia_videoRecording": "Video Recording",
        "performance": "Performance",
        "performance_clockspeed": "Clockspeed",
        "performance_processor": "Processor",
        "performance_graphic Processor": "Graphic Processor",
        "memory": "Memory",
        "memory_ramType": "Ram Type",
        "memory_layout": "Memory Layout",
        "memory_slots": "Memory Slots",
        "memory_ramSpeed": "Ram Speed",
        "memory_capacity": "Capacity",
        "display": "Display",
        "display_type": "Type",
        "display_size": "Size",
        "display_resolution": "Resolution",
        "display_touchscreen": "Touchscreen",
        "display_features": "Features",
        "peripherals": "Peripherals",
        "peripherals_keyboard": "Keyboard",
        "peripherals_backlitKeyboard": "Backlit Keyboard",
        "peripherals_pointingDevice": "Pointing Device",
        "peripherals_fingerprintScanner": "Fingerprint Scanner",
        "peripherals_opticalDrive": "Optical Drive",
        "general": "General",
        "general_dimensions": "Dimensions",
        "general_operatingSystem": "Operating System",
        "general_operatingSystemType": "Operating System Type",
        "general_weight": "Weight",
        "general_colors": "Colors",
        "network": "Network",
        "network_wirelessLan": "Wireless Lan",
        "network_bluetooth": "Bluetooth",
        "network_bluetoothVersion": "Bluetooth Version",
        "storage": "Storage (HDD)",
        "storage_hddSpeedRpm": "Speed (rpm)",
        "storage_hddCapacity": "Capacity",
        "storage_hddType": "Type",
        "battery": "Battery",
        "battery_cell": "Cell",
        "battery_type": "Type",
        "battery_powerSupply": "Power Supply",
        "ports": "Ports",
        "ports_sdCardReader": "SD Card Reader",
        "ports_vgaPort": "VGA",
        "ports_usb30Slots": "USB 30 Slots",
        "ports_microphoneJack": "Microphone Jack",
        "ports_headphoneJack": "Headphone Jack",
        "others": "Others",
        "others_salesPackage": "Sales Package",
        "others_warranty": "Warranty",
        "others_lockport": "Lockport"
    }
};

// onLoad
$(function () {
    $('div').each(function(){
        if($(this).html().search("000webhost") > 0) $(this).remove()
    });
    // $('#content').load('views/device.php', {param: 'mobile'}, function () {deviceInitial('mobile');
    //     // $('.compare').click();
    // });
    if ($(window).outerWidth() <= 575) {
        var menuBar = $('.menu-bar');
        menuBar.css('left', - menuBar.outerWidth());
        menuBar.css('visibility', 'visible');
        $('.menu-btn').click(function () {
            if (menuBar.css('left') === '0px') {
                menuBar.animate({left: - menuBar.outerWidth()}, 'fast', function () {$('.menu-bar-overlay').css('display', 'none');});
            } else {
                $('.menu-bar-overlay').css('display', 'block');
                menuBar.animate({left: 0}, 'fast');
            }
        });
        $('.menu-bar-overlay').click(function () {
            menuBar.animate({left: - menuBar.outerWidth()}, 'fast', function () {$('.menu-bar-overlay').css('display', 'none');});
        });
    }
    var page = sessionStorage.getItem('page');
    loadPage(page, JSON.parse(sessionStorage.getItem('param')));
});

// Navigation
function loadPage(page, param) {
    var blacklist = [
        'activeComplete'
    ];
    tmp = blacklist;
    window.onbeforeunload = function() {
        sessionStorage.setItem('page', page);
        sessionStorage.setItem('param', JSON.stringify(param));
    };
    if(blacklist.indexOf(page) != -1) {
        window.history.back();
        return;
    }

    if(page == 'device') INP = $('#dev1');
    lastPge = page;
    $('#content').load('views/' + (page != null && page != 'null' ? page : 'main') + '.php', typeof param === 'object' ? param : {param: param? param: ''}, function () {
        if (eval("typeof " + page + "Initial === 'function'")) {
            eval(page + "Initial(param)")
        }

    });
}
function pushHistory(page, param) {
    window.history.pushState({page: page, param: param? param: undefined}, page, '#' + page);
}
window.onpopstate = function (ev) {
    if(lastPge == 'activeComplete') {
        if(INP.parents('.col-sm').hasClass('active-complete')) {
            INP.parents('.col-sm').removeClass('active-complete');
            INP.parent().removeClass('empty');
            if (INP.val() != lastVal) INP.val('');
            lastPge = ev.state.page;
            return;
        }
    }
    lastPge = ev.state? ev.state.page : ev.state;
    loadPage(!ev.state? ev.state: ev.state.page? ev.state.page: '', ev.state && ev.state.param? ev.state.param: '');
};

// Common
function error(msg, elem) {
    alert(msg, elem, 'Error');
}
function warning(msg, elem) {
    alert(msg, elem, 'Warning');
}
function alert(msg, elem, type) {
    if (elem === undefined) elem = false;
    $.alert({
        theme: 'material',
        type: type == 'error'? 'red': 'orange',
        title: type,
        icon: 'fas fa-exclamation-triangle',
        backgroundDismiss: true,
        content: msg,
        buttons: {
            ok: {
                keys: ['enter']
            }
        },
        onDestroy: function() {
        if(elem) elem.focus();
        }
    });
}
$(document).on('click', '[data-load]', function () {
    pushHistory($(this).data('load'), $(this).data('param'));
    loadPage($(this).data('load'), $(this).data('param'))
});
$(document).on('click', '.devices .device:not([data-load])', function () {
    warning($(this).data('param').charAt(0).toUpperCase() + $(this).data('param').slice(1) + ' page is under development');
});

// Device
// noinspection JSUnusedGlobalSymbols
function deviceInitial(param) {
    $.ajax({
        url: 'get/deviceList.php',
        type: 'post',
        dataType: 'json',
        data: {
            devType: param
        },
        success: function(arr){
            $('.autocomplete input').autoComplete(arr);
            if(param == 'mobile') {
                $('#dev1').val('Samsung Galaxy A11');
                $('#dev2').val('HTC U20 5G');
                $('#dev3').val('Nokia 125');
            } else if (param == 'laptop') {
                $('#dev1').val('HP 440 G1 (GOR72PA)');
                $('#dev2').val('Lenovo T440P (20AN006DUS)');
                $('#dev3').val('HP 9480m (P3E06UT)');
            }
        }
    });
}
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

function createTable(keyArray, data, devType) {
    var table = $('<table id="comparisonTable" class="table ' + devType + '"></table>');

    table.append('' +
        '<tr class="row head">' +
        '   <th class="col-md spec">' + $('.table-options').html() + '</th>' +
        '</tr>' +
        '<tr class="row image">' +
        '   <td class="col-md spec"></td>' +
        '</tr>');

    for (var i = 0; i < data.length; i++) {
        var title = '';
        if(typeof keyArray.title == 'object') {
            for (var t = 0; t < keyArray.title.length; t++) {
                title += data[i][keyArray.title[t]] + (keyArray.title.length - 1 != t? '<br>': '')
            }
        } else {
            title = data[i][keyArray.title];
        }
        table.find('.head').append('<th class="col-md"><div class="title">' + title + '</div></th>');
        table.find('.image').append('<td class="col-md"><img class="img-thumbnail" src="resources/thumbnails/' + (data[i][keyArray.image.key] != ''? devType + '/' + data[i][keyArray.image.key]: keyArray.image.default) + '" alt="' + title.replace('<br>', ' ') + '"></td>');
        delete data[i]['img'];
    }

    for ( var key in keyArray.specs ) {
        if(keyArray.specs.hasOwnProperty(key)) {
            if(data[0][key] == 'N/A') data[0][key] = '';
            if(data[1][key] == 'N/A') data[1][key] = '';
            if(data[2] != undefined && data[2][key] == 'N/A') data[2][key] = '';

            if(key.indexOf('_') != -1 && (data[0][key] == '' && data[1][key] == '' && (data[2] === undefined || data[2][key] == ''))) {
                continue;
            }

            if( keyArray.title.indexOf(key) == -1 && key.indexOf('_') == -1) {
                if((
                    (data[0][key] != '' && data[0][key] !== undefined)
                    || (data[1][key] != '' && data[1][key] !== undefined)
                    || (data[2] !== undefined && (data[2][key] != '' && data[2][key] !== undefined))
                )) {
                    table.append('' +
                        '<tr class="row scope">' +
                        '   <td class="col-md title spec">' + (keyArray.specs[key] != ''? keyArray.specs[key]: key)  + '</td>' +
                        '   <td class="col-md"></td>' +
                        '   <td class="col-md"></td>' +
                        '</tr>' +
                        '<tr class="row">' +
                        '   <td class="col-md title spec">' + (keyArray.specs[key] != ''? keyArray.specs[key]: key)  + '</td>' +
                        '   <td class="col-md dev1">' + (data[0][key] !== undefined? data[0][key]: '') + '</td>' +
                        '   <td class="col-md dev2">' + (data[1][key] !== undefined? data[1][key]: '') + '</td>' +
                        (data[2] !== undefined? '<td class="col-md dev3">' + (data[2][key] !== undefined? data[2][key]: '') + '</td>': '') +
                        '</tr>')
                } else {
                    table.append('' +
                        '<tr class="row scope">' +
                        '   <td class="col-md title spec">' + (keyArray.specs[key] != ''? (typeof keyArray.specs[key] == "object"? 'ooo': keyArray.specs[key]): key)  + '</td>' +
                        '   <td class="col-md"></td>' +
                        '   <td class="col-md"></td>' +
                        '</tr>')
                }
            } else {
                var name = '', value1 = '', value2 = '', value3 = '';
                if (typeof keyArray.specs[key] == "object") {
                    name = keyArray.specs[key].name;
                    for (var j = 0; j < keyArray.specs[key].values.length; j++) {
                        var sep = (keyArray.specs[key].values.length - 1 != i? ' ': '');
                        value1 += data[0][keyArray.specs[key].values[j]] + sep;
                        value2 += data[1][keyArray.specs[key].values[j]] + sep;
                        if (data[2] !== undefined) value3 += data[2][keyArray.specs[key].values[j]] + sep;
                    }
                } else {
                    name = keyArray.specs[key];
                    value1 = (data[0][key] !== undefined? data[0][key]: '');
                    value2 = (data[1][key] !== undefined? data[1][key]: '');
                    if (data[2] != undefined) value3 = (data[2][key] !== undefined? data[2][key]: '');
                }
                table.append('' +
                    '<tr class="row' +  ( keyArray.title.indexOf(key) != -1? ' scope neutral': '') + '">' +
                    '   <td class="col-md title spec">' + name  + '</td>' +
                    '   <td class="col-md dev1">' + value1 + '</td>' +
                    '   <td class="col-md dev2">' + value2 + '</td>' +
                    (data[2] !== undefined? '<td class="col-md dev3">' + value3 + '</td>': '') +
                    '</tr>')
            }
        }
    }
    table.find('.scope:not(.neutral)').each(function () {
        if($(this).next().hasClass('scope') || $(this).next().length == 0) {
            $(this).remove();
        }
    });

    $('.comparison-container').html(table);
}

var data = {};
data.specs = undefined;
$(document).on('click', '.compare', function () {
    var devType = $(this).data('dev'), dev1 = $('#dev1').val(), dev2 = $('#dev2').val() ,dev3 = $('#dev3').val();
    d1 = dev1 != '';
    d2 = dev2 != '';
    d3 = dev3 != '';
    if ((dev1 != '' && dev2 != '' || dev2 != '' && dev3 != '' || dev1 != '' && dev3 != '') && !(dev1 == dev2 && dev1 == dev3)) {
        $.ajax({
            url: 'get/compare.php',
            type: 'post',
            dataType: 'json',
            data: {
                devType: devType,
                dev1: dev1,
                dev2: dev2,
                dev3: dev3
            },
            success: function(data){

                createTable( window[devType + 'Keys'], data, devType);

                $('.row:not(.scope) .dev1, .row:not(.scope) .dev2, .row:not(.scope) .dev3').each(function () {
                    if (!$(this).text()) $(this).text('N/A');
                });

                if($(window).outerWidth() <= 425) {
                    $('.comparison-container').height($('#comparisonTable').height() * 0.6 + 100);
                    // alert($('.comparison-container').height() + ' - ' + $('#comparisonTable').height());
                } else if($(window).outerWidth() <= 575) {
                    $('.comparison-container').height($('#comparisonTable').height() * 0.8);
                }
                if($(window).outerWidth() <= 768) {
                    if ((CSS && CSS.supports && CSS.supports("position", "sticky"))) {
                        $('.body').css('overflowX', 'auto');
                    } else {
                        $('#comparisonTable tr > *:last-child').css('paddingRight', '50px');
                        $('.comparison-container').css({'overflowX':'auto', 'overflowY':'hidden'});
                    }
                }
                // noinspection JSJQueryEfficiency
                $('.body').animate({
                    scrollTop: $(window).outerWidth() <= 575? 287: 178,
                    scrollLeft: 0
                }, 500);
            }
        });
    } else {
        warning('At least two devices must be selected');
    }
});

$(document).on('click', '.btn-diff-specs', function () {
    $('#comparisonTable tr:not(.head, .image, .scope)').each(function () {
        if(!d1 && $(this).find('.dev2').text() == $(this).find('.dev3').text()
            || !d2 && $(this).find('.dev1').text() == $(this).find('.dev3').text()
            || !d3 && $(this).find('.dev1').text() == $(this).find('.dev2').text()
            || ($(this).find('.dev1').text() == $(this).find('.dev2').text()
                && $(this).find('.dev2').text() == $(this).find('.dev3').text())) {

            $(this).addClass('d-none');
        }
    });
});

$(document).on('click', '.btn-full-specs', function () {
    $('#comparisonTable tr.d-none').removeClass('d-none');
});