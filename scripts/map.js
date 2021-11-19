var map = L.map('map').setView([35.031872792022675, 137.46898339244504], 5);

L.tileLayer("https://api.maptiler.com/maps/jp-mierune-streets/{z}/{x}/{y}.png?key=GFYCAs66Z02qiSWaSlWC", {
    attribution: '<a href="https://maptiler.jp/" target="_blank">&copy; MIERUNE</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    minZoom: 5,
    maxZoom: 20,
}).addTo(map)
/* markers*/
var marker = L.marker([35.031872792022675, 137.46898339244504]).addTo(map);
marker.bindPopup("Auto Land Tsukude")
var marker = L.marker([34.97465775205758, 133.615516043434]).addTo(map);
marker.bindPopup("Bihoku Highland Circuit")
var marker = L.marker([38.141370634289615, 140.77201010033428]).addTo(map);
marker.bindPopup("Sportland Sugo")
var marker = L.marker([37.64484384920244, 140.37088153552972]).addTo(map);
marker.bindPopup("Ebisu Circuit")
var marker = L.marker([36.47699593262415, 138.8783271476077]).addTo(map);
marker.bindPopup("mount Haruna touge")

/* boundaries*/
var southWest = L.latLng(20, 110),
northEast = L.latLng(50, 165);
var bounds = L.latLngBounds(southWest, northEast);

map.setMaxBounds(bounds);
map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false });
});