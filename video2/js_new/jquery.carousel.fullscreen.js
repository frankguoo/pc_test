/******************************************************************************
	Transforms the basic Twitter Bootstrap Carousel into Fullscreen Mode
	@author Fabio Mangolini
     http://www.responsivewebmobile.com
******************************************************************************/
jQuery(document).ready(function() {
			// iframe RWD
	$('iframe').iFrameResize( [{
		inPageLinks	: true,
		log			: false
	}] );

	
	$('#carousel-example-generic').carousel({
    	pause: "false",
    	interval: 6000
	});
	$('#carousel-example-generic').css({'margin': "0", 'width': $(window).outerWidth(), 'height': '270px'});
	$('#carousel-example-generic .item').css({'position': 'absolute', 'width': '100%', 'height': '270px'});
	$('#carousel-example-generic .carousel-inner div.item img').each(function() {
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background': 'url('+imgSrc+') center bottom no-repeat', '-webkit-background-size': '100%', '-moz-background-size': '100%', '-o-background-size': '100%', 'background-size': '100%'});
		$(this).remove();
	});

	$(window).on('resize', function() {
		$('#carousel-example-generic').css({'width': $(window).outerWidth(), 'height': '658px'});
	});
	

	
	
	
	
	
	

	
//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(window).scrollTop() > 44) {
			$(".navbar").addClass("navbar-fixed-top");
		} else {
			$(".navbar").removeClass("navbar-fixed-top");
		}
	});
	
	$("#marquee0").marquee({yScroll: "bottom"});
	
	
		
	$('#myCarousel-A').owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		responsive:{
			0:{
				margin:5,
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});
	$('.owl-prev').addClass("left").addClass("sec_control");
	$('.owl-next').addClass("right").addClass("sec_control");

	
	
	$('#myCarousel-B').owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});	
	$('#myCarousel-B > .owl-nav > .owl-prev').addClass("left").addClass("sec_control");
	$('#myCarousel-B > .owl-nav > .owl-next').addClass("right").addClass("sec_control");

	
	
	$('#myCarousel-C').owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});	
	$('#myCarousel-C > .owl-nav > .owl-prev').addClass("left").addClass("sec_control");
	$('#myCarousel-C > .owl-nav > .owl-next').addClass("right").addClass("sec_control");

	
	
	
	$('#myCarousel-D').owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});	
	$('#myCarousel-D > .owl-nav > .owl-prev').addClass("left").addClass("sec_control");
	$('#myCarousel-D > .owl-nav > .owl-next').addClass("right").addClass("sec_control");
	
	   jQuery('.tabs-nav li a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('#worka' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    	});
	
	
	$('#myCarousel-E').owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});	
	$('#myCarousel-E > .owl-nav > .owl-prev').addClass("left").addClass("sec_control");
	$('#myCarousel-E > .owl-nav > .owl-next').addClass("right").addClass("sec_control");	
	

	
}); 



	$('#myCarousel-F').owlCarousel({
		margin:20,
		loop:true,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});	
	$('#myCarousel-F > .owl-nav > .owl-prev').addClass("left").addClass("sec_control");
	$('#myCarousel-F > .owl-nav > .owl-next').addClass("right").addClass("sec_control");





jQuery(document).ready(function() {
    jQuery('.tabs-nav li a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
        // Show/Hide Tabs
        jQuery('#worka' + currentAttrValue).show().siblings().hide();
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
});






	
	






