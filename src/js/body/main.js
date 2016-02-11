// Initiation function
var init = function(){

  //- Google analytics event for outbound links
  $("a[href^='http']").on("click", function(e) {
    var url = $(this).attr("href");
    ga('send', 'event', 'outbound', 'click', url, { 'transport': 'beacon' });
  });

  //- Email link
  $("#mail").on("click", function(e) {
    var username = "wardoosterlijnck"
    var domain = "gmail.com";
    window.location.href = "mailto:" + username + "@" + domain;
  });
}

// Initiation on page load
window.onload = init;
