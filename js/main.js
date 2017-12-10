$(document).ready(function() {

    //popUp
    $(".but_ml").magnificPopup();

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
                $.magnificPopup.close();
            }, 1000);
        });
        return false;
    });

});