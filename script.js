$(function () {
    $('#js-head-phone, #js-prefooter-phone').mask('+9 (999) 999-99-99');
    $('#js-head-phone, #js-prefooter-phone').keyup(function(){
        var $input = $(this);
        if ($input.val() == "+8") {
            $input.val("+7");
        }
        if ($input.val() == "+9") {
            $input.val("+7 (9");
        }
    });
    $('#js-head-phone, #js-prefooter-phone').hover(
        function(){
            var $input = $(this),
                placeholder = $input.attr("placeholder") ?? "";

            $input.attr("data-placeholder", placeholder);
            $input.attr("placeholder", "+7 (___) - ___-__-__");

            console.log("1");
        }, function(){
            var $input = $(this),
                placeholder = $input.attr("data-placeholder") ?? "";
            $input.attr("placeholder", placeholder);
        });
});

// Fancybox
$(function () {
    // Ссылка "подробнее" в блоке "Доставка транспортной компанией"
    $(".js-delivery").fancybox({
        "padding" : 20,
        "frameWidth" : 700,
        "frameHeight" : 600,
        "overlayOpacity" : 0.8,
    });
    // Всплывающая карта
    $(".js-view-to-map").fancybox({
        "padding" : 10,
        "frameWidth" : 1280,
        "frameHeight" : 600,
        "overlayOpacity" : 0.8,
        "touch" : false
    });
    $(".js-del-price").fancybox({
        "padding" : 20,
        "frameWidth" : 800,
        "frameHeight" : 600,
        "overlayOpacity" : 0.8,
    });
});

// При скролле #js-scroll-title фиксированый
$(function () {
    var $navBar = $('#js-scroll-title');
    var navPos = $navBar.offset().top;
    var navbar_height = $navBar.outerHeight();
    var navbar_pb = parseInt($navBar.parent().css("padding-bottom"));
    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        if (scrollPos >= navPos) {
            $navBar.parent().css('padding-bottom',navbar_height);
            $navBar.addClass('fixed-scroll-title');
        } else {
            $navBar.parent().css('padding-bottom', navbar_pb );
            $navBar.removeClass('fixed-scroll-title');
        }
    });
});

// Валидация форм
$(function () {
    var input_name = $('.input-name');
    var input_phone = $('.input-phone');

    input_name.blur(function () {
        if ($(this).val() < 2 ) {
            $(this).next().show();
        } else {
            $(this).next().hide();
        }
    });
    input_phone.blur(function () {
        if ($(this).val().length < 18) {
            $(this).next().show();
        } else {
            $(this).next().hide();
        }
    });
});

