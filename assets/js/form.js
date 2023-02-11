
jQuery(function () {
    var element = document.getElementById('number');
    var maskOptions = {
        mask: '+{7} (000) 000-00-00'
    };
    var mask = IMask(element, maskOptions);
});

$('.popup-open').on('click', function (event) {
    $('.popup-fade').fadeIn();
    $('body').addClass('lock');
    return false;
});
$('.popup-close').on('click', function (event) {
    $(this).parents('.popup-fade').fadeOut();
    $('body').removeClass('lock');
    return false;
});
$('.popup-fade').on('click', function (event) {
    if ($(event.target).closest('.popup').length == 0) {
        $('.popup-fade').fadeOut();
        $('body').removeClass('lock');
    }
});