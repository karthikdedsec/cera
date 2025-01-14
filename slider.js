$(".workshops__slider").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  draggable: true,
  autoplaySpeed: 2000,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// Custom Next Button
// $(".widget_next").click(function () {
//   $(".instagram_widgets").slick("slickNext");
// });

// // Custom Previous Button
// $(".widget_prev").click(function () {
//   $(".instagram_widgets").slick("slickPrev");
// });
