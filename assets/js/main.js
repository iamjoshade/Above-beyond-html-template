$(document).ready(function(){
    $('.blog-post-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

          // the magic
  responsive: [{

    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      infinite: true
    }

  }, {

    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      dots: false
    }

  }, {

    breakpoint: 300,
    settings: "unslick" // destroys slick

  }]


    });
  });