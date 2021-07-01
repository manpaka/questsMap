//1st batch

//Scale UI
L.control.scale({
  metric: false,
  imperial: true,
  position: 'bottomleft'
}).addTo(map);

//Watermark
L.Control.Watermark = L.Control.extend({
  onAdd: function(map) {
    var img = L.DomUtil.create('img');
    img.src = 'https://via.placeholder.com/140x100';
    img.style.width = '200px';
    return img;
  },
  onRemove: function(map) {},
});
L.control.watermark = function(opts) {return new L.Control.Watermark(opts);}
L.control.watermark({position: 'topright'}).addTo(map);



//Custom geojson polygon
var geojsonMarker = {
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
L.geoJSON(geojsonMarker).addTo(map);



//Leaflet Marker Class
var LeafletIcon = L.Icon.extend({
  options: {
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [12, -90]
  }
});



//instenses of Marker Class
var orangeIcon = new LeafletIcon({iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-orange.png'});
    greenIcon = new LeafletIcon({iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png'}),
    redIcon = new LeafletIcon({iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png'})

var greenMarker = L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);
var redMarker = L.marker([51.5, -0.08], {icon: redIcon}).addTo(map);
var orangeMarker = L.marker([51.5, -0.1], {icon: orangeIcon}).addTo(map);

//Circle Marker
var circle = L.circle([51.508, -0.11], {
  color: 'black',
  fillColor: 'red',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);

//Polygon Marker
var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map);

//Marker Word Popups
orangeMarker.bindPopup("<b> This is Orange </b><br> ");
greenMarker.bindPopup("<b> This is Green </b><br> ");
redMarker.bindPopup("<b> This is Red </b><br> ");
circle.bindPopup("Danger Zone").openPopup();
polygon.bindPopup("Potential Bounty");


//2nd batch
//adds a bunch of markers
var xy = function(x, y) {
  if (L.Util.isArray(x)) { // When doing xy([x, y]);
    return yx(x[1], x[0]);
  }
  return yx(y, x); // When doing xy(x, y);
};

var sol = L.latLng([500, 500]);
L.marker(sol).addTo(map);
map.setView( [70, 120], 1);

var sol      = xy(175.2, 145.0);
var mizar    = xy( 41.6, 130.1);
var kruegerZ = xy( 13.4,  56.5);
var deneb    = xy(218.7,   8.3);

L.marker(     sol).addTo(map).bindPopup(      'Sol');
L.marker(   mizar).addTo(map).bindPopup(    'Mizar');
L.marker(kruegerZ).addTo(map).bindPopup('Krueger-Z');
L.marker(   deneb).addTo(map).bindPopup(    'Deneb');

var travel = L.polyline([sol, deneb]).addTo(map);

// 5E API JSON tests
const acidArrow = JSON.parse('{"index":"acid-arrow","name":"Acid Arrow","desc":["A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."],"higher_level":["When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."],"range":"90 feet","components":["V","S","M"],"material":"Powdered rhubarb leaf and an adders stomach.","ritual":false,"duration":"Instantaneous","concentration":false,"casting_time":"1 action","level":2,"attack_type":"ranged","damage":{"damage_type":{"index":"acid","name":"Acid","url":"/api/damage-types/acid"},"damage_at_slot_level":{"2":"4d4","3":"5d4","4":"6d4","5":"7d4","6":"8d4","7":"9d4","8":"10d4","9":"11d4"}},"school":{"index":"evocation","name":"Evocation","url":"/api/magic-schools/evocation"},"classes":[{"index":"wizard","name":"Wizard","url":"/api/classes/wizard"}],"subclasses":[{"index":"lore","name":"Lore","url":"/api/subclasses/lore"},{"index":"land","name":"Land","url":"/api/subclasses/land"}],"url":"/api/spells/acid-arrow"}');

const bandit = JSON.parse('{"index":"bandit","name":"Bandit","size":"Medium","type":"humanoid","subtype":"any race","alignment":"any non-lawful alignment","armor_class":12,"hit_points":11,"hit_dice":"2d8","speed":{"walk":"30 ft."},"strength":11,"dexterity":12,"constitution":12,"intelligence":10,"wisdom":10,"charisma":10,"proficiencies":[],"damage_vulnerabilities":[],"damage_resistances":[],"damage_immunities":[],"condition_immunities":[],"senses":{"passive_perception":10},"languages":"any one language (usually Common)","challenge_rating":0.125,"xp":25,"actions":[{"name":"Scimitar","desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.","attack_bonus":3,"damage":[{"damage_type":{"index":"slashing","name":"Slashing","url":"/api/damage-types/slashing"},"damage_dice":"1d6+1"}]},{"name":"Light Crossbow","desc":"Ranged Weapon Attack: +3 to hit, range 80 ft./320 ft., one target. Hit: 5 (1d8 + 1) piercing damage.","attack_bonus":3,"damage":[{"damage_type":{"index":"piercing","name":"Piercing","url":"/api/damage-types/piercing"},"damage_dice":"1d8+1"}]}],"url":"/api/monsters/bandit"}');
