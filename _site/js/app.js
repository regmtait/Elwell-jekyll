// Avoid console errors in browsers that lack a console.
(function() {
	var method;
	var noop = function() {};
	var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
	var length = methods.length;
	var console = (window.console = window.console || {});
	while (length--) {
		method = methods[length];
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());
$(document).ready(function() {
	menuhide = true;
	//=========== [ LocalScroll ]
	// Scroll to top actions
	$(function() {
		$(".controls").localScroll({ /* targets the links INSIDE controls*/
			duration: 500
		});
	});
	//=========== [ bx slider ]
	$(function() {
		var slider = $('.bxslider').bxSlider({
			auto: false,
			speed: 500,
			infiniteLoop: true,
			controls: false,
			adaptiveHeight: true,
			pager: false,
			mode: 'fade',
			preloadImages: 'visible'
		});
		$('.prev-slide').click(function() {
			slider.goToPrevSlide();
		});
		$('.next-slide').click(function() {
			slider.goToNextSlide();
		});
	});
	menuhide = true;
	$('a.js-nav-toggle').click(function(event) {
/*
		$('nav ul').animate({
			height: "toggle",
			opacity: "toggle"
		}, "slow");
	*/
		$('nav ul').toggleClass('js-hide');
		event.preventDefault();
		if (menuhide === true) {
			$('a.js-nav-toggle').text('- Menu');
			menuhide = false;
		} else {
			$('a.js-nav-toggle').text('+ Menu');
			menuhide = true;
		}
	});
	//=========== [ button mayhem, needs modernizr ]	
/*
	function doneResizing() {
		if (Modernizr.mq('screen and (min-width:491px)')) {
			if (menuhide === true) {
				$('nav ul').animate({
					height: "toggle",
					opacity: "toggle"
				}, "slow");
				menuhide = false;
			} else {}
			// action for screen widths including and above 768 pixels 
		} else if (Modernizr.mq('screen and (max-width:490px)')) {
			// action for screen widths below 768 pixels 
		}
	}
	var id;
	$(window).resize(function() {
		clearTimeout(id);
		id = setTimeout(doneResizing, 0);
	});
	doneResizing();
	*/
	//=========== [ Page Fader ]
	/*
	$("nav ul li a, a.js-transition").click(function(event) {
		linkLocation = this.href;
		$('.js-fade').animate({
			opacity: 0
		}, 300, function() {
			window.location = linkLocation;
		});
		event.preventDefault();
	});
	*/
});

/*
$(window).bind('pageshow', function() {
	$('.js-fade').css({
		opacity: 1
	});
});*/