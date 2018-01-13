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
    
    
    
    

    var easy_pie_chart = {};
    $('.circular-pie').each(function() {
        var text_span = $(this).children('span');
        $(this).easyPieChart($.extend(true, {}, easy_pie_chart, {
            size : 250,
            animate : 2000,
            
            lineCap : 'square',
            barColor : '#0eaf7b',
            lineWidth : 20,
            trackColor : '#f6f6f6',
            scaleColor : false,
            onStep : function(value) {
                text_span.text('$' + (Math.ceil(value)*600));
                
            }
        }));
    });
    
    var easy_pie_chart_2 = {};
    $('.circular-pie_2').each(function() {
        var text_span = $(this).children('span');
        $(this).easyPieChart($.extend(true, {}, easy_pie_chart_2, {
            size : 150,
            animate : 2000,
          
            lineCap : 'square',
            barColor : '#0eaf7b',
            lineWidth : 15,
            trackColor : '#f6f6f6',
            scaleColor : false,
            onStep : function(value) {
                text_span.text('$' + ((Math.ceil(value)*600)+200));
               console.log(Math.ceil(value));
            }
        }));
    });
    var easy_pie_chart_3 = {};
    $('.circular-pie_3').each(function() {
        var text_span = $(this).children('span');
        $(this).easyPieChart($.extend(true, {}, easy_pie_chart_3, {
            size : 150,
            animate : 2000,
            lineCap : 'square',
            barColor : '#0eaf7b',
            lineWidth : 15,
            trackColor : '#f6f6f6',
            scaleColor : false,
            onStep : function(value) {
                text_span.text('$' + ((Math.ceil(value)*600)+400));
              
            }
        }));
    });
    
    
     // Number Counter
  /*(function() {
    var Core = {
      initialized : false,
      initialize : function() {
        if (this.initialized)
          return;
        this.initialized = true;
        this.build();
      },
      build : function() {
        this.animations();
      },
      animations : function() {
        // Count To
        $(".number-counters [data-to]").each(function() {
          var $this = $(this);
          $this.appear(function() {
            $this.countTo({});
          }, {
            accX : 0,
            accY : -150
          });
        });
      },
    };
    Core.initialize();
  })();
    
*/
    





});
