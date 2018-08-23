$(function(){
    $('.carousel').carousel({
        interval: false
      });

    $('.search')  .on('click', function() {
        $('.navbar-right .navbar-form').slideToggle();
    });
})