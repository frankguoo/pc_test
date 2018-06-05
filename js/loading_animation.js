jQuery(function($){

	var tl = new TimelineMax();

	// tl.set(".animation_area .animation_title", {x: "100%"})
	tl.to(".animation_area .animation_title", 0.3, {x: "-50%", left: "50%", delay: 1})
	tl.to(".animation_area .animation_title", 0.5, {alpha: 0, delay: 0.8})
	tl.to(".animation_area .separator-top", 0.3, {y: "-100%", delay: 0.5})
	tl.to(".animation_area .separator-bottom", 0.3, {y: "100%", delay: -0.3,
		onComplete: function(){
			$("html").css({
				"overflow": "visible"
			})
			$(".animation_area .separator-top, .animation_area .separator-bottom, .animation_area .animation_title").css({
				"display": "none"
			})
		}
	})



});
