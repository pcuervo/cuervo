'use strict';

var $ = require('jquery');

module.exports = function () {
  $('.cardContainer').on('click', function(){
    flipCard( $(this).find('.card') );
  });

  function flipCard(element){
    $(element).toggleClass('flipped');
  }
};
