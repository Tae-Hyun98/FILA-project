import {
  cateTit,
  shirtsData,
  onlineData,
  targaData,
  tennisData,
  runningData
} from "./rank_data.js";

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




//카테고리클릭시 들어가는거
const rankCategory = document.querySelectorAll('.rank_category ul li a');
const categoryTit = document.querySelector('.rank_top h3');
const rankIndi = document.querySelectorAll('.rank_bottom ul li a');
const rankImg = document.querySelectorAll('.rankSwiper .rank_img a img');
const rankDesc = document.querySelectorAll('.rank_desc ul li .desc_tit');
const rankDescPrice = document.querySelectorAll('.rank_desc ul li .desc_price');

rankCategory.forEach((item, idx) => {
  item.addEventListener('click', () => {
    categoryTit.innerHTML = cateTit[idx];
    if (idx === 0) {
      rankIndi.forEach((ranks, idx) => {
        rankIndi[idx].innerHTML = shirtsData[idx].name;
        rankImg[idx].setAttribute('src', shirtsData[idx].image);
        rankDesc[idx].innerHTML = shirtsData[idx].name;
        rankDescPrice[idx].innerHTML = shirtsData[idx].price;
      });
    } else if (idx === 1) {
      rankIndi.forEach((ranks, idx) => {
        rankIndi[idx].innerHTML = onlineData[idx].name;
        rankImg[idx].setAttribute('src', onlineData[idx].image);
        rankDesc[idx].innerHTML = onlineData[idx].name;
        rankDescPrice[idx].innerHTML = onlineData[idx].price;
      });
    } else if (idx === 2) {
      rankIndi.forEach((ranks, idx) => {
        rankIndi[idx].innerHTML = targaData[idx].name;
        rankImg[idx].setAttribute('src', targaData[idx].image);
        rankDesc[idx].innerHTML = targaData[idx].name;
        rankDescPrice[idx].innerHTML = targaData[idx].price;
      });
    } else if (idx === 3) {
      rankIndi.forEach((ranks, idx) => {
        rankIndi[idx].innerHTML = tennisData[idx].name;
        rankImg[idx].setAttribute('src', tennisData[idx].image);
        rankDesc[idx].innerHTML = tennisData[idx].name;
        rankDescPrice[idx].innerHTML = tennisData[idx].price;
      });
    } else if (idx === 4) {
      rankIndi.forEach((ranks, idx) => {
        rankIndi[idx].innerHTML = runningData[idx].name;
        rankImg[idx].setAttribute('src', runningData[idx].image);
        rankDesc[idx].innerHTML = runningData[idx].name;
        rankDescPrice[idx].innerHTML = runningData[idx].price;
      });
    }
  })
})



//footer family
const familySite = document.getElementById('family_site');

familySite.addEventListener('change', (e) => {
  let options = e.currentTarget.options;
  let optionIndex = options.selectedIndex;
  let openNewWindow = window.open('about:blank');

  openNewWindow.location.href = options[optionIndex].value;
});




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
const magaEls = document.querySelectorAll('.magazine_box>div');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 3600) {
    magaEls.forEach((item, idx) => {
      gsap.to(item, 0.4, {
        delay: (idx + 1) * 0.4,
        opacity: 1,
        translateY: 0
      })
    });
  }
})

//sns
const snsEls = document.querySelectorAll('.sns_list .sa');
const snsElsb = document.querySelectorAll('.sns_list .sb');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 5550) {
    snsEls.forEach((item, idx) => {
      gsap.to(item, 0.5, {
        delay: idx * 0.5,
        opacity: 1,
        translateX: 0,
      });
    })

    snsElsb.forEach((item, idx) => {
      gsap.to(item, 0.5, {
        delay: idx * 0.5,
        opacity: 1,
        translateX: 0
      });
    });
  }
})