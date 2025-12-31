


// 사이드 버튼

const sideMenu = document.getElementById("side_menu_wrap");
const trigger = document.getElementById("banner1_bg");

window.addEventListener("scroll", () => {
  const triggerTop = trigger.getBoundingClientRect().top;

  if (triggerTop <= 0) {
    sideMenu.classList.add("show");
  } else {
    sideMenu.classList.remove("show");
  }
});


// 컨텐츠2

const textBox = document.querySelector('.tc2_text');
const titleEl = document.querySelector('.tc2_p1');
const textEl = document.querySelector('.tc2_p2');

const swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  on: {
    init() {
      updateText(this);
    },
    slideChange() {
      updateText(this);
    }
  }
});

function updateText(swiper) {
  const slide = swiper.slides[swiper.activeIndex];
  const title = slide.dataset.title;
  const text = slide.dataset.text;

  textBox.classList.remove('active');

  setTimeout(() => {
    titleEl.textContent = title;
    textEl.textContent = text;
    textBox.classList.add('active');
  }, 200);
}
    


// 컨텐츠3

const eventSwiper = new Swiper('.mySwiper2', {
  loop: true,
  grabCursor: true,

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
