//스크롤시 헤더
const scr = document.querySelector('.scroll');
window.addEventListener("wheel", (e) => {
  const scrollUp = e.deltaY <= 0;
  const scrollDown = e.deltaY > 0;

  if (scrollDown && scrollY >= 100) {
    scr.classList.add('scr_down');
    scr.classList.remove('scr_up');
  } else if (scrollUp && scrollY === 0) {
    scr.classList.remove('scr_up');
    scr.classList.remove('scr_down');
  } else if (scrollUp && scrollY !== 0) {
    scr.classList.add('scr_up');
    scr.classList.remove('scr_down');
  }
});

window.addEventListener("scroll", () => {
  if (scrollY === 0) {
    scr.classList.remove('scr_up');
    scr.classList.remove('scr_down');
  }
});

//lnb마우스호버시
const li = document.querySelectorAll('.header .lnb>ul>li');
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("mouseover", (e) => {
    scr.classList.add('bg_on');
  });
  li[i].addEventListener("mouseout", (e) => {
    scr.classList.remove('bg_on');
  });
}


//검색버튼 클릭시 검색창
const searchOpen = document.getElementById('search');
const searchClose = document.getElementById('close');

searchOpen.addEventListener('click', () => {
  scr.classList.add('search_on');
});
searchClose.addEventListener('click', () => {
  scr.classList.remove('search_on');
});

//디테일컷 스와이퍼
const image = ['detail_01.jpg', 'detail_02.jpg', 'detail_03.jpg', 'detail_04.jpg', 'detail_05.jpg', 'detail_06.jpg', 'detail_07.jpg', 'detail_08.jpg']
const swiper = new Swiper(".detail_swiper", {
  loop: true,
  /* autoplay: {
    delay: 3000,
  }, */
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: "preview_img",
    bulletActiveClass: "swiper-pagination-active",
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><img src="../img/detail_img/' + (image[index]) + '"></div>';
    },
  }
});

//color 스와이퍼
const swiperColor = new Swiper(".color_swiper", {
  freeMode: true,
  slidesPerView: 'auto',
  /* autoplay: {
    delay: 3000,
  }, */
});



//sheet menu
/* const sheetMenu = document.querySelector('input[name="sheet"]').checked;
const sheetLabel = document.querySelectorAll('.sheet_menu ul li label');

for (let i = 0; i < sheetMenu.length; i++) {
  sheetLabel[i].addEventListener('click',()=>{  
    if (sheetMenu[i]) {
    sheetLabel[i].style.backgroundColor = "#002053";
    sheetLabel[i].style.color = "#fff";
  } else {
    sheetLabel[i].style.backgroundColor = "#fff";
    sheetLabel[i].style.color = "#000";
  }
});
}
 */