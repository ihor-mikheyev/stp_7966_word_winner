const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 3, // Кількість слайдів на десктопі
      spaceBetween: 24,
    },
  },
});

export default swiper;
