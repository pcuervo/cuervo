(function($){

	"use strict";

	$(function(){

		//Full Home
		var altoWindow = $(window).height();

		$('#home').css('min-height', altoWindow);

		//Full Pryectos
		$('.proyectos').css('height', altoWindow);

		// Envio contacto
	    $('form').submit(function(e){
	    	e.preventDefault();
	    	console.log($(this).serializeArray());
	    	$.post(
	    		'procesaForma.php',
	    		$(this).serialize(),
	    		function(data){
	    			var x = jQuery.parseJSON(data);
	    			console.log("Gracias por tu msg " + x.nombre);
	    			//mostrarMsgContacto(data);
	    		}
	    	);
	    });

		//Backstretch
		$('#home').backstretch('images/background.jpg');

		// navegación contacto
		navContacto();

		//Flip cars
		var frontHeight, backHeight;
		$('.servicioContainer').hover(
			function(){

				cardHeight($(this));

				$(this).find('.servicio').addClass('flipped');
			},
       		function(){
       			$(this).find('.servicio').removeClass('flipped');
       		}
		);

		$('.servicioContainer').each(function(){

			cardHeight($(this));

		});

		////////////////
		// RESPONSIVE //
		////////////////

		// mapa google 
		creaMapa();
	});

})(jQuery);

function cardHeight(card){
	frontHeight = card.find('.front').height(),
	backHeight = card.find('.back').height();

	if (frontHeight > backHeight) {
	    card.height(frontHeight);
	}
	else if (backHeight > frontHeight) {
		card.height(backHeight);
	}
	else {
		card.height(backHeight);
	}
}

var fixedBox = $('.fixedBox');

function fixMenu (){

	fixedBox.addClass('fixed');

}


function unfixMenu (){

	fixedBox.removeClass('fixed');

}

function navContacto(){
	// toggle checkboxes
	$('.paso div').on('click', function(e){
		servicio = $(this).attr('data-servicio');
		isChecked = $('.paso div input[value="'+servicio+'"]').prop('checked');
		if(isChecked)
			$('.paso div input[value="'+servicio+'"]').prop('checked', false);
		else
			$('.paso div input[value="'+servicio+'"]').prop('checked', true);
	});
	// avance entre preguntas
	$('.paso a').on('click', function(e){
		e.preventDefault();
		var currentStep = $(this).parent().attr('data-paso');
		nextStep(currentStep);
	});
}
function nextStep(current){
	// esconde paso actual
	$('.paso[data-paso="'+current+'"]').removeClass('show');
	$('.paso[data-paso="'+current+'"]').addClass('hide');
	var next = parseInt(current) + 1;
	// muestra siguiente paso
	$('.paso[data-paso="'+next+'"]').removeClass('hide');
	$('.paso[data-paso="'+next+'"]').addClass('show');
}
function mostrarMsgContacto(nombre){
}

function creaMapa (){
	var styles = [
		{
		  stylers: [
			{ hue: "#00a8ab" }
		  ]
		}
	];
	
	function initialize() {
		var centro = new google.maps.LatLng(19.409948, -99.168392);
		var mapOptions = {
			zoom: 18,
				center: centro,
			mapTypeId: google.maps.MapTypeId.ROADMAP, 
			styles: styles
	  	}
	  var map = new google.maps.Map(document.getElementById('mapa'),
	      mapOptions);

	  var marker = new google.maps.Marker({
      position: centro,
      map: map,
      title: 'Pequeño Cuervo'
  });
	}
	google.maps.event.addDomListener(window, 'load', initialize);
}
