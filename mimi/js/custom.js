$( function(){
	
	
	$('#myCarousel-A').owlCarousel({
			loop:true,
			margin:5,
			padding: 10,
			nav:true,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			slideBy: 1,
			responsive:{
				0:{
					stagePadding: 20,
					margin:0,
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:2
				}
			}
	});
	
	
	// 關閉 固定置底APP Banner
	$('.app_close').click(function(){
		$('.app_download img').hide(100);
		$('#footer').addClass('noAPP');
	});

});