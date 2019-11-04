$(document).ready(function(){
	L.mapbox.accessToken = 'pk.eyJ1IjoibW9iaWxlbWVsb2R5IiwiYSI6ImNpanJudHRyMjBjemh0aG01OGwzbXlnODUifQ.IFhw5wfKK-XQjitGxz1wFg';

	// Setup drinks map
	const drinksMap = L.mapbox.map('drinks-map', 'mobilemelody.0c8b0204', { minZoom: 8 })
    .setView([38.696462, -9.191909], 12);

  // Setup ceremony map
	const ceremonyMap = L.mapbox.map('ceremony-map', 'mobilemelody.0c8b0204', { minZoom: 8 })
    .setView([38.740155, -9.180347], 12);

  // Add marker to drinks map
	L.mapbox.featureLayer([{
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-9.191909, 38.696462]
		},
		properties: {
			title: 'SUD Lisboa',
			description: 'Avenida Brasília - Pavilhão Poente<br>Fronteira Palace, Lisbon 1300-598',
		}
	}]).addTo(drinksMap);
	drinksMap.scrollWheelZoom.disable();

	// Add marker to ceremony map
	L.mapbox.featureLayer([{
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-9.180347, 38.740155]
		},
		properties: {
			title: 'Palacio dos Marqueses de Fronteira',
			description: 'Largo Sao Domingos de Benfica 1<br>Fronteira Palace, Lisbon 1500-554',
		}
	}]).addTo(ceremonyMap);
	ceremonyMap.scrollWheelZoom.disable();

});