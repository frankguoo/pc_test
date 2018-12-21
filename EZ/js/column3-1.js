$(function() {
    //三欄式slider
      $slick_slider = $('.ts-column-slider');
      settings_slider = {}
      slick_on_mobile( $slick_slider, settings_slider);

    // slick on mobile
      function slick_on_mobile(slider, settings){
        $(window).on('load resize', function() {
          if ($(window).width() > 1366) {
            if (slider.hasClass('slick-initialized')) {
              slider.slick('unslick');
            }
            return
          }
          if (!slider.hasClass('slick-initialized')) {
            return slider.slick({
              infinite: false,
              variableWidth: true,
              dots: false,
              arrows: false,
              responsive: [
              {
              breakpoint: 9999,
              settings: "unslick"
              },
            {
              breakpoint: 1336,
              settings: {
              slidesToShow: 1.5,
              centerMode: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerMode: true,
                slidesToShow: 1
              }
            }
          ]
        });
          }
        });
      };
});