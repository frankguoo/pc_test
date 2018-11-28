$(function(){
	
	
	//  電腦版側邊選單開關
	$('#RMenuOutF').on('click', function(){
		$('.RmenuBoxF ul').toggleClass('menu--is-closed');
		$(".hamburger").toggleClass("is-active");
	});
	
		
	// 滑動
	$('.RmenuTopF').click(function(){
		$('html,body').animate({scrollTop: '0px'}, 3600);
	});
	
	
	// 連結滑動效果
	$.scrollTo = $.fn.scrollTo = function(x, y, options){
	    if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);

	    // 判斷 Mobile or PC 取得y值高度
	    if( isMobile.iMob() || $(window).outerWidth() < 932 ) {
			if( $(window).scrollTop() <= 40  ){
				var mobTopmenu = -($('#menu').outerHeight() +40 );
			}else{
	    		var mobTopmenu = -($('#menu').outerHeight() -2 );
			}
	    } else {
	    	var mobTopmenu = 0;
	    };

	    options = $.extend({}, {
	        gap: {
	            x: 0,
	            y: mobTopmenu 
	        },
	        animation: {	// 滑動效果設定
	            easing: 'swing',
	            duration: 2000,
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

	
	// Mobile 置頂選單控制
    $(window).scroll(function(){
        var window_top = $(window).scrollTop();
        var div_top = $('#mob_topmenuF').offset().top;
            if (window_top > div_top) {
                $('#menuF').addClass('mFixedF');
            } else {
                $('#menuF').removeClass('mFixedF');
            }
    });

    $("nav a, #menuF a").click(function(evn){
        evn.preventDefault();
		$('html,body').scrollTo(this.hash, this.hash);
    });

    var aChildren = $("nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){

        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

	    // 判斷 Mobile or PC 設定高度
	    if( isMobile.iMob() || $(window).outerWidth() < 932  ) {
 	       var windowPos = ($(window).scrollTop() + $('#menuF').outerHeight() + 3);
	    } else {
 	       var windowPos = $(window).scrollTop(); // PC版預設
	    };

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
			var divPos = $(theID).offset().top;
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("nav-active");
            } else {
                $("a[href='" + theID + "']").removeClass("nav-active");
            }
        }

        if (windowPos + windowHeight == docHeight) {
            if (!$("nav li:last-child a").hasClass("nav-active")) {
                var navActiveCurrent = $(".nav-active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                $("nav li:last-child a").addClass("nav-active");
            }
        }
    });

	
	$(window).scroll(function(){

        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

	    // 判斷 Mobile or PC 設定高度
	    if( isMobile.iMob() ) {
 	       var windowPos = ($(window).scrollTop() + $('#menuF').outerHeight());
	    } else {
 	       var windowPos = $(window).scrollTop(); // PC版預設
	    };

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("nav-active");
            } else {
                $("a[href='" + theID + "']").removeClass("nav-active");
            }
        }

        if (windowPos + windowHeight == docHeight) {
            if (!$("nav li:last-child a").hasClass("nav-active")) {
                var navActiveCurrent = $(".nav-active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                $("nav li:last-child a").addClass("nav-active");
            }
        }
    });
	
	

	
	//  判斷瀏覽器
	function detectBrowser(){
		var isIE = navigator.userAgent.search("MSIE") > -1;
		var isIE7 = navigator.userAgent.search("MSIE 7") > -1;
		var isFirefox = navigator.userAgent.search("Firefox") > -1;
		var isOpera = navigator.userAgent.search("Opera") > -1;
		var isSafari = navigator.userAgent.search("Safari") > -1;//Google瀏覽器核心
		var isChrome = navigator.userAgent.search("Chrome") > -1;//Google瀏覽器核心

		if (isIE7) {
			browser = 'IE7';
		}
		if (isIE) {
			browser = 'IE';
			// 平滑滾動
			$("body").smoothWheel();
		}
		if (isFirefox) {
			browser = 'Firefox';
		}
		if (isOpera) {
			browser = 'Opera';
		}
		if (isSafari) {
			browser = 'Safari';

		}

		if (isChrome) {
			browser = 'Chrome';
			// 平滑滾動
			$("body").smoothWheel();

		}

		return browser;
	}
	var browser = detectBrowser();

	
			
 });