(function($){

	"use strict";

	$(function(){

		// Envio contacto
	    $('form').submit(function(e){
	    	e.preventDefault();
	    	console.log($(this).serializeArray());
	    	$.post(
	    		'procesaForma.php',
	    		$(this).serialize(),
	    		function(data){
	    			var x = jQuery.parseJSON(data);
	    			console.log("Gracias por tu msg " + x.name);
	    			mostrarMsgContacto(x.name);
	    		}
	    	);
	    });

		//Backstretch
		$('.home').backstretch('images/background.jpg');

	    fixMenu();
	    navContacto();

	});

})(jQuery);

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
	var map;
	function initialize() {
		console.log('aqui');
	  var mapOptions = {
	    zoom: 8,
	    center: new google.maps.LatLng(-34.397, 150.644)
	  };
	  map = new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);
	}
	google.maps.event.addDomListener(window, 'load', initialize);
}