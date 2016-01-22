// Initiation function
var init = function(){

  //- Google analytics event for outbound links
  $("a[href^='http']").click(function(e) {
    var url = $(this).attr("href");
    ga('send', 'event', 'outbound', 'click', url, { 'transport': 'beacon' });
  });
}

// Initiation on page load
window.onload = init;
