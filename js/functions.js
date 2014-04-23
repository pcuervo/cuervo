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
	    	$.post(
	    		'procesaForma.php',
	    		$(this).serialize(),
	    		function(data){
	    			var x = jQuery.parseJSON(data);
	    			console.log("Gracias por tu msg " + x.name);
	    		}
	    	);
	    });

		//Backstretch
		$('#home').backstretch('images/background.jpg');

		//Flip cars

		var frontHeight,
			backHeight;

		$('.cardContainer').hover(
			function(){

				cardHeight($(this));

				$(this).find('.card').addClass('flipped');
			},
       		function(){
       			$(this).find('.card').removeClass('flipped');
       		}
		);

		$('.cardContainer').each(function(){

			cardHeight($(this));

		});

		////////////////
		// RESPONSIVE //
		////////////////

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


