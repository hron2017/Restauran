//Adaptive functions
//====================  Mobile Menu ========================//
$('.header-menu__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.header-menu__mobile').toggleClass('active');
});


$(window).resize(function (event) {
	adaptive_function();
});
function adaptive_header(w, h) {
	const headerMenu = $('.header-menu');
	const headerNav = $('.header-nav');
	const headerMenuMobile = $('.header-menu__mobile');
	const resersLink = $('.reserv__link');
	const headerShop = $('.header-shop__reserv');

	if (w < 767.98) {
		if (!headerNav.hasClass('done')) {
			headerNav.addClass('done').appendTo(headerMenuMobile);
		}
	} else {
		if (headerNav.hasClass('done')) {
			headerNav.removeClass('done').appendTo(headerMenu);
		}
	}

	if (w < 400.98) {
		if (!resersLink.hasClass('done')) {

			resersLink.addClass('done')
			$('.nav__item-link').append(resersLink);
		}
	} else {
		if (resersLink.hasClass('done')) {
			resersLink.removeClass('done').appendTo(headerShop);
		}
	}
}
function adaptive_function() {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	adaptive_header(w, h);
}
adaptive_function();