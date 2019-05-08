$(function () {	
	var start = $("#run")


function init() {
	$("#lottery > table .lottery-unit").each(function (index) {
		
		var currentNum = $(this);
		var INCREMENT = $(this).data('wow-delay');
		var count = 0;
		count = INCREMENT;
	
		window.setInterval(function (index) {
			count ++;
			$("#lottery > table .lottery-unit").not(currentNum).removeClass("active");
			currentNum.addClass("active");
		}, 1000);
	});
}

start.click(function () {
	init()
});	
				
});
