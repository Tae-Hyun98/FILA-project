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
const searchOpen = document.getElementById('search').addEventListener('click', () => {
  scr.classList.add('search_on');
});

const searchClose = document.getElementById('close').addEventListener('click', () => {
  scr.classList.remove('search_on');
});;



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


//실측사이즈 클릭시팝업
const sizeBtn = document.getElementById('size_btn');
const sizePopup = document.querySelector('.size_wrap');
const popupClose = document.querySelector('.close');

sizeBtn.addEventListener('click', () => {
  sizePopup.style.display = 'block';
  popupClose.addEventListener('click', () => {
    sizePopup.style.display = 'none';
  });
});


//수량 + -
const qtyNum = document.querySelector('.qty_num');
let qtyValue = qtyNum.value;
const totalSum = document.getElementById('sum');

const mius = document.querySelector('.mius').addEventListener('click', () => {
  qtyNum.value--;
});
const plus = document.querySelector('.plus').addEventListener('click', () => {
  qtyNum.value++;
});

const total = qtyValue.addEvetListener('change', () => {
  totalSum.innerText = qtyValue * 99000;
});



//sheet menu
const tabList = document.querySelectorAll('.sheet_menu .list li');
const contents = document.querySelectorAll('.sheet_menu .content ul');
let activeContent = '';

for (let i = 0; i < tabList.length; i++) {
  tabList[i].querySelector('.tab_tit').addEventListener('click', function (e) {
    e.preventDefault();
    for (let j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('on');
      contents[j].style.display = 'none';
    }
    this.parentNode.classList.add('on');

    activeContent = this.getAttribute('href');
    document.querySelector(activeContent).style.display = 'block';
  });
}

//review sheet
const sheetList = document.querySelectorAll('.tab_menu ul li');
const tabContents = document.querySelectorAll('.tab_menu .tab_cont>div');
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


//리뷰등록
const addBtn = document.getElementById('add_btn');
const inputId = document.getElementById('input_id');
const inputTxt = document.getElementById('input_txt');
const reviewList = document.querySelector('.review_list');
let today = new Date();
let dayFormat = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDate();
let count = 1;

addBtn.addEventListener('click', reviewAdd);

function reviewAdd() {
  if (inputId.value != '' && inputTxt.value != '') {
    let Li = document.createElement('li');
    let Pno = document.createElement('p');
    let Pnum = document.createTextNode(count);
    let Pstar = document.createElement('p');
    let Prating = document.createTextNode('★★★');
    let Ptext = document.createElement('p');
    let Pid = document.createElement('p');
    let Ptoday = document.createElement('p');
    let Today = document.createTextNode(dayFormat);
    let Pdel = document.createElement('button');
    let del = document.createTextNode('X');
    let userId = document.createTextNode(inputId.value);
    let userTxt = document.createTextNode(inputTxt.value);

    Li.appendChild(Pno);
    Li.appendChild(Pstar);
    Li.appendChild(Ptext);
    Li.appendChild(Pid);
    Li.appendChild(Ptoday);
    Li.appendChild(Pdel);

    Ptoday.appendChild(Today);
    Pstar.appendChild(Prating);
    Pno.appendChild(Pnum);
    Ptext.appendChild(userTxt);
    Pid.appendChild(userId);
    Pdel.appendChild(del);
    Pdel.setAttribute('class', 'delete');

    reviewList.appendChild(Li);

    inputId.value = '';
    inputTxt.value = '';
    count++;

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