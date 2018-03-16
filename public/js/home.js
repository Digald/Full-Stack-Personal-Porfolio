$(document).ready(function() {
  // change places of brand name and collapsable navbar at screen width

  if ($(window).width() <= 767) {
    $(".navbar-brand")
      .detach()
      .prependTo("#nav-container");
  } else {
    $(".navbar-brand")
      .detach()
      .appendTo("#nav-container");
  }

  // collapsed nav menu for mobile and smaller screens
  $("#toggle-drop").on("click", function() {
    if ($("#toggle-drop").data("overlay") === "open") {
      $("#myNav").css("height", "0%");
      $("#toggle-drop").data("overlay", "closed");
    } else if ($("#toggle-drop").data("overlay") === "closed") {
      $("#myNav").css("height", "100%");
      $("#toggle-drop").data("overlay", "open");
    }
  });
});
