$(document).ready(function () {
    $('.sl-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.sl-1',
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.sl-1').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.sl-2',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });





    var easy_pie_chart = {};
    $('.circular-pie').each(function () {
        var text_span = $(this).children('span');
        $(this).easyPieChart($.extend(true, {}, easy_pie_chart, {
            size: 250,
            animate: 2000,

            lineCap: 'square',
            barColor: '#0eaf7b',
            lineWidth: 20,
            trackColor: '#f6f6f6',
            scaleColor: false,
            onStep: function (value) {
                text_span.text('$' + (Math.ceil(value) * 600));

            }
        }));
    });

    var easy_pie_chart_2 = {};
    $('.circular-pie_2').each(function () {
        var text_span = $(this).children('span');
        $(this).easyPieChart($.extend(true, {}, easy_pie_chart_2, {
            size: 150,
            animate: 2000,

            lineCap: 'square',
            barColor: '#0eaf7b',
            lineWidth: 15,
            trackColor: '#f6f6f6',
            scaleColor: false,
            onStep: function (value) {
                text_span.text('$' + ((Math.ceil(value) * 600) + 200));
            
            }
        }));
    });
    var easy_pie_chart_3 = {};
    $('.circular-pie_3').each(function () {
        var text_span = $(this).children('span');
        $(this).easyPieChart($.extend(true, {}, easy_pie_chart_3, {
            size: 150,
            animate: 2000,
            lineCap: 'square',
            barColor: '#0eaf7b',
            lineWidth: 15,
            trackColor: '#f6f6f6',
            scaleColor: false,
            onStep: function (value) {
                text_span.text('$' + ((Math.ceil(value) * 600) + 400));

            }
        }));
    });

    $('.open-hidden-block').click(function () {
        if ($(this).hasClass('slided')) {
            $(this).removeClass('slided');
            $(this).parent().find('.hidden-block-desc').slideUp(100);
        } else {
            $(this).addClass('slided');
            $(this).parent().find('.hidden-block-desc').slideDown(100);
        }
    });

   if ($(window).scrollTop() >= $(".sec-lvl-2 .menu").offset().top) {
        $(".sec-lvl-2 .about").css({
            "margin-top": 67
        });
        $(".sec-lvl-2 .menu").addClass("js-fixed");

    }
    if ($(window).scrollTop() < $(".sec-lvl-1").height()){
        $(".sec-lvl-2 .about").css({
            "margin-top": "0"
        });
        $(".sec-lvl-2 .menu").removeClass("js-fixed");
    }
    

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".sec-lvl-2 .menu").offset().top) {
            $(".sec-lvl-2 .about").css({
                "margin-top": 67
            });
            $(".sec-lvl-2 .menu").addClass("js-fixed");

        }
        if ($(window).scrollTop() < $(".sec-lvl-1").height()){
            $(".sec-lvl-2 .about").css({
                "margin-top": "0"
            });
            $(".sec-lvl-2 .menu").removeClass("js-fixed");
        }
    });

    $('#menu-fixed li a').click(function (e) {
        e.preventDefault;
        
        if($(this).attr('href')){
            var el = $(this).attr('href');
            $('body, html').animate({
                scrollTop: $(el).offset().top - 67
            }, 700);
            
            return false;
        }
    });





});