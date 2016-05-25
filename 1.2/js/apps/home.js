'use strict';

var $ = require('jquery');
var filtrosPortafolio = require('../lib/filtros');
var creaMapa = require('../lib/map');
var modal = require('../lib/map');
var initCards = require('../lib/cards');
var toggleMenuMovil = require('../lib/toggle-menu');

require('../lib/backstretch');

$(function(){

  /*------------------------------------*\
    #ON LOAD
    \*------------------------------------*/
  $('#hero').backstretch('../images/background.jpg');
  filtrosPortafolio();
  creaMapa();
  initCards();

  /*------------------------------------*\
    #Triggered events
    \*------------------------------------*/

  $('.post').on('click', function(e){
    e.preventDefault();
    var project = $(this).data('project');
    modal.open( $(this), project );
  });

  $('.close-modal').on('click', function(event) {
    modal.close( $(this) );
  });

  $('.lines-button').on('click', function(e){
    e.preventDefault();
    toggleMenuMovil();
    $('.js-mobile-menu').toggleClass('closed');
  });

});

