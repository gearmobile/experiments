'use strict';
const $ = require('jquery');
const slick = require('slick-carousel');
const GoogleMapsLoader = require('google-maps');


// SLICK SLIDER
// -------------------------------------------------------------------------


$('.slider').slick({
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    //centerMode: true
});


// GOOGLE MAP
// -------------------------------------------------------------------------

GoogleMapsLoader.KEY = 'AIzaSyB8K34DDu7gT9BqenQE8vJDxx7FQZt4Khg';
GoogleMapsLoader.LANGUAGE = 'en';

GoogleMapsLoader.load(function (google) {
    const ahmedabad = document.getElementById('map');
    const ahmedabadCoords = new google.maps.LatLng(23.022505, 72.57136209999999);
    const zoomValue = 8;

    const ahmedabadProp = {
        center: ahmedabadCoords,
        zoom: zoomValue,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        scrollwheel: false
        // styles: brisbaneMapStyles // ПОДКЛЮЧИТЬ КАСТОМНЫЕ СТИЛИ ДЛЯ КАРТЫ
    };

    const ahmedabadMap = new google.maps.Map(ahmedabad, ahmedabadProp);
    const ahmedabadMapCenter = ahmedabadMap.getCenter();

    google.maps.event.addDomListener(window, 'resize', function () {
        ahmedabadMap.setCenter(ahmedabadMapCenter);
    });

    google.maps.event.addListener(ahmedabadMap, 'center_changed', function () {
        window.setTimeout(function () {
            ahmedabadMap.setCenter(ahmedabadMapCenter);
        }, 3000);
    });

});
