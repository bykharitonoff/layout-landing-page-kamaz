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