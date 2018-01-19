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
    if ($(window).scrollTop() < $(".sec-lvl-1").height()) {
        $(".sec-lvl-2 .about").css({
            "margin-top": "0"
        });
        $(".sec-lvl-2 .menu").removeClass("js-fixed");
    }




    var glabal_flag_for_counter = true;


    var win = $(window);
    var scrFunc = function () {
        var t = win.scrollTop(),
            e = win.height();
        $("[data-anim], .list-should-apply,.sec-lvl-4 .for-flex-cont,.sec-lvl-5 .list-acceleration .one-item, .sec-lvl-6 .max-w-960,.sec-lvl-7 .timeline .one-time,.section-11-review .max-w-960 .one-review-item,.section-12-STARTUPS .flexfour .block-one,.for-main-counter,.section-14-team").each(function (n, i) {
            var r = $(i).offset().top,
                s = t + .9 * e;
            s > r ? $(i).attr("data-anim", "true") : true;


            if ($(".for-main-counter").attr('data-anim') == 'true' && glabal_flag_for_counter) {
                glabal_flag_for_counter = false;
                var easy_pie_chart = {};
                $('.circular-pie').each(function () {
                    var text_span = $(this).children('span');
                    $(this).easyPieChart($.extend(true, {}, easy_pie_chart, {
                        size: 250,
                        animate: 2000,

                        lineCap: 'square',
                        barColor: '#ff832f',
                        lineWidth: 20,
                        trackColor: '#dcdcdc',
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
                        barColor: '#ff832f',
                        lineWidth: 15,
                        trackColor: '#dcdcdc',
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
                        barColor: '#ff832f',
                        lineWidth: 15,
                        trackColor: '#dcdcdc',
                        scaleColor: false,
                        onStep: function (value) {
                            text_span.text('$' + ((Math.ceil(value) * 600) + 400));

                        }
                    }));
                });

            }



        })
    }
    scrFunc();









    $(window).scroll(function () {
        
        if ($(window).scrollTop() >= $(".sec-lvl-2 .menu").offset().top) {
            $(".sec-lvl-2 .about").css({
                "margin-top": 67
            });
            $(".sec-lvl-2 .menu").addClass("js-fixed");

        }
        if ($(window).scrollTop() < $(".sec-lvl-1").height()) {
            $(".sec-lvl-2 .about").css({
                "margin-top": "0"
            });
            $(".sec-lvl-2 .menu").removeClass("js-fixed");
        }
        scrFunc();
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

    var flag_change = true;
    
    
    $('.flag-vr').click(function(){
        if(flag_change){
            $(".dropdown-wrch").slideDown(0);
            flag_change = false;
        }
        else{
            $(".dropdown-wrch").slideUp(0);
            flag_change = true;
        }
        
    });



});
