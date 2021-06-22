/* eslint-disable */

$(function () {
    $("button#fadeBtn").click(function () {
        $("div#fade").fadeToggle();
    });
    $("button#slideBtn").click(function () {
        $("div#slide").slideToggle();
    });
});
