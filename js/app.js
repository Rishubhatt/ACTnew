(function ($) {
    'use strict';

    var $window = $(window);

    // :: Sticky Active Code
    $window.on("scroll", function () {
        if
            ($(document).scrollTop() > 86) {
            $("#banner1").addClass("shrink1");
        }
        else {
            $("#banner1").removeClass("shrink1");
        }
    });





    $(window).on('scroll', function () {

        var scrollTop = $(this).scrollTop();
        $('#moveUp3').css({
            transform: 'translate(-50.5%,' + (120 + (-0.09 * scrollTop)) + 'px)'

        });
        $('#moveUp4').css({
            transform: 'translateY(' + (340 + (-0.09 * scrollTop)) + 'px)',
        });
        $('#moveUp5').css({
            transform: 'translateY(' + (340 + (-0.09 * scrollTop)) + 'px)',
        });
        $('#moveUp6').css({
            transform: 'translateY(' + (340 + (-0.09 * scrollTop)) + 'px)',
        });
        $('#main_img').css({
            transform: 'translateY(' + (10 + (-0.09 * scrollTop)) + 'px)',
        });
        $('#main_imgP').css({
            transform: 'translateY(' + (0 + (-0.09 * scrollTop)) + 'px)',
        });

        $('#main_imgI').css({
            transform: 'translateY(' + (200 + (-0.09 * scrollTop)) + 'px)',
        });
        $('#main_imgC').css({
            transform: 'translateY(' + (0 + (-0.09 * scrollTop)) + 'px)',
        });




    });
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
                767: {
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
    //(function () {
    //  var dd = $('dd');
    //dd.filter(':nth-child(n+3)').hide();
    //$('dl').on('click', 'dt', function () {
    //  $(this).next().slideDown(500).siblings('dd').slideUp(500);

    //})
    // })();

    })(jQuery);



    $(document).ready(function () {
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function () {
            $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });

        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function () {
            $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function () {
            $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
    });
