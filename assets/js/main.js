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

  
  var isOpen = false;
  $(".searchbox-icon").click(function () {
    if (isOpen == false) {
      $(".searchbox").addClass("searchbox-open");
      $(".searchbox-input").focus();
      isOpen = true;
    } else {
      $(".searchbox").removeClass("searchbox-open");
      $(".searchbox-input").focusout();
      isOpen = false;
    }
  });
  $(".searchbox-icon").mouseup(function () {
    return false;
  });
  $(".searchbox").mouseup(function () {
    return false;
  });
  $(document).mouseup(function () {
    if (isOpen == true) {
      $(".searchbox-icon").css("display", "block");
      $(".searchbox-icon").click();
    }
  });
  function buttonUp() {
    var inputVal = $(".searchbox-input").val();
    inputVal = $.trim(inputVal).length;
    if (inputVal !== 0) {
      $(".searchbox-icon").css("display", "none");
    } else {
      $(".searchbox-input").val("");
      $(".searchbox-icon").css("display", "block");
    }
  }
  $("input").keyup(function () {
    buttonUp();
  });


});
