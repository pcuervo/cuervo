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




/*------------------------------------*\
	#RESPONSIVE
\*------------------------------------*/