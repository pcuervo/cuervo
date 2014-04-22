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

		/**
		 * Validación de emails
		 */
		window.validateEmail = function (email) {
			var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return regExp.test(email);
		};



		/**
		 * Regresa todos los valores de un formulario como un associative array
		 */
		window.getFormData = function (selector) {
			var result = [],
				data   = $(selector).serializeArray();

			$.map(data, function (attr) {
				result[attr.name] = attr.value;
			});
			return result;
		}

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
	    })

	});

})(jQuery);

var fixedBox = $('.fixedBox');

function fixMenu (){

	fixedBox.addClass('fixed');

}


function unfixMenu (){

	fixedBox.removeClass('fixed');

}

})(jQuery);
