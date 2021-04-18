(function ($) {

    'use strict';

	// Mobile Menu
	$(".mobile-menu-icon").click(function(){
        $(".mobile-menu").toggleClass("menu-show","10");
        $(".mobile-menu-icon").toggleClass("slider-show");
		$('a').click(function(){
			$(".mobile-menu").removeClass("menu-show");
			$(".mobile-menu-icon").removeClass("slider-show");
		});

    });

	/*-------------------------------------------
	    Sticky Header
	--------------------------------------------- */

	let win = $(window);
	let sticky_id = $(".header-area");
	win.on('scroll', function () {
		let scroll = win.scrollTop();
		if (scroll < 200) {
			sticky_id.removeClass("sticky-header");
		} else {
			sticky_id.addClass("sticky-header");
		}
	});

	// Accordion 
	$(".accordion-head").click(function(){
        $(".accordion-head").removeClass("active");
        $(this).addClass("active");
    });

	
	/*------------------------------------
        scrollUp
	--------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('#scrollUp').fadeIn();
		} else {
			$('#scrollUp').fadeOut();
		}
    });
    
	$('#scrollUp').on('click', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});




})(jQuery);
