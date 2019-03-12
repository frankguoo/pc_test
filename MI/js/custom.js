
// 滑動
$('.gotop').click(function() {
    $('html,body').animate({
        scrollTop: '0px'
    }, 500);
});





$(window).scroll(function() {
	if ($(window).scrollTop() <= 50) {
		$(".gotop").css({'opacity': '0','display':'none'});
	} else {
		$(".gotop").css({'opacity': '1','display':'block' });
	}
});

// 裝置判斷 PC or Mobile
var isMobile = {
	iMob: function() {
		return navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i);
	}
};	
if (isMobile.iMob()) {
	$('#menu').addClass('scroll_mob');
} else {
	$('#menu').addClass('scroll_pc');
};
	
// 連結滑動效果
$.scrollTo = $.fn.scrollTo = function(x, y, options) {
	if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);
	// 判斷 Mobile or PC 取得y值高度
	if (isMobile.iMob() || $(window).outerWidth() < 932) {
		if ($(window).scrollTop() <= 40) {
			var mobTopmenu = -($('#menu').outerHeight() + 0);
		} else {
			var mobTopmenu = -($('#menu').outerHeight() - 2);
		}
	} else {
		var mobTopmenu = 0;
	};
	options = $.extend({}, {
		gap: {
			x: 0,
			y: mobTopmenu
		},
		animation: { // 滑動效果設定
			easing: 'swing',
			duration: 600,
			complete: $.noop,
			step: $.noop
		}
	}, options);
	return this.each(function() {
		var elem = $(this);
		elem.stop().animate({
			scrollLeft: !isNaN(Number(x)) ? x : $(y).offset().left + options.gap.x,
			scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
		}, options.animation);
	});
};
// Mobile 置頂選單控制
$(window).scroll(function() {
	var window_top = $(window).scrollTop();
	var div_top = $('#mob_topmenu').offset().top;
	if (window_top > div_top) {
		$('#menu').addClass('mFixed');
	} else {
		$('#menu').removeClass('mFixed');
	}
});
	
$(".nav .dropdown a").click(function(evn) {
	evn.preventDefault();
	$('html,body').scrollTo(this.hash, this.hash);
});
	
var aChildren = $("#menu a"); // find the a children of the list items
var aArray = []; // create the empty aArray
for (var i = 0; i < aChildren.length; i++) {
	var aChild = aChildren[i];
	var ahref = $(aChild).attr('href');
	aArray.push(ahref);
} // this for loop fills the aArray with attribute href values

$(window).scroll(function() {
	var windowHeight = $(window).height(); // get the height of the window
	var docHeight = $(document).height();
	// 判斷 Mobile or PC 設定高度
	if (isMobile.iMob() || $(window).outerWidth() < 932) {
		var windowPos = ($(window).scrollTop() + $('#menu').outerHeight() + 3);
	} else {
		var windowPos = $(window).scrollTop(); // PC版預設
	};
	for (var i = 0; i < aArray.length; i++) {
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
//end 新版fixed bar效果	
			// iframe RWD
			$('iframe').iFrameResize([{
				inPageLinks: true,
				log: false
			}]);