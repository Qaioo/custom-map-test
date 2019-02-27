
// generowanie mapy wraz z ustawieniem pozycji startowej (setView([koordynaty]), zoom startowy - im większa liczba tym większy zoom)
var mymap = L.map('mapid').setView([50.474814, 17.967072], 17);

//warstwa api mapy, ustawienie maksymalnego zooma, oznaczenie autora w attribution, id: .streets / .satellite (zdjecia satelitarne)
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);


//znacznik na mapie (marker) wraz z koordynatami jego polozenia + ikona przypisana do danego punktu	
	L.marker([50.474814, 17.967072]).addTo(mymap)
	.bindPopup("<b>Krapkowice</b><br />Rynek").openPopup;

	L.marker([50.474478, 17.967798]).addTo(mymap)
	.bindPopup("Bar").openPopup;

// var popup = L.popup();

var customIcon = L.icon({
		iconUrl: 'http://joshuafrazier.info/images/firefox.svg',
		iconSize: [38, 95],
});

L.marker([50.473823, 17.966795], {icon: customIcon}).bindPopup("nowa ikona").addTo(map);