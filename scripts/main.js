var map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -1
});

//wrapper to swap to X,Y instead of Y,X,
var yx = L.latLng;
var xy = function(x, y) {
    if (L.Util.isArray(x)) {    // When doing xy([x, y]);
        return yx(x[1], x[0]);
    }
    return yx(y, x);  // When doing xy(x, y);
};

var bounds = [
  [0, 0],
  [1000, 1000]
];
var image = L.imageOverlay('../imgs/donjon.png', bounds).addTo(map);


var Marker = L.Icon.extend({
  options: {

  }
});

var startingMarker = L.marker([514.25, 873.7277896009092]).addTo(map);
var bossRoomMarker = L.marker([903.75, 568.8239745978759]).addTo(map);

//get coords
var lat, lng;
map.addEventListener('mousemove', function(ev) {
  lat = ev.latlng.lat;
  lng = ev.latlng.lng;
});
document.getElementById("map").addEventListener("contextmenu", function(event) {
  // Prevent the browser's context menu from appearing
  event.preventDefault();
  // Add marker
  // L.marker([lat, lng], ....).addTo(map);
  console.log("[" + lat + ', ' + lng + "]");
  return false; // To disable default popup.
});


//Popups
startingMarker.bindPopup("<b> This is the Starting Location </b>");
bossRoomMarker.bindPopup("<b> This is where the final boss is </b>");

//constrains bounds on map
map.fitBounds(bounds);
