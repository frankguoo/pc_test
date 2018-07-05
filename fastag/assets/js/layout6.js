

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


	
   $('#iwantgetfastag, #iwantgetfastagm').click(function() {       
     $('html,body').animate({scrollTop:$('#iwantgetfastag＿block').offset().top}, "show");
   });   

   $('#selectedbrand, #selectedbrandm, .fastget').click(function() {       
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
	

    $('.fixed_under .close_under .btn').click(function(evn){
    	$('.under_wrap').addClass('hide');
    });


});

var $win = $(window),
	w = $win.width(),
	h = $win.height();
$(window).scroll(function(){
				// 手機置頂選單
				if ( $(window).scrollTop() <= 30 ) {
					$('.nav_mobile').removeClass('fixed');
					$('.main_content').removeClass('fixPadding');
				}else {
					$('.nav_mobile').addClass('fixed');
					$('.main_content').addClass('fixPadding');
				}
});


