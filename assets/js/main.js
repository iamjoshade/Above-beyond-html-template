$(document).ready(function () {

  $(window).scroll(function() {
    // var scroll = $(window).scrollTop();
    if  ($(this).scrollTop()) {
        $('#back-top').fadeIn(100);
    } else {
        $('#back-top').fadeOut(300);
    }
  });

  $(".toTop").click(function () {
    $("html, body").animate({scrollTop: 0});
  });


  $(".blog-post-carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "50px",
    prevArrow: '<button class="PrevArrow d-lg-block d-none"></button>',
    nextArrow: '<button class="NextArrow d-lg-block d-none"></button>',

    // the magic
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
      {
        breakpoint: 300,
        settings: "unslick", // destroys slick
      },
    ],
  });


  // Search form jquery script

  
 


});
