// ---------------------------------------------
// INITIATION FUNCTION
// ---------------------------------------------
var init = function(){
  // Initiate page animations
  // new WOW().init();

  // Anchor links scroll to anchor
  $("a[href^='#']").on('click', function(e) {

     // prevent default anchor click behavior
     e.preventDefault();

     // store hash
     var hash = this.hash;

     // animate
     $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 300, function(){

         // when done, add hash to url (default click behaviour)
         window.location.hash = hash;
       });

  });
}


// ---------------------------------------------
// INITIATION ON PAGE LOAD
// ---------------------------------------------
window.onload = init;