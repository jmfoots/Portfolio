/*
Code courtesy of Matt Litherland
Original Pen "Smooth Anchor Scrolling"
See: https://codepen.io/mattsince87/pen/exByn
*/

function scrollNav() {
  $('.gn-icon').click(function(){  
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 75
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();