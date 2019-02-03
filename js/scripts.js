$(document).ready(function () {


    $('.open-hidden-block').click(function () {
        if ($(this).hasClass('slided')) {
            $(this).removeClass('slided');
            $(this).parent().find('.hidden-block-desc').slideUp(100);
        } else {
            $(this).addClass('slided');
            $(this).parent().find('.hidden-block-desc').slideDown(100);
        }
    });

    if ($(window).scrollTop() >= $(".sec-lvl-menu .menu").offset().top) {
        $(".sec-lvl-2 .about").css({
            "margin-top": 67
        });
        $(".sec-lvl-menu .menu").addClass("js-fixed");

    }
    if ($(window).scrollTop() < $(".sec-lvl-1").height()) {
        $(".sec-lvl-2 .about").css({
            "margin-top": "0"
        });
        $(".sec-lvl-menu .menu").removeClass("js-fixed");
    }




    



    $(window).scroll(function () {
        
        if ($(window).scrollTop() >= $(".sec-lvl-menu .menu").offset().top) {
            $(".sec-lvl-2 .about").css({
                "margin-top": 67
            });
            $(".sec-lvl-menu .menu").addClass("js-fixed");

        }
        if ($(window).scrollTop() < $(".sec-lvl-1").height()) {
            $(".sec-lvl-2 .about").css({
                "margin-top": "0"
            });
            $(".sec-lvl-menu .menu").removeClass("js-fixed");
        }
    });

    $('#menu-fixed li a').click(function (e) {
        e.preventDefault;

        if ($(this).attr('href')) {
            var el = $(this).attr('href');
            $('body, html').animate({
                scrollTop: $(el).offset().top - 67
            }, 700);

            return false;
        }
    });



    
    
    $('.open-modal-1').click(function(){
        $('#betrip').modal('show');
    });
    $('.open-modal-2').click(function(){
        $('#mouse').modal('show');
    });
    $('.open-modal-3').click(function(){
        $('#tracks').modal('show');
    });
    $('.open-modal-4').click(function(){
        $('#TryFit').modal('show');
    });
    $('.open-modal-5').click(function(){
        $('#Vyng').modal('show');
    });
    $('.open-modal-6').click(function(){
        $('#vango').modal('show');
    });
    
    $('.open-modal-org-1').click(function(){
        $('#org1').modal('show');
    });
    $('.open-modal-org-2').click(function(){
        $('#org2').modal('show');
    });
    $('.open-modal-org-3').click(function(){
        $('#org3').modal('show');
    });
    
    
    
    
    $('.read-more-btn').click(function(){
        $('#add-text').css({"display": "block"});
        $('.read-more-btn').css({"display": "none"});
    });
    
    
    

});
