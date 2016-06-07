window.addEventListener('DOMContentLoaded', function () {


    var map;

    function initMap () {

        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }

        // COORDINATES
        // ------------------------------------------
        var mapCenterCoords = { lat: -27.4710107, lng: 153.02344889999995 };
        var mapMarkerCoodrs = { lat: -27.4644876, lng: 153.1048174 };


        // MAP OPTIONS
        // ------------------------------------------
        var mapOptions = {
            center: mapCenterCoords,
            zoom: 12,
            disableDefaultUI: true,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
            }

        };

        // MAP STYLES
        // ------------------------------------------
        var customMapType = new google.maps.StyledMapType (
            [],
            { name: 'Custom Style' });
        var customMapTypeId = 'custom_style';



        // MAP INIT
        // ------------------------------------------
        map = new google.maps.Map( document.getElementById('map'), mapOptions );


        // MAP ICOM MARKER
        // ------------------------------------------
        //var iconPath = '../../img/plugins/location.png';
        //var iconPath = '%=static=%img/assets/google-map/location.png';
        //var iconPath = '%=static=%img/content/location.png';
        var iconPath = '../../img/content/location.png';


        // MAP MARKER
        // ------------------------------------------
        var marker = new google.maps.Marker({
            position: mapMarkerCoodrs,
            map: map,
            title: 'Hello from Australia!',
            animation: google.maps.Animation.DROP,
            draggable: true,
            icon: iconPath
        });

        marker.addListener('click', toggleBounce);

        map.mapTypes.set(customMapTypeId, customMapType);
        map.setMapTypeId(customMapTypeId);



    }

    initMap();

}, false);
