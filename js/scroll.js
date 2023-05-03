//스크롤시 헤더
const scr_up = document.querySelector('.header');
const scr = document.querySelector('.scroll');
window.addEventListener("wheel", (e) => {
  if (e.deltaY == 100 && scrollY >= 100) {
    scr.classList.add('scr_down');
    document.getElementById("logo_img").src = "../img/00. LOGO/01(1).png";
    scr.classList.remove('scr_up');
  } else if (scrollY == 0) {
    scr.classList.remove('scr_up');
    scr.classList.remove('scr_down');
    document.getElementById("logo_img").src = "../img/00. LOGO/01(3).png";
  } else if (e.deltaY == -100) {
    scr.classList.add('scr_up');
    scr.classList.remove('scr_down');
  }
});