/******************************************************************************
	Transforms the basic Twitter Bootstrap Carousel into Fullscreen Mode
	@author Fabio Mangolini
     http://www.responsivewebmobile.com
******************************************************************************/
jQuery(document).ready(function() {
	$('#carousel-example-generic').carousel({
    	pause: "false",
    	interval: 6000
	});

	$('#carousel-example-generic').css({'margin': "0", 'width': $(window).outerWidth(), 'height': $(window).outerHeight()});
	$('#carousel-example-generic .item').css({'position': 'absolute', 'width': '100%', 'height': '340px'});
	$('#carousel-example-generic .carousel-inner div.item img').each(function() {
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background': 'url('+imgSrc+') center top no-repeat', '-webkit-background-size': '100% ', '-moz-background-size': '100%', '-o-background-size': '100%', 'background-size': '100%', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover', 'background-size': 'cover'});
		$(this).remove();
	});

	$(window).on('resize', function() {
		$('#carousel-example-generic').css({'width': $(window).outerWidth(), 'height': $(window).outerHeight()});
	});
	
		$('#myCarousel-A[data-type="multi"] .item').each(function(){
		  var next = $(this).next();
		  if (!next.length) {
			next = $(this).siblings(':first');
		  }
		  next.children(':first-child').clone().appendTo($(this));

		  for (var i=0;i<2;i++) {
			next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}

			next.children(':first-child').clone().appendTo($(this));
		  }
		});
	
		$('#myCarousel-B[data-type="multi"] .item').each(function(){
		  var next = $(this).next();
		  if (!next.length) {
			next = $(this).siblings(':first');
		  }
		  next.children(':first-child').clone().appendTo($(this));

		  for (var i=0;i<1;i++) {
			next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}

			next.children(':first-child').clone().appendTo($(this));
		  }
		});
	
	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});
	
	$("#marquee0").marquee({yScroll: "bottom"});
}); 