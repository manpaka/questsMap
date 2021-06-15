//Scale UI
/*L.control.scale({
  metric: false,
  imperial: true,
  position: 'bottomleft'
}).addTo(map);*/

//Watermark
/*L.Control.Watermark = L.Control.extend({
  onAdd: function(map) {
    var img = L.DomUtil.create('img');
    img.src = 'https://via.placeholder.com/140x100';
    img.style.width = '200px';
    return img;
  },
  onRemove: function(map) {},
});
L.control.watermark = function(opts) {return new L.Control.Watermark(opts);}
L.control.watermark({position: 'topright'}).addTo(map);*/

//Custom geojson polygon
/*var geojsonMarker = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "id": "20d069bf-f908-4d65-81e6-4f72fc9285a4",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [-0.090, 51.495],
          [-0.070, 51.495],
          [-0.070, 51.4825],
          [-0.090, 51.4825]
        ]
      ]
    },
    "properties": {"name": "Danger"}
  }]
}
L.geoJSON(geojsonMarker).addTo(map);*/


//Leaflet Marker Class
/*var LeafletIcon = L.Icon.extend({
  options: {
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [12, -90]
  }
});*/

//instenses of Marker Class
/*var orangeIcon = new LeafletIcon({iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-orange.png'});
    greenIcon = new LeafletIcon({iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png'}),
    redIcon = new LeafletIcon({iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png'})

var greenMarker = L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);
var redMarker = L.marker([51.5, -0.08], {icon: redIcon}).addTo(map);
var orangeMarker = L.marker([51.5, -0.1], {icon: orangeIcon}).addTo(map);*/

//Circle Marker
/*var circle = L.circle([51.508, -0.11], {
  color: 'black',
  fillColor: 'red',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);*/

//Polygon Marker
/*var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map);*/

//Marker Word Popups
/*orangeMarker.bindPopup("<b> This is Orange </b><br> ");
greenMarker.bindPopup("<b> This is Green </b><br> ");
redMarker.bindPopup("<b> This is Red </b><br> ");
circle.bindPopup("Danger Zone").openPopup();
polygon.bindPopup("Potential Bounty");*/
