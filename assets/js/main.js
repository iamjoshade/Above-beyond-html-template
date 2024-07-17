$(document).ready(function(){
    $('.blog-post-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: '50px',

          // the magic
  responsive: [{

    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      infinite: true
    }

  }, {

    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      dots: false
    }

  }, {

    breakpoint: 300,
    settings: "unslick" // destroys slick

  }]


    });
  });