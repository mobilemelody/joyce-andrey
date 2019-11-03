$(document).ready(function(){
	L.mapbox.accessToken = 'pk.eyJ1IjoibW9iaWxlbWVsb2R5IiwiYSI6ImNpanJudHRyMjBjemh0aG01OGwzbXlnODUifQ.IFhw5wfKK-XQjitGxz1wFg';

	// Setup drinks map
	var drinksMap = L.mapbox.map('drinks-map', 'mobilemelody.0c8b0204', { minZoom: 8 })
    .setView([38.740155, -9.180347], 12);

	var drinksLayer = L.mapbox.featureLayer().addTo(drinksMap);

	var drinksGeoJSON = [{
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-9.180347, 38.740155]
		},
		properties: {
			title: 'Palacio dos Marqueses de Fronteira',
			description: 'Largo Sao Domingos de Benfica 1<br>Fronteira Palace, Lisbon 1500-554',
		}
	}]

	drinksLayer.on('layeradd', function(e) {
	  var marker = e.layer,
	      feature = marker.feature;
	  marker.setIcon(L.icon(feature.properties.icon));
	});
	drinksLayer.setGeoJSON(drinksGeoJSON);
	
	drinksMap.scrollWheelZoom.disable();

	// Setup ceremony map
	L.mapbox.accessToken = 'pk.eyJ1IjoibW9iaWxlbWVsb2R5IiwiYSI6ImNpanJudHRyMjBjemh0aG01OGwzbXlnODUifQ.IFhw5wfKK-XQjitGxz1wFg';

	var ceremonyMap = L.mapbox.map('ceremony-map', 'mobilemelody.0c8b0204', { minZoom: 8 })
    .setView([38.740155, -9.180347], 12);

	var ceremonyLayer = L.mapbox.featureLayer().addTo(ceremonyMap);

	var ceremonyGeoJSON = [{
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-9.180347, 38.740155]
		},
		properties: {
			title: 'Palacio dos Marqueses de Fronteira',
			description: 'Largo Sao Domingos de Benfica 1<br>Fronteira Palace, Lisbon 1500-554',
		}
	}]

	ceremonyLayer.on('layeradd', function(e) {
	  var marker = e.layer,
	      feature = marker.feature;
	  marker.setIcon(L.icon(feature.properties.icon));
	});
	ceremonyLayer.setGeoJSON(ceremonyGeoJSON);
	
	ceremonyMap.scrollWheelZoom.disable();

});