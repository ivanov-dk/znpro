$(function() {
	//Preloader
	var $preloader = $('#page-preloader'),
		$spinner   = $preloader.find('.spinner');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');

	// //Menu Open Hamburger
	// $('.hamburger, .menu-opened a').click(function () {
 //        $('.menu-collapse').toggleClass('d-none').css('order', '1');
 //        $('.menu__list').toggleClass('menu-opened');
 //    });

    //Arctic Modal
    $('.call-btn').click(function (e) {
        e.preventDefault();
        $('#callModal').arcticmodal();
    });

    //Slider Main News
    $('.main-news').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		variableWidth: true,
		adaptiveHeight: false,
		autoplay: true,
		autoplaySpeed: 2000,
		nextArrow: '<i class="instr-right fa fa-angle-right" aria-hidden="true"></i>',
		prevArrow: '<i class="instr-left fa fa-angle-left" aria-hidden="true"></i>',
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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

    //Slider Photo
    $('.gallery').slick({
		dots: true,
		dotsClass: "dots-galery",
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2000,
		nextArrow: '<i class="arr-light fa fa-angle-right" aria-hidden="true"></i>',
		prevArrow: '<i class="arr-light fa fa-angle-left" aria-hidden="true"></i>',
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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

//     //Slider About
    $('.company__slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		nextArrow: '<i class="arr-red-right fa fa-angle-right" aria-hidden="true"></i>',
		prevArrow: '<i class="arr-red-left fa fa-angle-left" aria-hidden="true"></i>',
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
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

  $(".company__slider").on('afterChange', function(event, slick, currentSlide){
     $("#num").text(currentSlide + 1);
  });

  //Phone Mask
  	$(".phone-num").mask("+7 (999) 999-9999");


  //Sticky Navigation
  $("#navigator").sticky({topSpacing:0});

})