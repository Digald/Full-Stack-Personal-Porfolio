$(document).ready(function() {
  if ($(window).width() <= 767) {
    $(".text-p2").show();
    $(".text-p1").hide();
  } else {
    $(".text-p2").hide();
    $(".text-p1").show();
  }
});
