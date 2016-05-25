$(document).ready( function () {

    // LATITUDE && LONGITUDE && ZOOM
    // ------------------------------------------

    var latitude = 51.5255069;
    var longitude = -0.0836207;
    var mapZoom = 14;


    // SET GOOGLE MAP OPTIONS
    // ------------------------------------------

    var mapOptions = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: mapZoom,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };


    // INIZIALIZE THE MAP
    // ------------------------------------------

    var map = new google.maps.Map(document.getElementById('google'), mapOptions);
});
