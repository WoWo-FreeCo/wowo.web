$(document).ready(function() {

  //top_nav //////////////刪除or隱藏
  // window.onscroll = function() {scrollFunction()};
    
  // function scrollFunction() {
  //   if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {
  //     document.getElementById("navbar").classList.add('fixed');
  //     document.getElementById("top_member").classList.add('fixed');
  //     document.getElementById("logo").classList.add('fixed');
  //   } else {
  //     document.getElementById("navbar").classList.remove('fixed');
  //     document.getElementById("top_member").classList.remove('fixed');
  //     document.getElementById("logo").classList.remove('fixed');
  //   }
  // }


  // e-commerce touchspin
  // $('input[name=\'product-quantity\']').TouchSpin();


  // WOW
  new WOW().init();


  // faq
  const items = document.querySelectorAll(".accordion button");

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
    
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }
  
  items.forEach(item => item.addEventListener('click', toggleAccordion));

  
  //tooltip
  $('[data-toggle="Tooltip"]').tooltip()

  $('[data-toggle="popover"]').popover()

  //Hero Slider
  // $('.hero-slider').slick({
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   infinite: true,
  //   arrows: false,
  //   // prevArrow: '<button type=\'button\' class=\'heroSliderArrow prevArrow fa-solid fa-chevron-left\'></button>',
  //   // nextArrow: '<button type=\'button\' class=\'heroSliderArrow nextArrow fa-solid fa-chevron-right\'></button>',
  //   dots: false,
  //   pauseOnFocus: false,
  //   pauseOnHover: false,
  // });


  //index ad Slider
  $('.index_ad').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    dots: true,
    fade: true,
    responsive: [
      {
          breakpoint: 767,
          settings: {
            dots: false,
          }
      },
    ]
  });


  //index product Slider
  // $('.index_pslide').slick({
  //   arrows: false,
  //   rows: 3,
  //   slidesPerRow: 3,
  //   // slidesToShow: 1,
  //   responsive: [
  //     {
  //         breakpoint: 767,
  //         settings: {
  //           dots: false,
  //           rows: 1,
  //           slidesPerRow: 1,
  //         }
  //     },
  //   ]
  // });


  // ! 移動至有使用的vue onMounted
  //inner product Slider //////////////改
  // $('.product_slide').slick({
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: true,
  //   prevArrow: '<button type=\'button\' class=\'productSliderArrow prevArrow fa-solid fa-chevron-left\'></button>',
  //   nextArrow: '<button type=\'button\' class=\'productSliderArrow nextArrow fa-solid fa-chevron-right\'></button>',
  //   dots: true,
  //   rows: 1,
  //   slidesPerRow: 3,
  //   responsive: [
  //     {
  //         breakpoint: 1057,
  //         settings: {
  //           rows: 1,
  //           slidesPerRow: 2,
  //         }
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         rows: 1,
  //         slidesPerRow: 1,
  //       }
  //     },
  //   ]
  // });

  // ! 移動至有使用的vue onMounted
  //inner product Slider //////////////改
  // $('.product_slide2').slick({
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: true,
  //   prevArrow: '<button type=\'button\' class=\'productSliderArrow prevArrow fa-solid fa-chevron-left\'></button>',
  //   nextArrow: '<button type=\'button\' class=\'productSliderArrow nextArrow fa-solid fa-chevron-right\'></button>',
  //   dots: true,
  //   rows: 1,
  //   slidesPerRow: 3,
  //   responsive: [
  //     {
  //         breakpoint: 1270,
  //         settings: {
  //           rows: 1,
  //           slidesPerRow: 2,
  //         }
  //     },
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         rows: 1,
  //         slidesPerRow: 1,
  //       }
  //     },
  //   ]
  // });

  //inner product Slider //////////////增
  $('.wobao_slide').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    // prevArrow: '<button type=\'button\' class=\'productSliderArrow prevArrow fa-solid fa-chevron-left\'></button>',
    // nextArrow: '<button type=\'button\' class=\'productSliderArrow nextArrow fa-solid fa-chevron-right\'></button>',
    dots: true,
    rows: 1,
    slidesPerRow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          rows: 1,
          slidesPerRow: 1,
        }
      },
    ]
  });


  //mainproduct Slider
  // var $status = $('.pagingInfo');
  // var $slickElement = $('.main_product');

  // $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //   var i = (currentSlide ? currentSlide : 0) + 1;
  //   $status.text(i + '/' + slick.slideCount);
  // });

  // $slickElement.slick({
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: true,
  //   prevArrow: '<button type=\'button\' class=\'productSliderArrow prevArrow fa-solid fa-chevron-left\'></button>',
  //   nextArrow: '<button type=\'button\' class=\'productSliderArrow nextArrow fa-solid fa-chevron-right\'></button>',
  //   dots: false,
  // });
  

  // Gets the video src from the data-src on each button
  var $videoSrc;  
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
  });
  console.log($videoSrc);
  
  // when the modal is opened autoplay it  
  $('#videoModal').on('shown.bs.modal', function (e) {
      
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    $('.btn-close').delay(5000).show(0);
  })
  
  // stop playing the youtube video when I close the modal
  $('#videoModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
  })
    
  
});

