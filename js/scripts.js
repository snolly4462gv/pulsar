$(document).ready(function () {
    $('.sl-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.sl-1',
        infinite: false
    });
    $('.sl-1').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.sl-2',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });







});
