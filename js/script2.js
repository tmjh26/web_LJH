


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
