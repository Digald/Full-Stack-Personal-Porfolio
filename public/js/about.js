$(document).ready(function() {
    $('#contact-form').on('submit',function(e){
        e.preventDefault();
        var name = $("#nameInput").val().trim();
        var email = $("#emailInput").val().trim();
        var subject = $("#subjectInput").val().trim();
        var message = $('#messageInput').val().trim();
        $("#nameInput").val('');
        $("#emailInput").val('');
        $("#subjectInput").val('');
        $('#messageInput').val('');
        $.ajax({
            method: 'POST',
            url: '/sendmail',
            data: {
                name: name,
                email: email,
                subject: subject,
                message: message
            }
        }).done(function(response){
            console.log(response);
        });
    });
});
