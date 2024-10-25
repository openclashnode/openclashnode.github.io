(function ($) {
	("use strict");


	$(window).on('load',function() {
		$("#loading").fadeOut(500);
	});

	// meanmenu
	$("#mobile-menu").meanmenu({
		meanMenuContainer: ".mobile-menu",
		meanScreenWidth: "991",
	});

	$(".side-info-close,.offcanvas-overlay").on("click", function () {
		$(".side-info").removeClass("info-open");
		$(".offcanvas-overlay").removeClass("overlay-open");
	});
	$(".side-toggle").on("click", function () {
		$(".side-info").addClass("info-open");
		$(".offcanvas-overlay").addClass("overlay-open");
	});
	
	// InHover Active 
	$('.dot').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.dot ').removeClass('active');
	});
	

	// Search
	var $searchWrap = $(".search-wrap");
	var $navSearch = $(".nav-search");
	var $searchClose = $("#search-close");

	$(".search-trigger").on("click", function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: "toggle" }, 500);
		$navSearch.add($searchClose).addClass("open");
	});

	$(".search-close").on("click", function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: "toggle" }, 500);
		$navSearch.add($searchClose).removeClass("open");
	});

	function closeSearch() {
		$searchWrap.fadeOut(200);
		$navSearch.add($searchClose).removeClass("open");
	}

	$(document.body).on("click", function (e) {
		closeSearch();
	});

	$(".search-trigger, .main-search-input").on("click", function (e) {
		e.stopPropagation();
	});


	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});

	// mainSlider
	function mainSlider() {
		var BasicSlider = $(".slider-active");
		BasicSlider.on("init", function (e, slick) {
			var $firstAnimatingElements = $(".single-slider:first-child").find(
				"[data-animation]"
			);
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on(
			"beforeChange",
			function (e, slick, currentSlide, nextSlide) {
				var $animatingElements = $(
					'.single-slider[data-slick-index="' + nextSlide + '"]'
				).find("[data-animation]");
				doAnimations($animatingElements);
			}
		);
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: false,
			responsive: [
				{ breakpoint: 767, settings: { dots: false, arrows: false } },
			],
		});

		function doAnimations(elements) {
			var animationEndEvents =
				"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data("delay");
				var $animationType = "animated " + $this.data("animation");
				$this.css({
					"animation-delay": $animationDelay,
					"-webkit-animation-delay": $animationDelay,
				});
				$this
					.addClass($animationType)
					.one(animationEndEvents, function () {
						$this.removeClass($animationType);
					});
			});
		}
	}
	mainSlider();

	// data background
	$("[data-background]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-background") + ")"
		);
	});

	// owlCarousel
	$(".project-slider-active").owlCarousel({
		loop: true,
		margin: 30,
		items: 2,
		navText: [
			'<button class="owl-arrow owl-arrow-prev"><i class="fal fa-arrow-left"></i></button>',
			'<button class="owl-arrow owl-arrow-next"><i class="fal fa-arrow-right"></i></button> ',
		],
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			991: {
				items: 1,
			},
			1200: {
				items: 2,
			},
			1400: {
				items: 2,
			},
		},
	});

	// owlCarousel
	$(".gallery-slider").owlCarousel({
		loop: true,
		margin: 30,
		items: 3,
		navText: [
			'<button class="owl-arrow owl-arrow-prev"><i class="fal fa-arrow-left"></i></button>',
			'<button class="owl-arrow owl-arrow-next"><i class="fal fa-arrow-right"></i></button> ',
		],
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			767: {
				items: 1,
			},
			992: {
				items: 3,
			},
		},
	});

	// testimonial slider
	$(".testimonial__active").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
	});
	// testimonial card slider
	$(".testimonial-box__active").slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	// testimonial border slider
	$(".testimonial-border__active").slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: 30,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	// project details slider
	$(".pd-slider").slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		centerPadding: 30,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	// portfolio slider
	$(".portfolio__active").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				},
			},
		],
	});

	// brand slider
	$(".brand__active").slick({
		dots: false,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});

	// brand area slider
	$(".brand__area-active").slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});

	// history area slider
	$(".history__slider-active").slick({
		dots: false,
		arrows: true,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow:
			'<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
		nextArrow:
			'<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
		responsive: [
			{
				breakpoint: 1750,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});

	/* magnificPopup img view */
	$(".popup-image").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	// circle chart bar 
	 $(".circlechart").circlechart();

	// init Isotope
	$('.grid').imagesLoaded( function() {
		
		var $grid = $(".grid").isotope({
			// options
		});
		// filter items on button click
		$(".filter-button-group").on("click", "button", function () {
			var filterValue = $(this).attr("data-filter");
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$(".project-menu button").on("click", function (event) {
			$(this).siblings(".active").removeClass("active");
			$(this).addClass("active");
			event.preventDefault();
		});
	});
	
	// back to top
	$("#scrollToTop").on("click", function () {
		$("body, html").animate({ scrollTop: 0 }, 500);
		return false;
	});

	// scrollToTop
	$.scrollUp({
		scrollName: "scrollUp", // Element ID
		topDistance: "300", // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: "fade", // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fal fa-arrow-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	// WOW active
	new WOW().init();

	// counterup
	$(".counter").counterUp({
		delay: 1000,
		time: 1000,
	});
})(jQuery);