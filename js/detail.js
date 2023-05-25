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
  const popupClose = document.querySelector('.close');

  sizeBtn.addEventListener('click', () => {
    sizePopup.style.display = 'block';
    popupClose.addEventListener('click', () => {
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
          for (i; i >= 0; --i) stars[i].className = starClassActive;
        } else {
          for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
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
  const today = new Date();
  const dayFormat = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDate();
  let count = 1;

  addBtn.addEventListener('click', reviewAdd);

  function reviewAdd() {
    if (inputId.value != '' && inputTxt.value != '') {
      let Li = document.createElement('li');
      let Pno = document.createElement('p');
      let Pnum = document.createTextNode(count);
      let Pstar = document.createElement('p');
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
  wriBtn.addEventListener('click', () => {
    inqPopup.style.display = 'none';
  })

  /*   let Options = inqOpt.options[inqOpt.selectedIndex].innerText; */

  /*   selectOpt = selectOpt.options[selectOpt.selectedIndex].value; */
  let Options = inqOpt.options[inqOpt.selectedIndex].value.innerText;

  function inquiryAdd() {
    if (inqOpt.value != '' && inqId.value != '' && inqTit.value != '' && inqContext.value != '') {
      let Li = document.createElement('li');
      let span = document.createElement('span');
      let count = document.createTextNode(countInq);
      let span1 = document.createElement('span');
      let span2 = document.createElement('span');
      let span3 = document.createElement('span');
      let span4 = document.createElement('span');
      let span5 = document.createElement('span');
      let answer = document.createTextNode('답변중');
      let Today = document.createTextNode(dayFormat);
      let option = document.createTextNode(Options);
      let userId = document.createTextNode(inqId.value);
      let inqTitle = document.createTextNode(inqTit.value);
      //let userTxt = document.createTextNode(inqContext.value);


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

    }
  }



  //탑,바텀버튼
  const topBtn = document.querySelector('.top');
  const bottomBtn = document.querySelector('.bottom');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400 && window.scrollY < 2500) {
      gsap.to(topBtn, 0.1, {
        opacity: 1,
        visibility: 'visible'
      });
      gsap.to(bottomBtn, 0.1, {
        opacity: 1,
        visibility: 'visible'
      });

    } else if (window.scrollY >= 2500) {
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