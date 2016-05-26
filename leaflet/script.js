//var map = L.map('london').setView([40.717192, -74.012042], 17);


// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('london').setView([40.717192,-74.012042], 17);

/* to change the location of the map change the lat and long, here 40.717192,-74.012042.
 To change the default zoom level change 17 to another number. 0 is entire world twice over and 18 is the closest you can get
 */

// ADD AN OPENSTREETMAP TILE LAYER
// ------------------------------------------------------------------------------------------

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// ADD A MARKER IN THE GIVEN LOCATION, ATTACH SOME POPUP CONTENT TO IT AND OPEN THE POPUP
// ------------------------------------------------------------------------------------------

L.marker([40.717192,-74.012042]).addTo(map)
    .bindPopup('The Borough of Manhattan Community College.')
    .openPopup();