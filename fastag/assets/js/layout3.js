
var hashGo = location.hash;
// 所有資訊載入後執行
$('body').delay(200).queue(function (next) {
    if (hashGo == ''){

    } else {
        $('html,body').animate({scrollTop:$(hashGo).offset().top},10);            
    }
});

$( function(){

	// Add slideDown animation to Bootstrap dropdown when expanding.
	$('.dropdown').on('show.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
	});

	// Add slideUp animation to Bootstrap dropdown when collapsing.
	$('.dropdown').on('hide.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
	});

	// 首頁輪播
	$('.slider_wrap .owl-carousel, .mobile_slider .owl-carousel').owlCarousel({
	    loop: true,
	    margin: 10,
	    autoplay: true,
	    autoplayTimeout: 5000,
	    nav: true,
	    navText : ["<",">"],
	    items: 1
	});

	// 品牌輪播
	$('.store_discount .owl-carousel').owlCarousel({
	    loop: false,
	    margin: 10,
	    autoplay: true,
	    autoplayTimeout: 5000,
	    nav: true,
	    navText : ["<",">"],
	    items: 1
	});


	// 影片輪播
	$('.new_event .owl-carousel').owlCarousel({
	    loop: true,
	    merge: true,
	    navText : ["<",">"],
	    items:1,
		margin:10,
		stagePadding:0,
		autoHeight:true,
		slideBy:2,
        lazyLoad:true,
 
	    responsive:{
	        0:{
	        },
	        768:{
	    items:2,    	        
	        }
	    }
	});


// 首頁滑動到指定區塊desktop
   $('.gotop').click(function() {       
     $('html,body').animate({scrollTop:$('.main_content').offset().top}, "show");
   });   

	
   $('#iwantgetfastag, #iwantgetfastagm').click(function() {       
     $('html,body').animate({scrollTop:$('#iwantgetfastag＿block').offset().top}, "show");
   });   

   $('#selectedbrand, #selectedbrandm').click(function() {       
     $('html,body').animate({scrollTop:$('#selectedbrand＿block').offset().top}, "show");
   });
   $('#feature, #featurem').click(function() {       
     $('html,body').animate({scrollTop:$('#feature＿block').offset().top}, "show");
   });
   $('#getfastag, #getfastagm').click(function() {       
     $('html,body').animate({scrollTop:$('#getfastag＿block').offset().top}, "show");
   });

	$(".nav_mobile ul  .dropdown-menu li a").click(function () {
		$(".nav_mobile ul .dropdown-menu").css("display", "none");
	});

	// 注意事項
	$('a.note').click(function(){
		$('.notice').slideToggle(250);
		$('a.note span.arw').toggleClass('rotate');
	});

    $('.fixed_under .close_under .btn').click(function(evn){
    	$('.under_wrap').addClass('hide');
    });
	
	// 裝置判斷 PC or Mobile
    var isMobile = {
        iMob: function() {
            return navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i);
        }
    };

	// 連結滑動效果，PC,Mobile不同定位
	$.scrollTo = $.fn.scrollTo = function(x, y, options){
	    if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);

	    // 判斷 Mobile or PC 取得y值高度
	    if( isMobile.iMob() ) {
	    	// Mobile
	    	var mobTopmenu = -($('.header_desktop').outerHeight() - 270);
	    } else {
	    	// PC
	    	var mobTopmenu = -($('.header_desktop').outerHeight() - -10);
	    };

	    options = $.extend({}, {
	        gap: {
	            x: 0,
	            y: mobTopmenu
	        },
	        animation: {	// 滑動效果設定
	            easing: 'swing',
	            duration: 800,
	            complete: $.noop,
	            step: $.noop
	        }
	    }, options);

	    return this.each(function(){
	        var elem = $(this);
	        elem.stop().animate({
	            scrollLeft: !isNaN(Number(x)) ? x : $(y).offset().left + options.gap.x,
	            scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
	        }, options.animation);
	    });
	};


    $('.fixed_under .close_under .btn').click(function(evn){
    	$('.under_wrap').addClass('hide');
    });



		// 手機置頂選單
		if ( $(window).scrollTop() <= 30 ) {
			$('.nav_mobile').removeClass('fixed');
			$('.main_content').removeClass('fixPadding');
		}else {
			$('.nav_mobile').addClass('fixed');
			$('.main_content').addClass('fixPadding');
		}

	
	

});



