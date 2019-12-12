/*
Code courtesy of illnino
Original Pen "nexus-like-menu"
See: https://codepen.io/illnino/pen/nsBif
*/
$('.gn-icon-menu').hover(function(){
  $('.gn-menu-wrapper').toggleClass('gn-open-part');
});

$('.gn-menu-wrapper').hover(function(){
  $(this).toggleClass('gn-open-all');
})