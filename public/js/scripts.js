$(function(){
    $('.carousel').carousel({
        interval: false
      });

    $('.search')  .on('click', function() {
        $('.navbar-right .navbar-form').slideToggle();
    });
});

$(window).load(function() {
    var carousecaptionWidth = $('#carousel-sidebar .active img').width();
    $('carousel-sidebar img').each(function() {
        $(this).attr('width', carousecaptionWidth);
    });
    $('#carousel-sidebar .sidebar-carousel-caption').css('max-width', carousecaptionWidth + 'px');
    $('#carousel-sidebar .carousel-indicators').css('max-width', carousecaptionWidth + 'px');
});