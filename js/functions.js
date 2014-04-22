(function($){

	"use strict";

	$(function(){

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
		$('.home').backstretch('images/background.jpg');

		//Windows
		$('section').windows({
	        snapping: true,
	        snapSpeed: 250,
	        snapInterval: 500,
	        onScroll: function(scrollPos){
	            // scrollPos:Number
	        },
	        onSnapComplete: function($el){
	            // after window ($el) snaps into place
	            var seccion = $el.data('seccion');

	            if( seccion != 'home' ){
	            	fixMenu();
	            } else {
	            	unfixMenu()
	            }
	        },
	        onWindowEnter: function($el){
	            // when new window ($el) enters viewport
	            //console.log($el);
	        }
	    });

	});

})(jQuery);

var fixedBox = $('.fixedBox');

function fixMenu (){

	fixedBox.addClass('fixed');

}


function unfixMenu (){

	fixedBox.removeClass('fixed');

}


