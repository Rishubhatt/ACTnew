(function ($) {
    'use strict';

    var $window = $(window);

    // :: Sticky Active Code
    $window.on("scroll", function(){
        if
      ($(document).scrollTop() > 20){
          $("#banner").addClass("shrink");
        }
        else
        {
            $("#banner").removeClass("shrink");
        }
    });


    $(window).on('scroll', function () {

        var scrollTop = $(this).scrollTop(); 
        $('#moveUp').css({
            transform: 'translate(-50.5%,' + (100 + (-0.09 * scrollTop)) + 'px)'

        });
        $('#moveUp1').css({
            transform: 'translateY(' + (200 + (-0.09 * scrollTop)) + 'px)',
        });

        $('#main_img').css({
            transform: 'translateY(' + (0 + (-0.09 * scrollTop)) + 'px)',
        });



    });
    

   setTimeout(function() {
    $('#mydiv').fadeOut('fast');
}, 1000); 

 $('.pickedColor').keyup(function() {
        $('.light-version').css('background-color', $(this).val());
    })




  
    // :: Carousel Active Code
    if ($.fn.owlCarousel) {

        $(".client_slides").owlCarousel({
            responsive: {
            0: {
                items: 1
            },
            991: {
                    items: 2
                },
            767:{
                    items: 1
                }
            },
            loop: true,
            autoplay: true,
            smartSpeed: 700,
            dots: true
        });

        var dot = $('.client_slides .owl-dot');
        dot.each(function () {
            var index = $(this).index() + 1;
            if (index < 10) {
                $(this).html('0').append(index);
            } else {
                $(this).html(index);
            }
        });
    }

     // :: Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // :: Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('#videobtn').magnificPopup({
            type: 'iframe'
        });
        $('.gallery_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade',
            preloader: true
        });
    }

    // :: Wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }


    // :: PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: Accordian Active Code
    (function () {
        var dd = $('dd');
        dd.filter(':nth-child(n+3)').hide();
        $('dl').on('click', 'dt', function () {
            $(this).next().slideDown(500).siblings('dd').slideUp(500);
        })
    })();

})(jQuery);


