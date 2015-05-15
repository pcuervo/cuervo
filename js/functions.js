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
		var centro = new google.maps.LatLng(19.401933, -99.172383);
		var nosotros = new google.maps.LatLng(19.401933, -99.172383);
		var mapOptions = {
			zoom: 19,
			center: nosotros,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: styles,
			scrollwheel: false,
			draggable: notMobile
		}

		var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
		var image = 'images/marker.png';

		var marker = new google.maps.Marker({
			position: nosotros,
			map: map,
			title: 'Pequeño Cuervo',
			icon: image
		});
	}
	google.maps.event.addDomListener(window, 'load', initialize);
}




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