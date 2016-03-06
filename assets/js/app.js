// @codekit-append "components/_nav.js";


// vars
var viewportWidth = window.innerWidth;
var viewportHeight = window.innerHeight;

$(document).ready(function(){

  // When viewportHeight resize.

  $(window).resize(function() {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    $('#headerIntro').css('height', viewportHeight);
  });

});
