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

//카운트다운
const countDown = new Date("May 5, 2023 22:22:00").getTime();

const x = setInterval(function () {

  let now = new Date().getTime();

  let timer = countDown - now;

  let days = Math.floor(timer / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timer % (1000 * 60)) / 1000);
  document.getElementById("date").style.fontSize = '50px';
  document.getElementById("date").innerHTML = days + "일 " + hours + "시 " +
    minutes + "분 " + seconds + "초 ";

  if (timer < 0) {
    clearInterval(x);
    document.getElementById("date").innerHTML = "드디어 출시되는 FILA 에디션!";
  }
}, 1000);


//검색버튼 클릭시 검색창
const searchOpen = document.getElementById('search');
const searchClose = document.getElementById('close');

searchOpen.addEventListener('click', () => {
  scr.classList.add('search_on');
});
searchClose.addEventListener('click', () => {
  scr.classList.remove('search_on');
});

//footer family
const familySite = document.getElementById('family_site');

familySite.addEventListener('change', (e) => {
  let options = e.currentTarget.options;
  let optionIndex = options.selectedIndex;
  let openNewWindow = window.open('about:blank');

  openNewWindow.location.href = options[optionIndex].value;
});