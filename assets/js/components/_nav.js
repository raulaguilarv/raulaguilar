$('.navToggle').on('click', function(e){
  e.stopPropagation();
  $(this).toggleClass('isActive');
  $('.navPrimary').toggleClass('isActive');
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        $('.navToggle').removeClass('isActive');
        $('.navPrimary').removeClass('isActive');
        return false;

      }
    }
  });
});

$('.goToDown').on('click', function(){
  $('html, body').animate({
    scrollTop: viewportHeight
  }, 1000);
});
