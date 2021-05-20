$(document).ready(function(){

// swiper-intro
var swiper = new Swiper(".slide-intro", {
  // slidesPerView: 1,    동시에 보여질 슬라이드 수
  // spaceBetween: 30,    슬라이드 간 간격
  centeredSlides: true,
  loop:true,
  effect:"fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {  /* 페이지 네비게이션 */
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {  /* 네비게이션(화살표) */
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// slide-banner1
var swiper = new Swiper(".slide-bnr1", {
  slidesPerView: 1,
  spaceBetween: 10,   /* 모바일 기기(640px 미만)일 때 */
  loop:true,
  
  breakpoints: {
    640: {  /* 해상도 640px 이상일 때 */
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

});






  