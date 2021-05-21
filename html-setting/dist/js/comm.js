$(document).ready(function(){

// header sticky
$('#header').each(function(){

let $this = $(this),  /* 변수 선언 */
$window = $(window)

  // 윈도우가 스크롤 되었을 때
$window.scroll()(function(){

let $header = $('header')

  // 윈도우의 스크롤 값
  console.log('윈도우의 스크롤 값 : ' + $window.scrollTop( ))
  // #header 의 높이값 (padding과 border 값이 포함된)
  console.log('#header의 높이값 : ' + $header .outerHeight());
// header 의 위치값
console.log('#header의 위치값 : ' + $header .offset().top)


  });
  
  //w3schools.com/jquery/html_outerheight.asp 참고
  // 만약 윈도우의 스크롤 값이 > 100 경우
  // 참이면 #header에 sticky 클래스 추가
  //  거짓이면 #header에 sticky 클래스 삭제

 if($window.scrollTop( ) > 100){
      $("#header").addClass("sticky");
      } else{
        $("#header").removeClass("sticky");

  }


})



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
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  
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


// slide-banner2
var swiper = new Swiper(".slide-bnr2", {
  slidesPerView: 1,
  spaceBetween: 10,   /* 모바일 기기(640px 미만)일 때 */
  loop:true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  centeredSlides: false,

  
  breakpoints: {
    640: {  /* 해상도 640px 이상일 때 */
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,


    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides: false,

    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
      centeredSlides: true,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



});






  