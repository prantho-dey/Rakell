(function ($) {

    'use strict';

	// Mobile Menu
	$(".mobile-menu-icon").click(function(){
        $(".mobile-menu").toggleClass("menu-show","10");
        $(".mobile-menu-icon").toggleClass("slider-show");
		$('a').click(function(){
			$(".mobile-menu").removeClass("menu-show");
		});

    });
	$('.plate').on('click', function(){
		$(this).toggleClass('active');
		$('a').click(function(){
			$('.plate').removeClass('active');
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
		$(this).toggleClass("active").next().slideToggle().parent().siblings().children('.accordion-head').removeClass('.active').next().slideUp();
		
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
