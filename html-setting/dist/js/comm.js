$(document).ready(function(){

  // 전역 변수
let $window = $(window)


// gnb
$('#gnb').each(function(){

  let $this = $(this),
     $header = $('#header')
 
 // 초기화
 $this.removeClass('on')
 
 // 이벤트 2개 넣고 싶을 때(마우스 오버와 포커스 들어갔을 때)
 .on('mouseenter foucein')(function(){
   $this.addClass('on')
 })
 
 $header.addClass('sticky')
 
 
 .on('mouseleave fouceout')(function(){
   $this.removeClass('on')
   // 만약 (윈도우 스크롤 값 <50) 라면
   // header에게 sticky 클래스 삭제
 if($(window).scrollTop() <50){
   $("#header").removeClass('sticky')
 }
 })
 })


// header sticky
$('#header').each(function(){

let $this = $(this),  /* 변수 선언 */
    $window = $(window)

 // #header 의 높이값 (padding과 border 값이 포함된)
 console.log('#header의 높이값 : ' + $this .outerHeight())

 // header 의 위치값
console.log('#header의 위치값 : ' + $this .offset().top)


  // 윈도우가 스크롤 되었을 때
$window
.scroll(function(){

  let $header = $('#header')

  // 윈도우의 스크롤 값
  console.log('윈도우의 스크롤 값 : ' + $window.scrollTop())
 
  if($window.scrollTop( ) > $header.outerHeight()){
    $header.addClass('sticky')
    } else{
      $header.removeClass('sticky')
    }
  })
.trigger('scroll')

  //w3schools.com/jquery/html_outerheight.asp 참고
  // 만약 윈도우의 스크롤 값이 > 100 경우
  // 참이면 #header에 sticky 클래스 추가
  //  거짓이면 #header에 sticky 클래스 삭제

})



// gnb 클릭 시 해당 해시태그로 애니메이션 되며 이동

$('#gnb a').click(function(event){
  // a링크 기능 없애기
  event.preventDefault()
  // 만약에 링크에 해시태그가 비어있지 않다면 
  if(this.hash !==""){
    let hash = this.hash   /* 내가 방금 클릭한 해시값 */
    $('html, body').animate({
      scrollTop : $(hash).offset().top - 20 /* 해당 아이디 값 가진 곳까지 */  /* gnb의 높이값 53을 빼주어 가리지 않기 */
    },800)

  }
})






// scroll up. js
$.scrollUp({
  scrollName: 'scrollUp', // Element ID
  topDistance: '300', // Distance from top before showing element (px)
  topSpeed: 300, // Speed back to top (ms)
  animation: 'fade', // Fade, slide, none
  animationInSpeed: 200, // Animation in speed (ms)
  animationOutSpeed: 200, // Animation out speed (ms)
  scrollText: '페이지 상단으로 이동', // Text for element 
  activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});



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







  