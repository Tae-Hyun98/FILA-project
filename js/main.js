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
const countDown = new Date("May 30, 2023 22:22:00").getTime();

const x = setInterval(function () {

  let now = new Date().getTime();

  let timer = countDown - now;

  let days = Math.floor(timer / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timer % (1000 * 60)) / 1000);
  
  document.getElementById("date").style.fontSize = '50px';
  document.getElementById("date").innerHTML = days + " 일 " + hours + " :  " +
    minutes + " : " + seconds + " ";

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


//카테고리클릭시 들어가는거
const rankCategory = document.querySelectorAll('.rank_category ul li a');
const categoryTit = document.querySelector('.rank_top h3');
const rankIndi = document.querySelectorAll('.rank_bottom ul li a');
const rankImg = document.querySelectorAll('.rankSwiper .rank_img a img');
const rankDesc = document.querySelectorAll('.rank_desc ul li .desc_tit');
const rankDescPrice = document.querySelectorAll('.rank_desc ul li .desc_price');

const cateTit = ['# 티셔츠&팬츠', '# 온라인단독', '# 타르가', '# 테니스', '# 런닝화'];

const shirtsArray = ['베이직 리니어 반팔티', '3D 빅로고 반팔티', '컴포트핏 인터내셔널 로고 반팔티', '컴포트핏 인터내셔널 반팔 맨투맨', '컴포트핏 조거팬츠', '이지팬츠'];

const shirtsImg = ['./img/Main_img/Ranking_img/T&pants/01.jpg', './img/Main_img/Ranking_img/T&pants/02.jpg', './img/Main_img/Ranking_img/T&pants/03.jpg', './img/Main_img/Ranking_img/T&pants/04.jpg', './img/Main_img/Ranking_img/T&pants/05.jpg', './img/Main_img/Ranking_img/T&pants/06.jpg']

const shirtsPrice = ['39,000원', '32,000원', '38,000원', '29,000원', '24,000원', '18,000원'];

const onlineArray = ['Fila athletics 아노락', 'Fila tennis 블럭 자켓', 'Fila tennis 블럭 하프넥 아노락', 'Sportslife 아치로고 맨투맨', 'Sportslife 아치로고 반팔 티셔츠', 'ball boy 반팔 티셔츠'];

const onlineImg = ['./img/Main_img/Ranking_img/Online/01.jpg', './img/Main_img/Ranking_img/Online/02.jpg', './img/Main_img/Ranking_img/Online/03.jpg', './img/Main_img/Ranking_img/Online/04.jpg', './img/Main_img/Ranking_img/Online/05.jpg', './img/Main_img/Ranking_img/Online/06.jpg'];

const onlinePrice = ['109,000원', '129,000원', '129,000원', '69,000원', '42,000원', '39,000원'];

const targaArray = ['타르가 클래식', '타르가 OG 1988 BB', '타르가 OG 1988', '타르가 클럽 LT', '타르가 88/22', '타르가 클래식 808'];

const targaImg = ['./img/Main_img/Ranking_img/Targa/01.jpg', './img/Main_img/Ranking_img/Targa/02.jpg', './img/Main_img/Ranking_img/Targa/03.jpg', './img/Main_img/Ranking_img/Targa/04.jpg', './img/Main_img/Ranking_img/Targa/05.jpg', './img/Main_img/Ranking_img/Targa/06.jpg'];

const targaPrice = ['89,000원', '179,000원', '149,000원', '109,000원', '79,000원', '88,000원'];

const tennisArray = ['테니스 소프트 볼캡', 'FILA 테니스 라켓 슬링백', 'WHITE LINE 라켓 슬링백', '테니스 타월', '테니스 탁텔 하드볼캡', '테니스 헤어밴드'];

const tennisImg = ['./img/Main_img/Ranking_img/Tennis/01.jpg', './img/Main_img/Ranking_img/Tennis/02.jpg', './img/Main_img/Ranking_img/Tennis/03.jpg', './img/Main_img/Ranking_img/Tennis/04.jpg', './img/Main_img/Ranking_img/Tennis/05.jpg', './img/Main_img/Ranking_img/Tennis/06.jpg'];

const tennisPrice = ['39,000원', '79,000원', '99,000원', '49,000원', '49,000원', '9,900원'];

const runningArray = ['휠라 플로트 맥시', '휠라 NRE I3', '휠라 플로트 프라임', '휠라 플로트 엘리트', '휠라 RGB 플렉스 3.0', '휠라 NRE I3'];

const runningImg = ['./img/Main_img/Ranking_img/Running/01.jpg', './img/Main_img/Ranking_img/Running/02.jpg', './img/Main_img/Ranking_img/Running/03.jpg', './img/Main_img/Ranking_img/Running/04.jpg', './img/Main_img/Ranking_img/Running/05.jpg', './img/Main_img/Ranking_img/Running/06.jpg'];

const runningPrice = ['189,000원', '109,000원', '159,000원', '199,000원', '89,000원', '109,000원'];



for (let i = 0; i < rankCategory.length; i++) {
  if (i === 0) {
    rankCategory[i].addEventListener('click', () => {
      categoryTit.innerHTML = cateTit[i];
      for (let j = 0; j < rankIndi.length; j++) {
        rankIndi[j].innerHTML = shirtsArray[j];
        rankImg[j].setAttribute('src', shirtsImg[j]);
        rankDesc[j].innerHTML = shirtsArray[j];
        rankDescPrice[j].innerHTML = shirtsPrice[j];
      }
    });
  } else if (i === 1) {
    rankCategory[i].addEventListener('click', () => {
      categoryTit.innerHTML = cateTit[i];
      for (let j = 0; j < rankIndi.length; j++) {
        rankIndi[j].innerHTML = onlineArray[j];
        rankImg[j].setAttribute('src', onlineImg[j]);
        rankDesc[j].innerHTML = onlineArray[j];
        rankDescPrice[j].innerHTML = onlinePrice[j];
      }
    });
  } else if (i === 2) {
    rankCategory[i].addEventListener('click', () => {
      categoryTit.innerHTML = cateTit[i];
      for (let j = 0; j < rankIndi.length; j++) {
        rankIndi[j].innerHTML = targaArray[j];
        rankImg[j].setAttribute('src', targaImg[j]);
        rankDesc[j].innerHTML = targaArray[j];
        rankDescPrice[j].innerHTML = targaPrice[j];
      }
    });
  } else if (i === 3) {
    rankCategory[i].addEventListener('click', () => {
      categoryTit.innerHTML = cateTit[i];
      for (let j = 0; j < rankIndi.length; j++) {
        rankIndi[j].innerHTML = tennisArray[j];
        rankImg[j].setAttribute('src', tennisImg[j]);
        rankDesc[j].innerHTML = tennisArray[j];
        rankDescPrice[j].innerHTML = tennisPrice[j];
      }
    });
  } else if (i === 4) {
    rankCategory[i].addEventListener('click', () => {
      categoryTit.innerHTML = cateTit[i];
      for (let j = 0; j < rankIndi.length; j++) {
        rankIndi[j].innerHTML = runningArray[j];
        rankImg[j].setAttribute('src', runningImg[j]);
        rankDesc[j].innerHTML = runningArray[j];
        rankDescPrice[j].innerHTML = runningPrice[j];
      }
    });
  }
};


//탑,바텀버튼
const topBtn = document.querySelector('.top');
const bottomBtn = document.querySelector('.bottom');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400 && window.scrollY < 6500) {
    gsap.to(topBtn, 0.1, {
      opacity: 1,
      visibility: 'visible'
    });
    gsap.to(bottomBtn, 0.1, {
      opacity: 1,
      visibility: 'visible'
    });

  } else if (window.scrollY >= 6500) {
    gsap.to(topBtn, 0.1, {
      opacity: 1,
      visibility: 'visible'
    });
    gsap.to(bottomBtn, 0.1, {
      opacity: 0,
      visibility: 'hidden'
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


//magazine 나타나기
const magzEls = document.querySelectorAll('.magazine_box>div');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 3800) {
    gsap.to(magzEls[0], 0.5, {
      opacity: 1,
      translateX: 0
    })
    gsap.to(magzEls[1], 0.5, {
      delay: 0.5,
      opacity: 1,
      translateY: 0
    })
    gsap.to(magzEls[2], 0.5, {
      delay: 1,
      opacity: 1,
      translateX: 0
    })
  }
})

