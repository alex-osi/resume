// $(document).ready(function() {
//
//     //popUp
//     // $(".but_ml").magnificPopup();
//
//     //E-mail Ajax Send
//     $("form").submit(function() { //Change
//         var th = $(this);
//         $.ajax({
//             type: "POST",
//             url: "mail.php", //Change
//             data: th.serialize()
//         }).done(function() {
//             alert("Спасибо! Скоро я с Вами свяжусь");
//             setTimeout(function() {
//                 // Done Functions
//                 th.trigger("reset");
//                 // $.magnificPopup.close();
//             }, 1000);
//         });
//         return false;
//     });
//
// });
//
//
//
// $('.sl').slick({
//     autoplay: true,
//     autoplaySpeed: 1500,
// });


// $('.sl').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//         {
//             breakpoint: 768,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 3
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 1
//             }
//         }
//     ]
// });
// $('#exampleModal').on('show.bs.modal', function (event) {
//     var button = $(event.relatedTarget) // Button that triggered the modal
//     var recipient = button.data('') // Extract info from data-* attributes
//     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//     var modal = $(this)
//     modal.find('.modal-title').text('New message to ')
//     modal.find('.modal-body input').val(recipient)
// })

// Фильтрация блоков с помощью jQuery
var fActive = '';

function filterColor(color){
    if(fActive != color){
        $('#fil-1 div').filter('.'+color).slideDown();
        $('#fil-1 div').filter(':not(.'+color+')').slideUp();
        fActive = color;
    }
}

$('.f-red').click(function(){ filterColor('red'); });
$('.f-blue').click(function(){ filterColor('blue'); });
$('.f-green').click(function(){ filterColor('green'); });

$('.f-all').click(function(){
    $('#fil-1 div').slideDown();
    fActive = 'all';
});

//кнопка Вверх
$(window).scroll(function() {
    if ($(this).scrollTop() > 100){
        $('.top').addClass('active');
        // alert(console.log(111))
    } else {
        $('.top').removeClass('active');
    }
});
$('.top').click(function() {
    $('html , body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});