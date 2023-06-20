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
      return '<div class="' + className + '"><img src="./img/detail_img/' + (image[index]) + '"></div>';
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


//실측사이즈 클릭시팝업
const sizeBtn = document.getElementById('size_btn');
const sizePopup = document.querySelector('.size_wrap');
const popupClose1 = document.querySelector('.close');

sizeBtn.addEventListener('click', () => {
  sizePopup.style.display = 'block';
  popupClose1.addEventListener('click', () => {
    sizePopup.style.display = 'none';
  });
});


//수량 + -
const qtyNum = document.querySelector('.qty_num');
const totalSum = document.getElementById('sum');

const mius = document.querySelector('.mius').addEventListener('click', () => {
  if (qtyNum.value > 1) {
    qtyNum.value--;
    let result = qtyNum.value * 99000;
    totalSum.innerHTML = result.toLocaleString('ko-KR');
  } else {
    alert('최소 1개는 시켜야돼요');
  }
});

const plusDis = document.querySelector('.plus');
const plus = document.querySelector('.plus').addEventListener('click', () => {
  if (qtyNum.value >= 0 && qtyNum.value < 10) {
    qtyNum.value++;
    let result = qtyNum.value * 99000;
    totalSum.innerHTML = result.toLocaleString('ko-KR');
  } else {
    alert('10개이상은 안돼요');
  }
});


const qtyChan = qtyNum.addEventListener('change', () => {
  if (qtyNum.value > 0 && qtyNum.value <= 10) {
    let result = qtyNum.value * 99000;
    totalSum.innerHTML = result.toLocaleString('ko-KR');
  } else {
    qtyNum.value = 1;
    alert('수량을 입력해주세요 1~10');
  }
});


//sheet menu
const tabList = document.querySelectorAll('.sheet_menu .list li');
const infoContents = document.querySelectorAll('.sheet_menu .content ul');
let activeContent = '';

for (let i = 0; i < tabList.length; i++) {
  tabList[i].querySelector('.tab_tit').addEventListener('click', function (e) {
    e.preventDefault();
    for (let j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('on');
      infoContents[j].style.display = 'none';
    }
    this.parentNode.classList.add('on');

    activeContent = this.getAttribute('href');
    document.querySelector(activeContent).style.display = 'block';
  });
}

//review sheet
const sheetList = document.querySelectorAll('.tab_menu>ul>li');
const tabContents = document.querySelectorAll('.tab_menu .tab_cont .tab');
let activeContents = '';

for (let i = 0; i < sheetList.length; i++) {
  sheetList[i].querySelector('.sheet_tit').addEventListener('click', function (e) {
    e.preventDefault();
    for (let j = 0; j < sheetList.length; j++) {
      sheetList[j].classList.remove('on');
      tabContents[j].style.display = 'none';
    }
    this.parentNode.classList.add('on');

    activeContents = this.getAttribute('href');
    document.querySelector(activeContents).style.display = 'block';
  });
}

//별점
const ratingStars = [...document.querySelectorAll(".rating_star")];

function RatingStar(stars) {
  const starClassActive = "fas fa-star rating_star";
  const starClassInactive = "far fa-star rating_star";
  const starsLength = stars.length;

  stars.map((star) => {
    star.addEventListener('click', () => {
      let i = stars.indexOf(star);
      if (star.className === starClassInactive) {
        for (i; i >= 0; i--) {
          stars[i].className = starClassActive;
        }
      } else {
        for (i; i < starsLength; i++) {
          stars[i].className = starClassInactive;
        }
      }
    });
  });
}
RatingStar(ratingStars);


//리뷰등록
const addBtn = document.getElementById('add_btn');
const inputId = document.getElementById('input_id');
const inputTxt = document.getElementById('input_txt');
const reviewList = document.querySelector('.review_list');
const starBtn = document.querySelector('.rating');
const raingIcon = document.querySelectorAll('.rating i');
const today = new Date();
const dayFormat = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDate();
let count = 1;

