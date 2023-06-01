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
li.forEach((item) => {
  item.addEventListener("mouseover", () => {
    scr.classList.add('bg_on');
  });
  item.addEventListener("mouseout", () => {
    scr.classList.remove('bg_on');
  });
});



//검색버튼 클릭시 검색창
const searchOpen = document.getElementById('search');
const searchClose = document.getElementById('close');

searchOpen.addEventListener('click', () => {
  scr.classList.add('search_on');
});
searchClose.addEventListener('click', () => {
  scr.classList.remove('search_on');
});



//푸터 패밀리사이트
/* const familySite = document.getElementById('family_site');

familySite.addEventListener('change', (e) => {
  let options = e.currentTarget.options;
  let optionIndex = options.selectedIndex;
  let openNewWindow = window.open('about:blank');

  openNewWindow.location.href = options[optionIndex].value;
}); */



//탑,바텀버튼
const topBtn = document.querySelector('.top');
const bottomBtn = document.querySelector('.bottom');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    gsap.to(topBtn, 0.1, {
      opacity: 1,
      visibility: 'visible'
    });
    gsap.to(bottomBtn, 0.1, {
      opacity: 1,
      visibility: 'visible'
    });

  } else {
    gsap.to(topBtn, 0.1, {
      opacity: 0,
      visibility: 'hidden'
    });
    gsap.to(bottomBtn, 0.1, {
      opacity: 0,
      visibility: 'hidden'
    });
  }
});

topBtn.addEventListener('click', () => {
  gsap.to(window, 0.5, {
    scrollTo: 0
  });
});

bottomBtn.addEventListener('click', () => {
  gsap.to(window, 0.5, {
    scrollTo: 7000
  });
});



//팝업닫기
const popup = document.querySelector('.popup');
const popupClose = document.getElementById('popup_close');

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});



/* const footer = document.querySelector('.footer');

fetch('./footer.html')
.then(res => res.text())
.then(data => footer.innerHTML = data); */