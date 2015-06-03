'use strict';

var $ = require('jquery');
var Isotope = require('isotope-layout');
var imagesLoaded = require('imagesloaded');

module.exports = function filtrosPortafolio(){
  var container = document.querySelector('#isotope');
	imagesLoaded(container, function() {
		new Isotope('#isotope', {
			itemSelector: '.post',
			layoutMode: 'fitRows'
		});
	});
	$('.js-filters li').on( 'click', function() {
		var filterValue = $(this).data('filter');
		imagesLoaded(container, function() {
			new Isotope('#isotope', {
				filter: filterValue
			});
		});
		$('.js-filters li').removeClass('active');
		$(this).addClass('active');
	});
};
