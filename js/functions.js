(function($){
	"use strict";
	$(function(){

		/*------------------------------------*\
			#ON LOAD
		\*------------------------------------*/




		/*------------------------------------*\
			#Triggered events
		\*------------------------------------*/




		/*------------------------------------*\
			#RESPONSIVE
		\*------------------------------------*/

	});
})(jQuery);

/*------------------------------------*\
	#ON LOAD
\*------------------------------------*/
function creaMapa (){

	var styles = [
		{
		  stylers: [
			{ hue: "#00a8ab" }
		  ]
		}
	];

	function initialize() {
		var notMobile = $(document).width() > 480 ? true : false;
		var coordMexico = new google.maps.LatLng(19.401933, -99.172383);
		var mapOptions = {
			zoom: 10,
			center: coordMexico,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: styles,
			scrollwheel: false,
			draggable: notMobile
		}

		var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
		var image = 'images/marker.png';
		var markerMex = new google.maps.Marker({
			position: coordMexico,
			map: map,
			title: 'Pequeño Cuervo - México',
			icon: image
		});
		var coordIndia = new google.maps.LatLng(30.766813, 76.784913);
		var markerIndia = new google.maps.Marker({
			position: coordIndia,
			map: map,
			title: 'Pequeño Cuervo - India',
			icon: image
		});
		var coordQuebec = new google.maps.LatLng(46.814394, -71.222827);
		var markerQuebec = new google.maps.Marker({
			position: coordQuebec,
			map: map,
			title: 'Pequeño Cuervo - Quebec',
			icon: image
		});
		var markers = [ markerMex, markerIndia, markerQuebec ];
		autoCenter( map, markers );
	}
	google.maps.event.addDomListener(window, 'load', initialize);
}

function autoCenter( map, markers ) {

    var bounds = new google.maps.LatLngBounds();
    $.each(markers, function (index, marker) { bounds.extend(marker.position); });
    map.fitBounds(bounds);

    // var listener = google.maps.event.addListener(map, "idle", function() {
    //     if (map.getZoom() > 16) map.setZoom(16);
    //     google.maps.event.removeListener(listener);
    // });

} // autoCenter




/*------------------------------------*\
	#Triggered events
\*------------------------------------*/

function flipCard(element){
	$(element).toggleClass('flipped');
}

function filtrosPortafolio(){
	var $container = $('#isotope');
	$container.imagesLoaded( function() {
		$container.isotope({
			itemSelector: '.post',
			layoutMode: 'fitRows'
		});
	});
	$('.js-filters li').on( 'click', function() {
		var filterValue = $(this).data('filter');
		$container.imagesLoaded( function() {
			$container.isotope({
				filter: filterValue
			});
		});
		$('.js-filters li').removeClass('active');
		$(this).addClass('active');
	});
}

/**
 * Opens Modal
 * @param element
**/
function openModal(element, project){;
	var aAbrir = element.data('project');
	console.log(aAbrir);
	aAbrir = $('#js-'+aAbrir+'.modal-wrapper' );
	aAbrir.removeClass('hide');
}

/**
 * Closes Modal
 * @param element to be closed
**/
function closeModal(element){
	var aCerrar = element.closest('.modal-wrapper');
	aCerrar.addClass('hide');
	$(document).unbind('keydown');
}


function toggleMenuMovil(){
	$('.js-mobile-menu').toggleClass('closed');
	$('.lines-button').toggleClass('closed');
}



/*------------------------------------*\
	#RESPONSIVE
\*------------------------------------*/