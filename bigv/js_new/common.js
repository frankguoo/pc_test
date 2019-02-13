/******************************************************************************
	Transforms the basic Twitter Bootstrap Carousel into Fullscreen Mode
	@author Fabio Mangolini
     https://www.responsivewebmobile.com
******************************************************************************/
jQuery(document).ready(function() {
  // iframe RWD
  $('iframe').iFrameResize([{
    inPageLinks: true,
    log: false
  }]);


  $('#carousel-example-generic').carousel({
    pause: "false",
    interval: 6000
  });
  $('#carousel-example-generic').css({
    'margin': "0",
    'width': $(window).outerWidth(),
    'height': '340px'
  });
  $('#carousel-example-generic .item').css({
    'position': 'absolute',
    'width': '100%',
    'height': '340px'
  });
  $('#carousel-example-generic .carousel-inner div.item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({
      'background': 'url(' + imgSrc + ') center top no-repeat',
      '-webkit-background-size': '100% ',
      '-moz-background-size': '100%',
      '-o-background-size': '100%',
      'background-size': '100%',
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover'
    });
    $(this).remove();
  });
  $(window).on('resize', function() {
    $('#carousel-example-generic').css({
      'width': $(window).outerWidth(),
      'height': '658px'
    });
  });

  $('#myCarousel-A[data-type="multi"] .item').each(function() {
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 2; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    }
  });

  $('#myCarousel-B[data-type="multi"] .item').each(function() {
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 1; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    }
  });




  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(window).scrollTop() > 44) {
      $(".navbar").addClass("navbar-fixed-top");
    } else {
      $(".navbar").removeClass("navbar-fixed-top");
    }
  });

  $("#marquee0").marquee({
    yScroll: "bottom"
  });

  /*首頁三格輪播*/
  $('#myCarousel-C, #myCarousel-D, #myCarousel-E, #myCarousel-F, #myCarousel-G').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $('#myCarousel-C > .owl-nav > .owl-prev').addClass("left").addClass("sec_control");
  $('#myCarousel-C > .owl-nav > .owl-next').addClass("right").addClass("sec_control");
  $('#myCarousel-D > .owl-nav > .owl-prev').addClass("left").addClass("sec_control");
  $('#myCarousel-D > .owl-nav > .owl-next').addClass("right").addClass("sec_control");
  $('#myCarousel-E > .owl-nav > .owl-prev').addClass("left").addClass("sec_control");
  $('#myCarousel-E > .owl-nav > .owl-next').addClass("right").addClass("sec_control");
  $('#myCarousel-F > .owl-nav > .owl-prev').addClass("left").addClass("sec_control");
  $('#myCarousel-F > .owl-nav > .owl-next').addClass("right").addClass("sec_control");
  $('#myCarousel-G > .owl-nav > .owl-prev').addClass("left").addClass("sec_control");
  $('#myCarousel-G > .owl-nav > .owl-next').addClass("right").addClass("sec_control");


  /*網紅來開箱*/
  $('#myCarousel-H').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $('#myCarousel-H > .owl-nav > .owl-prev').addClass("left").addClass("sec_control");
  $('#myCarousel-H > .owl-nav > .owl-next').addClass("right").addClass("sec_control");


  /*PC購物狂*/
  $('#myCarousel-I').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $('#myCarousel-I > .owl-nav > .owl-prev').addClass("left").addClass("sec_control");
  $('#myCarousel-I > .owl-nav > .owl-next').addClass("right").addClass("sec_control");


  
  /*創意影音最新影音*/
  $('#tape_new').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $('#tape_new > .owl-nav > .owl-prev').addClass("left").addClass("sec_control");
  $('#tape_new > .owl-nav > .owl-next').addClass("right").addClass("sec_control");

jQuery('.tabs-nav li a').on('click', function(e) {
    var currentAttrValue = jQuery(this).attr('href');
    // Show/Hide Tabs
    jQuery('#worka' + currentAttrValue).show().siblings().hide();
    // Change/remove current tab to active
    jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
    e.preventDefault();
  });
});


jQuery(document).ready(function() {
  jQuery('.tabs-nav li a').on('click', function(e) {
    var currentAttrValue = jQuery(this).attr('href');
    // Show/Hide Tabs
    jQuery('#worka' + currentAttrValue).show().siblings().hide();
    // Change/remove current tab to active
    jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
    e.preventDefault();
  });
});