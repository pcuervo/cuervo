'use strict';

var $ = require('jQuery');
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

module.exports = {
  close: closeModal,
  open: openModal
};
