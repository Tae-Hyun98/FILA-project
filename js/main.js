import {
  cateTit,
  shirtsData,
  onlineData,
  targaData,
  tennisData,
  runningData
} from "./rank_data.js";



//카운트다운
const countDown = new Date("Jun 30, 2023 22:22:00").getTime();

const x = setInterval(function () {
  const timeP = document.querySelectorAll('.time p');
  let now = new Date().getTime();

  let timer = countDown - now;

  let days = Math.floor(timer / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timer % (1000 * 60)) / 1000);

  for (let i = 0; i < timeP.length; i++) {
    timeP[0].innerHTML = `${('00'+days+' 일').slice(-4)}`
    timeP[1].innerHTML = `${('00'+hours+' : ').slice(-5)}`
    timeP[2].innerHTML = `${('00'+minutes+' : ').slice(-5)}`
    timeP[3].innerHTML = `${('00'+seconds).slice(-2)}`
  }

  if (timer < 0) {
    clearInterval(x);
    document.querySelector(".count").innerHTML = "드디어 출시되는 FILA 에디션!";
  }
}, 1000);




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