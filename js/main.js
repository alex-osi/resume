$(document).ready(function() {

    //popUp
    // $(".but_ml").magnificPopup();

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Спасибо! Скоро я с Вами свяжусь");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
                // $.magnificPopup.close();
            }, 1000);
        });
        return false;
    });

});

// $('#exampleModal').on('show.bs.modal', function (event) {
//     var button = $(event.relatedTarget) // Button that triggered the modal
//     var recipient = button.data('') // Extract info from data-* attributes
//     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//     var modal = $(this)
//     modal.find('.modal-title').text('New message to ')
//     modal.find('.modal-body input').val(recipient)
// })