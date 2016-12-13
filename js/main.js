
var imgLogo = {
    hospital: {
        icon: 'img/logo/hospital.png'
    },
    gas: {
        icon: 'img/logo/gas.ico'
    },
    morgue: {
        icon: 'img/logo/morgue.ico'
    },
    hotel: {
        icon: 'img/logo/hotel.ico'
    }
};

var markerGroups = {
    "hospital": [],
    "gas": [],
    "morgue": [],
    "hotel": []
};

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(49.606, 34.548),
        zoom: 6,
        mapTypeId: 'roadmap',
        disableDefaultUI: true
    });
    var xml = xmlParse(xmlData);

    var markers = xml.documentElement.getElementsByTagName("marker");
    for (var i = 0; i < markers.length; i++) {
        var type = markers[i].getAttribute("type");
        var point = new google.maps.LatLng(
            parseFloat(markers[i].getAttribute("lat")),
            parseFloat(markers[i].getAttribute("lng")));
        var marker = createMarker(point, type, map);
    }
}

function createMarker(point, type, map) {
    var icon = imgLogo[type] || {};
    var marker = new google.maps.Marker({
        map: map,
        position: point,
        icon: icon.icon,
        type: type
    });
    if (!markerGroups[type]) markerGroups[type] = [];
    markerGroups[type].push(marker);
    return marker;
}

function toggleGroup(type) {
    for (var i = 0; i < markerGroups[type].length; i++) {
        var marker = markerGroups[type][i];
        if (!marker.getVisible()) {
            marker.setVisible(true);
        } else {
            marker.setVisible(false);
        }
    }
}

var xmlData = '<markers>' +
    '<marker lat="49.606878" lng="34.517997" type="hospital" />' +
    '<marker lat="47.908878" lng="35.941197" type="hospital" />' +
    '<marker lat="48.607878" lng="34.514497" type="gas" />' +
    '<marker lat="49.105578" lng="35.145597" type="gas" />' +
    '<marker lat="46.613378" lng="34.513397" type="morgue" />' +
    '<marker lat="49.412278" lng="33.542297" type="morgue" />' +
    '<marker lat="48.554" lng="35.122" type="hospital" />' +
    '<marker lat="47.718" lng="35.363" type="hotel" />' +
    '<marker lat="47.727" lng="35.374" type="gas" />' +
    '<marker lat="46.848" lng="35.209" type="morgue" />' +
    '<marker lat="46.851" lng="35.216" type="hotel" />' +
    '<marker lat="46.671" lng="35.863" type="hospital" />' +
    '<marker lat="45.304" lng="35.662" type="morgue" />' +
    '<marker lat="46.817" lng="35.699" type="gas" />' +
    '<marker lat="46.828" lng="35.790" type="hospital" />' +
    '<marker lat="47.750" lng="35.116" type="hotel" />' +
    '<marker lat="47.759" lng="35.128" type="gas" />' +
    '<marker lat="47.765" lng="35.133" type="hospital" />' +
    '<marker lat="47.770" lng="35.143" type="morgue" />' +
    '<marker lat="47.773" lng="35.145" type="gas" />' +
    '<marker lat="47.774" lng="35.137" type="gas" />' +
    '<marker lat="47.819" lng="34.968" type="hospital" />' +
    '<marker lat="48.330" lng="34.695" type="hotel" />' +
    '<marker lat="49.927" lng="35.053" type="hospital" />' +
    '<marker lat="51.330" lng="34.865" type="morgue" />' +
    '<marker lat="52.734" lng="37.439" type="gas" />' +
    '<marker lat="52.734" lng="37.501" type="hospital" />' +
    '<marker lat="52.735" lng="37.438" type="hotel" />' +
    '<marker lat="53.999" lng="35.463" type="gas" />' +
    '</markers>'

function xmlParse(str) {
    if (typeof ActiveXObject != 'undefined' && typeof GetObject != 'undefined') {
        var doc = new ActiveXObject('Microsoft.XMLDOM');
        doc.loadXML(str);
        return doc;
    }

    if (typeof DOMParser != 'undefined') {
        return (new DOMParser()).parseFromString(str, 'text/xml');
    }

    return createElement('div', null);
}



//FORMA
//MAP
$('.book').click( function(event) {
    event.preventDefault(); // выключaем стaндaртную рoль элементa
    $('.main-form-map-layers')
        .css('display', 'block')
        .animate({opacity: 1, top: '50%'}, 200);
});
$('#map, .loupe').click( function(){
    $('.main-form-map-layers')
        .animate({opacity: 0, top: '45%'}, 200,
        function() {
            $(this).css('display', 'none');
        });
});
//-------------------------------------------------------------

$('a.layers').click( function(event) {
    event.preventDefault(); // выключaем стaндaртную рoль элементa
    $('.main-form-map-layers')
        .css('display', 'block')
        .animate({opacity: 1, top: '50%'}, 0);

    $('.main-form-map-legend')
        .css('display', 'none')
        .animate({opacity: 1, top: '50%'}, 0);
});
$('#map, .loupe').click( function(){
    $('.main-form-map-layers')
        .animate({opacity: 0, top: '45%'}, 200,
        function() {
            $(this).css('display', 'none');
        });
});
//---------------------------------------------------------------------
$('a.legend').click( function(event) {
    event.preventDefault(); // выключaем стaндaртную рoль элементa
    $('.main-form-map-legend')
        .css('display', 'block')
        .animate({opacity: 1, top: '50%'}, 0);

    $('.main-form-map-layers')
        .css('display', 'none')
        .animate({opacity: 1, top: '50%'}, 0);
});
$('#map, .loupe').click( function(){
    $('.main-form-map-legend')
        .animate({opacity: 0, top: '45%'}, 200,
        function() {
            $(this).css('display', 'none');
        });
});


//-------------------------------------------------------------------------
//LOUPE
$('a.loupe').click( function(event) {
    event.preventDefault();
    $('.main-form-loupe')
        .css('display', 'block')
        .animate({opacity: 1, top: '50%'}, 200);
});

$('#map, .book').click( function(){
    $('.main-form-loupe')
        .animate({opacity: 0, top: '45%'}, 200,
        function() {
            $(this).css('display', 'none');
        });
});