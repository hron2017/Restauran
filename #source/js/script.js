//====================  SCROLL ========================//
$(window).scroll(function (event) {
	var scr = $(this).scrollTop();
	sectors(scr);
});
function sectors(scr) {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	if (scr > 130) {
		$('.header-middle').addClass('scroll');
	} else {
		$('.header-middle').removeClass('scroll');
	}
}
//====================  <!-- SCROLL --> ========================//
//====================  UP ========================//
$(window).scroll(function () {
	var w = $(window).width();
	if ($(window).scrollTop() > 50) {
		$('#up').fadeIn(300);
	} else {
		$('#up').fadeOut(300);
	}
});
$('#up').click(function (event) {
	$('body,html').animate({ scrollTop: 0 }, 300);
});
//==================== <!-- UP --> ========================//
//====================  ImageBg ========================//
function ibg() {
	function isIE() {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();
//====================  <!-- ImageBg -->  ========================//

//====================   GoTO -->  ========================//
$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');

	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.header-menu__mobile').hasClass('active')) {
		$('.header-menu__mobile,.header-menu__icon').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});
//====================  <!-- GoTO -->  ========================//



//====================   Slider   ========================//
$('.main-slider').slick({
	autoplay: true,
	dots: true,
	arrows: false
});

$('.feature-slider').slick({
	autoplay: true,
	arrows: true,
	slidesToShow: 6,
	slidesToScroll: 1,
	nextArrow: '<button type="button" class="slick-btn-next  slick-next slick-btn"><i class="fas fa-arrow-right"></i></button>',
	prevArrow: '<button type="button" class="slick-btn-prev slick-prev slick-btn"><i class="fas fa-arrow-left"></i></button>',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

$('.stuff-slider').slick({

	infinite: false,
	arrows: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	nextArrow: '<button type="button" class="slick-btn-next  slick-next slick-btn"><i class="fas fa-arrow-right"></i></button>',
	prevArrow: '<button type="button" class="slick-btn-prev slick-prev slick-btn"><i class="fas fa-arrow-left"></i></button>',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 770,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 5000
			}
		}
	]
});

$('.feedback-slider').slick({
	infinite: false,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	nextArrow: '<button type="button" class="slick-btn-next  slick-next slick-btn"><i class="fas fa-arrow-right"></i></button>',
	prevArrow: '<button type="button" class="slick-btn-prev slick-prev slick-btn"><i class="fas fa-arrow-left"></i></button>'
});
$('.blog-slider').slick({
	infinite: false,
	arrows: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	nextArrow: '<button type="button" class="blog-slick__next blog-slick__btn"><i class="fas fa-chevron-right"></i></button>',
	prevArrow: '<button type="button" class="blog-slick__prev blog-slick__btn"><i class="fas fa-chevron-left"></i></button>',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 807,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
//====================  <!-- Slider -->  ========================//

//====================  Video  ========================//
$('.video__play').click(function () {
	$('#video').get(0).play();
	$(this).fadeOut();
	$('.video__overlay').fadeOut();
	$('.event').css('top', '102%');
	$('.section-fe').css('padding-top', '230px');
});
//====================  <!-- Video -->  ========================//
//====================  testWebP ========================//
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
//====================  testWebP ========================//