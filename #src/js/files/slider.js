new Swiper(".intro-slider", {
  centeredSlides: true,
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  watchOverflow: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,

    renderBullet: function (index, className) {
      return '<span class="' + className + ' ">' + (index + 1) + "</span>";
    },
  },
});
