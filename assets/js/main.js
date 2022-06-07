(function ($) {
  "use strict";

    /*==========  Main Slider =========*/ 
    $(".slide-active").owlCarousel({
            items:1,
            loop:true,
            dots:true,
            nav:false,
            autoplay:true,
        });
    
    /*==========  Main parallax =========*/ 
    $(window).on('scroll', function (){
      $(".slide-parallax").css("background-position","50% " + ($(this).scrollTop() / 1.2) + "px");
    });
    
    /*----------------------------
    START - jQuery Tubular activation
    ------------------------------ */
    jQuery(".slide-area.slide-video-bg").mb_YTPlayer();
    
    /*==========  Main Slider Animation =========*/ 
    $(".slide-area").on("translate.owl.carousel", function(){
      $(".single-slide h1").removeClass("animated fadeInDown").css("opacity", "0");
      $(".single-slide h3, .single-slide p").removeClass("animated fadeIn").css("opacity", "0");
      $(".single-slide .boxed-btn, .single-slide .borderd-btn").removeClass("animated fadeInUp").css("opacity", "0");
    });

    $(".slide-area").on("translated.owl.carousel", function(){
      $(".single-slide h1").addClass("animated fadeInDown").css("opacity", "1");
      $(".single-slide h3, .single-slide p").addClass("animated fadeIn").css("opacity", "1");
      $(".single-slide .boxed-btn, .single-slide .borderd-btn").addClass("animated fadeInUp").css("opacity", "1");
    });

    /*==========  Testmoanial Slider =========*/
    $(".testmonial-active").owlCarousel({
        loop:true,
        dots:true,
        nav:true,
        navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        margin:30,
        responsive : {
          0 : {
              items: 1
          },
          768 : {
              items: 2
          },
          960 : {
              items: 2
          },
          1200 : {
              items: 2
          },
          1920 : {
              items: 2
          }
      }
    });

    /*==========  Off Canvas Manu Slider =========*/
    $(".menu-trigger").on("click", function(){
        $(".off-canvas-menu").addClass("show-off-canvas-menu");
        $(".off-canvas-menu-shade").addClass("active");
    });
    $(".menu-close, .off-canvas-menu-shade").on("click", function(){
        $(".off-canvas-menu").removeClass("show-off-canvas-menu");
        $(".off-canvas-menu-shade").removeClass("active");
    });

    /*==========  Portfolio and mani manu activation =========*/
    $(".portfolio-menu ul li").on("click", function(){
      $(".portfolio-menu ul li").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr('data-filter');
      $(".portfolio").isotope({
        filter: selector
      })

    });

    /*==========  Magnific Popup on Portfolio =========*/
    $('.single-portfolio').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
    /*==========  Smooth Scroll =========*/
    $("ul#navigation, ul#offcanvas-menu").onePageNav(); 
    $('ul#navigation a, ul#offcanvas-menu a').bind('click', function(event) {
        var $anchor = $(this);
        $('html').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 20
          }, 500);
        event.preventDefault();
    });

    /* ========== Scroll to Top =======*/
    $(window).on('scroll', function (){
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });
    $(".scroll-to-top").on("click", function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
        
    /* ============ Manu fixed on top ==========*/
    $(window).on('scroll', function (){
      if ($(window).scrollTop() > 200){
        $('.header-area').addClass('header-fixed');
      } else {
        $('.header-area').removeClass('header-fixed');
      }
    });

    /* ======== Portfolio Activeation =========*/
    jQuery(".portfolio").isotope();

    /* ======== Preloder activation ===========*/
    $('.site-preloder').fadeOut();

    /* ======= WoW Animation =================*/
    new WOW().init();

}(jQuery));