addBtn.addEventListener('click', reviewAdd);

function reviewAdd() {
  if (inputId.value != '' && inputTxt.value != '') {
    const Li = document.createElement('li');
    const Pno = document.createElement('p');
    const Pnum = document.createTextNode(count);
    const Pstar = document.createElement('p');
    const Ptext = document.createElement('p');
    const Pid = document.createElement('p');
    const Ptoday = document.createElement('p');
    const Today = document.createTextNode(dayFormat);
    const Pdel = document.createElement('button');
    const del = document.createTextNode('X');
    const userId = document.createTextNode(inputId.value);
    const userTxt = document.createTextNode(inputTxt.value);


    Li.appendChild(Pno);
    Li.appendChild(Pstar);
    Li.appendChild(Ptext);
    Li.appendChild(Pid);
    Li.appendChild(Ptoday);
    Li.appendChild(Pdel);

    Ptoday.appendChild(Today);
    Pno.appendChild(Pnum);
    Ptext.appendChild(userTxt);
    Pid.appendChild(userId);
    Pdel.appendChild(del);
    Pdel.setAttribute('class', 'delete');
    Pstar.setAttribute('class', 'star');
    reviewList.appendChild(Li);


    inputId.value = '';
    inputTxt.value = '';
    count++;
    //별점출력
    Pstar.innerHTML = starBtn.innerHTML;
    raingIcon.forEach((item) => {
      item.setAttribute('class', 'far fa-star rating_star');
    })

    let delBtn = document.querySelectorAll('.delete');
    for (let i = 0; i < delBtn.length; i++) {
      delBtn[i].addEventListener('click', function () {
        if (delBtn[i].parentNode.parentNode) {
          this.parentNode.parentNode.removeChild(this.parentNode);
        }
      });
    }
  } else {
    alert('값을 입력하세요');
  }

}


//문의하기
const inqPopup = document.querySelector('.inquiry_write_wrap');

const inqBtn = document.getElementById('inq_btn').addEventListener('click', () => {
  inqPopup.style.display = 'block';
});

const inqClose = document.querySelector('.write_close').addEventListener('click', () => {
  inqPopup.style.display = 'none';
});

const wriBtn = document.getElementById('write_btn');
const inqOpt = document.getElementById('inq_option');
const inqId = document.querySelector('.inq_id input');
const inqTit = document.querySelector('.inq_title input');
const inqContext = document.querySelector('.inq_context textarea');
const inqList = document.querySelector('.inq_list');

let countInq = 2;
wriBtn.addEventListener('click', inquiryAdd);



function inquiryAdd() {
  if (inqOpt.value != '' && inqId.value != '' && inqTit.value != '' && inqContext.value != '') {
    const optext = inqOpt.options[inqOpt.selectedIndex].text; //옵션값 text만
    const Li = document.createElement('li');
    const span = document.createElement('span');
    const count = document.createTextNode(countInq);
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    const span4 = document.createElement('span');
    const span5 = document.createElement('span');
    const answer = document.createTextNode('답변중');
    const Today = document.createTextNode(dayFormat);
    const option = document.createTextNode(optext);
    const userId = document.createTextNode(inqId.value);
    const inqTitle = document.createTextNode(inqTit.value);


    Li.appendChild(span);
    Li.appendChild(span1);
    Li.appendChild(span2);
    Li.appendChild(span3);
    Li.appendChild(span4);
    Li.appendChild(span5);

    span.appendChild(count);
    span1.appendChild(option);
    span2.appendChild(inqTitle);
    span3.appendChild(userId);
    span4.appendChild(Today);
    span5.appendChild(answer);

    inqList.appendChild(Li);

    inqId.value = '';
    inqContext.value = '';
    inqOpt.value = '';
    inqTit.value = '';
    countInq++;
    inqPopup.style.display = 'none'
  } else {
    alert('입력되지 않은 칸이 있습니다.');
    inqPopup.style.display = 'block'
  }
}