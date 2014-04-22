(function($){

	"use strict";

	$(function(){

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
		 $('.seccion').windows({
	        snapping: true,
	        snapSpeed: 500,
	        snapInterval: 1100,
	        onScroll: function(scrollPos){
	            // scrollPos:Number
	        },
	        onSnapComplete: function($el){
	            // after window ($el) snaps into place
	        },
	        onWindowEnter: function($el){
	            // when new window ($el) enters viewport
	        }
	    })


	});

})(jQuery);