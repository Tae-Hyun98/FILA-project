//스크롤시 헤더
const scr = document.querySelector('.scroll');
window.addEventListener("wheel", (e) => {
  if (e.deltaY == 100 && scrollY >= 100) {
    scr.classList.add('scr_down');
    scr.classList.remove('scr_up');
  } else if (scrollY == 0) {
    scr.classList.remove('scr_up');
    scr.classList.remove('scr_down');
  } else if (e.deltaY == -100) {
    scr.classList.add('scr_up');
    scr.classList.remove('scr_down');
  }
});
const li = document.querySelectorAll('.header .lnb>ul>li');
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("mouseover", (e) => {
    scr.classList.add('bg_on');
  });
  li[i].addEventListener("mouseout", (e) => {
    scr.classList.remove('bg_on');
  });
}