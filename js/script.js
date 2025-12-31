// const videos = [
//   "video/run3.mp4",
//   "video/w1.mp4",
//   "video/w2.mp4",
//   "video/w3.mp4",
//   "video/w4.mp4",
//   "video/w5.mp4",

// ];




const videos = [
  "video/web_video_1.mp4",


];

let index = 0;
const player = document.getElementById("player");

// 첫 영상 로드
player.src = videos[index];
player.play();

// 영상 하나가 끝나면 자동으로 다음 영상
player.addEventListener("ended", () => {
  index++;

  // 마지막 영상까지 재생했으면 처음으로 돌아가기
  if (index >= videos.length) {
    index = 0;
  }

  player.src = videos[index];
  player.play();
});




// 있으면 더 좋은 아이템
const swiper = new Swiper(".itemswiper", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: true,
  grabCursor: true,

  navigation: {
    nextEl: ".rbtn",   // 👉 오른쪽 버튼
    prevEl: ".lbtn",   // 👉 왼쪽 버튼
  },
});



// 이벤트 배너

const eventSwiper = new Swiper('.eventSwiper', {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 800,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



// 공지사항
$(".nclt_button").on("click", function (e) {
  e.preventDefault();

  const btn = $(this);
  const item = btn.closest(".notice_item");

  // 다른 것 닫기
  $(".notice_sub_content").not(item.find(".notice_sub_content")).slideUp();
  $(".nclt_button").not(btn).removeClass("active");

  // 현재 토글
  item.find(".notice_sub_content").stop().slideToggle();
  btn.toggleClass("active");
});




// 자주 묻는 질문
$(function(){
    $(".ftap").click(function(){
        $(this).addClass("faq_on1").siblings().removeClass("faq_on1")
    });
        $(".faq_tap .tbtn").click(function (e) {
        e.preventDefault();
        
});
});



// 사이드 버튼

const sideMenu = document.getElementById("side_menu_wrap");
const trigger = document.getElementById("brand_logo_wrap");

window.addEventListener("scroll", () => {
  const triggerTop = trigger.getBoundingClientRect().top;

  if (triggerTop <= 0) {
    sideMenu.classList.add("show");
  } else {
    sideMenu.classList.remove("show");
  }
});


// 메뉴

$(function(){
  $(".direct_menu").hide();

  $(".direct_wrap").hover(function(){
    $(this).find(".direct_menu").stop().slideDown(300);
  },
  function(){
    $(this).find(".direct_menu").stop().slideUp(300);
  
  });
});


