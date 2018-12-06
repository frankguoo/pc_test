/**
 * jquery.snow - jQuery Snow Effect Plugin
 *
 * Available under MIT licence
 *
 * @version 1 (21. Jan 2012)
 * @author Ivan Lazarevic
 * @requires jQuery
 * @see http://workshop.rs
 *
 * @params minSize - min size of snowflake, 10 by default
 * @params maxSize - max size of snowflake, 20 by default
 * @params newOn - frequency in ms of appearing of new snowflake, 500 by default
 * @params flakeColor - color of snowflake, #FFFFFF by default
 * @example $.fn.snow({ maxSize: 200, newOn: 1000 });
 */
(function($){
	
	$.fn.snow = function(options){
	
			var $spring 		= $('<div id="spring" />').css({'position': 'absolute', 'z-index': '999999', 'top': '-50px', 'transition':'0s', '-webkit-transition':'0s'}).html('<img src="flower0.png">');
			var $summer 		= $('<div id="summer" />').css({'position': 'absolute', 'z-index': '999999', 'top': '-50px', 'transition':'0s', '-webkit-transition':'0s'}).html('<img src="watermelon.png">');
			var $fall		= $('<div id="fall" />').css({'position': 'absolute', 'z-index': '999999', 'top': '-50px', 'transition':'0s', '-webkit-transition':'0s'}).html('<img src="maple.png">');
			var $winter		= $('<div id="winter" />').css({'position': 'absolute', 'z-index': '999999', 'top': '-50px', 'transition':'0s', '-webkit-transition':'0s'}).html('&#10052;');
	
				documentHeight 	= $(document).height(),
				documentWidth	= $(document).width(),
				defaults		= {
									minSize		: 2,
									maxSize		: 10,
									newOn		: 500,
									flakeColor	: "#ffffff"
								},
				options			= $.extend({}, defaults, options);
				
			
			var interval		= setInterval( function(){
				var startPositionLeft 	= Math.random() * documentWidth - 0,
				 	startOpacity		= 0.5 + Math.random(),
					sizeFlake			= options.minSize + Math.random() * options.maxSize,
					endPositionTop		= documentHeight - 40,
					endPositionLeft		= startPositionLeft - 100 + Math.random() * 200,
					durationFall		= documentHeight * 10 + Math.random() * 5000;
				$spring
					.clone()
					.appendTo('.spring')
					.css(
						{
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor
						}
					)
					.animate(
						{
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 1
						},
						durationFall,
						'linear',
						function() {
							$(this).remove()
						}
					);
				$summer
					.clone()
					.appendTo('.summer')
					.css(
						{
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor
						}
					)
					.animate(
						{
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 1
						},
						durationFall,
						'linear',
						function() {
							$(this).remove()
						}
					);
				  $fall
					.clone()
					.appendTo('.fall')
					.css(
						{
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor
						}
					)
					.animate(
						{
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 1
						},
						durationFall,
						'linear',
						function() {
							$(this).remove()
						}
					);
				  $winter
					.clone()
					.appendTo('.winter')
					.css(
						{
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor
						}
					)
					.animate(
						{
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 0.2
						},
						durationFall,
						'linear',
						function() {
							$(this).remove()
						}
					);
			}, options.newOn);
	};
})(jQuery);
