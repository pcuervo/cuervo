'use strict';

var $ = require('jquery');

module.exports = function creaMapa (){

	var styles = [
		{
		  stylers: [
        { hue: "#00a8ab" }
		  ]
		}
	];

	function initialize() {
		var notMobile = $(document).width() > 480 ? true : false;
		var centro = new google.maps.LatLng(19.402319, -99.172324);
		var nosotros = new google.maps.LatLng(19.402319, -99.172324);
		var mapOptions = {
			zoom: 19,
			center: nosotros,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: styles,
			scrollwheel: false,
			draggable: notMobile
		}

		var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
    var image = '../../images/marker.png';

		var marker = new google.maps.Marker({
			position: nosotros,
			map: map,
			title: 'Pequeño Cuervo',
			icon: image
		});
	}
	google.maps.event.addDomListener(window, 'load', initialize);
};