const snsEls = document.querySelectorAll('.sns_list li');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 5600) {
    gsap.to(snsEls[0], 0.5, {
      delay: 2,
      opacity: 1,
      translateX: 0
    })
    gsap.to(snsEls[1], 0.5, {
      delay: 1.5,
      opacity: 1,
      translateX: 0
    })
    gsap.to(snsEls[2], 0.5, {
      delay: 1,
      opacity: 1,
      translateX: 0
    })
    gsap.to(snsEls[3], 0.5, {
      delay: 0.5,
      opacity: 1,
      translateX: 0
    })
    gsap.to(snsEls[4], 0.5, {
      opacity: 1,
      translateX: 0
    })
    gsap.to(snsEls[5], 0.5, {
      opacity: 1,
      translateX: 0
    })
    gsap.to(snsEls[6], 0.5, {
      delay: 0.5,
      opacity: 1,
      translateX: 0
    })
    gsap.to(snsEls[7], 0.5, {
      delay: 1,
      opacity: 1,
      translateX: 0
    })
    gsap.to(snsEls[8], 0.5, {
      delay: 1.5,
      opacity: 1,
      translateX: 0
    })
    gsap.to(snsEls[9], 0.5, {
      delay: 2,
      opacity: 1,
      translateX: 0
    })
  }
})