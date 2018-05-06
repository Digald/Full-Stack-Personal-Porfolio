$(document).ready(function() {
  $("#contact-form").on("submit", function(e) {
    e.preventDefault();
    var name = $("#nameInput")
      .val()
      .trim();
    var email = $("#emailInput")
      .val()
      .trim();
    var subject = $("#subjectInput")
      .val()
      .trim();
    var message = $("#messageInput")
      .val()
      .trim();
    $("#nameInput").val("");
    $("#emailInput").val("");
    $("#subjectInput").val("");
    $("#messageInput").val("");
    $("#contact-form").hide();
    $("#contact").append("<p class='message-1'>Sending Message...</p>");
    $.ajax({
      method: "POST",
      url: "/sendmail",
      data: {
        name: name,
        email: email,
        subject: subject,
        message: message
      }
    }).done(function(res) {
      if (res.mailSent) {
        $(".message-1").hide();
        $("#contact").append(
          "<p>Message sucessfully recieved! Thank you for your inquiry and I will get in touch as soon as I am available.</p>"
        );
      } else {
        $(".message-1").hide();
        $("#contact").append(
          "<p>FAILED TO SEND :( Something might have broken so please try again later or try to reach me through my other social media links.</p>"
        );
      }
    });
  });
});
