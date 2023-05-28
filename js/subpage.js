import subData from "./sub_data.js";

const subProduct = document.querySelector('.list_wrap');
const productList = document.querySelector('.product_list');

//상품 순서 정렬
const filterSele = document.getElementById('order');

filterSele.addEventListener('change', () => {
  if (filterSele.value === 'name') {
    const name = subData.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0); //이름 오름차순
    priobj(name);
  } else if (filterSele.value === 'desc') {
    const desc = subData.sort((a, b) => a.price - b.price); //가격내림차순
    priobj(desc);
  } else if (filterSele.value === 'asc') {
    const asc = subData.sort((a, b) => b.price - a.price); //가격오름차순
    priobj(asc);
  } else if (filterSele.value === 'new') {
    const newProduct = subData.sort((a, b) => a.id > b.id ? -1 : a.id < b.id ? 1 : 0); //신상품
    priobj(newProduct);
  } else if (filterSele.value === 'review') {
    const review = subData.sort((a, b) => a.review > b.review ? -1 : a.review < b.review ? 1 : 0); //리뷰순정렬
    priobj(review);
  }
});


//가격정렬
const priceFilter = document.querySelectorAll('.price');
const price39000 = subData.filter((pr39) => pr39.price <= 39000);
const price49000 = subData.filter((pr49) => pr49.price > 39000 && pr49.price <= 49000);
const price59000 = subData.filter((pr59) => pr59.price > 49000 && pr59.price <= 59000);
const price69000 = subData.filter((pr69) => pr69.price > 59000 && pr69.price <= 79000);
const price79000 = subData.filter((pr79) => pr79.price > 79000);

priceFilter.forEach((price) => {
  price.addEventListener('click', () => {
    if (priceFilter[0].checked) {
      priobj(price39000);
    } else if (priceFilter[1].checked) {
      priobj(price49000);
    } else if (priceFilter[2].checked) {
      priobj(price59000);
    } else if (priceFilter[3].checked) {
      priobj(price69000);
    } else if (priceFilter[4].checked) {
      priobj(price79000);
    } else {
      priobj(subData);
    }
  })
})



//filter color check
const colorChk = document.querySelectorAll('.color');
const colorLabel = document.querySelectorAll('.color_filter label');

for (let i = 0; i < colorChk.length; i++) {
  colorChk[i].addEventListener('click', () => {
    if (colorChk[i].checked) {
      colorLabel[i].classList.add('on');
    } else {
      colorLabel[i].classList.remove('on');
    }
  });
}



//컬러필터
const white = subData.filter((Color) => Color.color === 'white');
const black = subData.filter((Color) => Color.color === 'black');
const gray = subData.filter((Color) => Color.color === 'gray');
const green = subData.filter((Color) => Color.color === 'green');
const blue = subData.filter((Color) => Color.color === 'blue');
const mix = subData.filter((Color) => Color.color === 'mix');
const navy = subData.filter((Color) => Color.color === 'navy');
const orange = subData.filter((Color) => Color.color === 'orange');
const red = subData.filter((Color) => Color.color === 'red');
const beige = subData.filter((Color) => Color.color === 'beige');

for (let i = 0; i < colorChk.length; i++) {
  colorChk[i].addEventListener('click', () => {
    if (colorChk[0].checked) {
      priobj(white);
    } else if (colorChk[1].checked) {
      priobj(black);
    } else if (colorChk[2].checked) {
      priobj(gray);
    } else if (colorChk[3].checked) {
      priobj(green);
    } else if (colorChk[4].checked) {
      priobj(blue);
    } else if (colorChk[5].checked) {
      priobj(mix);
    } else if (colorChk[6].checked) {
      priobj(navy);
    } else if (colorChk[7].checked) {
      priobj(orange);
    } else if (colorChk[8].checked) {
      priobj(red);
    } else if (colorChk[9].checked) {
      priobj(beige);
    } else {
      priobj(subData);
    }
  });
}

//리스트 객체함수
function priobj(obj) {
  productList.innerHTML = '';
  for (let i = 0; i < obj.length; i++) {
    //서브 상품박스
    const subDiv = document.createElement('div');
    subDiv.setAttribute('class', 'product_box');

    const subImgBox = document.createElement('div');
    subImgBox.setAttribute('class', 'product_img');

    const imgLink = document.createElement('a');
    imgLink.setAttribute('href', '../detail.html');
    subImgBox.appendChild(imgLink);

    const subImg = document.createElement('img');
    subImg.setAttribute('src', obj[i].src);
    imgLink.appendChild(subImg);

    const detailDiv = document.createElement('div');
    detailDiv.setAttribute('class', 'detail');

    const detailLink = document.createElement('a');
    detailLink.setAttribute('href', '../detail.html');
    detailDiv.appendChild(detailLink);

    //상품박스 호버했을때
    const hoverDiv = document.createElement('div');
    hoverDiv.setAttribute('class', 'hover_box');
    subImgBox.appendChild(hoverDiv);

    const cartDiv = document.createElement('div');
    hoverDiv.appendChild(cartDiv);
    const cartSpan = document.createElement('span');
    cartSpan.setAttribute('class', 'material-icons-outlined');
    const cartText = document.createTextNode('shopping_cart');
    cartDiv.appendChild(cartSpan);
    cartSpan.appendChild(cartText);

    const likeDiv = document.createElement('div');
    hoverDiv.appendChild(likeDiv);
    const likeSpan = document.createElement('span');
    likeSpan.setAttribute('class', 'material-icons-outlined');
    const likeText = document.createTextNode('favorite');
    likeDiv.appendChild(likeSpan);
    likeSpan.appendChild(likeText);

    //카테고리
    const cateGory = document.createElement('p');
    cateGory.setAttribute('class', 'category');
    detailLink.appendChild(cateGory);
    const cateGoryText = document.createTextNode(obj[i].category);
    cateGory.appendChild(cateGoryText);

    //상품이름
    const productName = document.createElement('p');
    productName.setAttribute('class', 'product_name');
    detailLink.appendChild(productName);
    const nameText = document.createTextNode(obj[i].name);
    productName.appendChild(nameText);

    //상품가격
    const productPrice = document.createElement('p');
    productPrice.setAttribute('class', 'product_price');
    detailLink.appendChild(productPrice);
    const namePrice = document.createTextNode(obj[i].price.toLocaleString('ko-KR') + '원');
    productPrice.appendChild(namePrice);

    //리뷰수
    const reviSpan = document.createElement('span');
    const reviCount = document.createTextNode('★(' + obj[i].review + ')');
    productPrice.appendChild(reviSpan);
    reviSpan.appendChild(reviCount);

    //BUY버튼
    const buyDiv = document.createElement('div');
    buyDiv.setAttribute('class', 'buy_btn');
    detailDiv.appendChild(buyDiv);

    const buyA = document.createElement('a');
    buyA.setAttribute('href', '#!');
    buyDiv.appendChild(buyA);

    const buyText = document.createTextNode('BUY');
    buyA.appendChild(buyText);

    subDiv.appendChild(subImgBox);
    subDiv.appendChild(detailDiv);
    productList.appendChild(subDiv);
    subProduct.appendChild(productList);
  }
}
priobj(subData);




/* //초기상품리스트 
function bindData() {
  for (let i = 0; i < subData.length; i++) {
    //서브 상품박스
    const subDiv = document.createElement('div');
    subDiv.setAttribute('class', 'product_box');

    const subImgBox = document.createElement('div');
    subImgBox.setAttribute('class', 'product_img');

    const imgLink = document.createElement('a');
    imgLink.setAttribute('href', "#!");
    subImgBox.appendChild(imgLink);

    const subImg = document.createElement('img');
    subImg.setAttribute('src', subData[i].src);
    imgLink.appendChild(subImg);

    const detailDiv = document.createElement('div');
    detailDiv.setAttribute('class', 'detail');

    const detailLink = document.createElement('a');
    detailLink.setAttribute('href', '#!');
    detailDiv.appendChild(detailLink);

    //상품박스 호버했을때
    const hoverDiv = document.createElement('div');
    hoverDiv.setAttribute('class', 'hover_box');
    subImgBox.appendChild(hoverDiv);

    const cartDiv = document.createElement('div');
    hoverDiv.appendChild(cartDiv);
    const cartSpan = document.createElement('span');
    cartSpan.setAttribute('class', 'material-icons-outlined');
    const cartText = document.createTextNode('shopping_cart');
    cartDiv.appendChild(cartSpan);
    cartSpan.appendChild(cartText);

    const likeDiv = document.createElement('div');
    hoverDiv.appendChild(likeDiv);
    const likeSpan = document.createElement('span');
    likeSpan.setAttribute('class', 'material-icons-outlined');
    const likeText = document.createTextNode('favorite');
    likeDiv.appendChild(likeSpan);
    likeSpan.appendChild(likeText);

    //카테고리
    const cateGory = document.createElement('p');
    cateGory.setAttribute('class', 'category');
    detailLink.appendChild(cateGory);
    const cateGoryText = document.createTextNode(subData[i].category);
    cateGory.appendChild(cateGoryText);

    //상품이름
    const productName = document.createElement('p');
    productName.setAttribute('class', 'product_name');
    detailLink.appendChild(productName);
    const nameText = document.createTextNode(subData[i].name);
    productName.appendChild(nameText);

    //상품가격
    const productPrice = document.createElement('p');
    productPrice.setAttribute('class', 'product_price');
    detailLink.appendChild(productPrice);
    const namePrice = document.createTextNode(subData[i].price.toLocaleString('ko-KR') + '원');
    productPrice.appendChild(namePrice);

    //리뷰수
    const reviSpan = document.createElement('span');
    const reviCount = document.createTextNode('★(' + subData[i].review + ')');
    productPrice.appendChild(reviSpan);
    reviSpan.appendChild(reviCount);

    //BUY버튼
    const buyDiv = document.createElement('div');
    buyDiv.setAttribute('class', 'buy_btn');
    detailDiv.appendChild(buyDiv);

    const buyA = document.createElement('a');
    buyA.setAttribute('href', '#!');
    buyDiv.appendChild(buyA);

    const buyText = document.createTextNode('BUY');
    buyA.appendChild(buyText);

    subDiv.appendChild(subImgBox);
    subDiv.appendChild(detailDiv);
    productList.appendChild(subDiv);
    subProduct.appendChild(productList);
  }

}
bindData(); */


//상품4개, 5개보기버튼
const listCol = document.querySelector('.list_wrap');
const col4Btn = document.querySelector('.col4_btn');
const col5Btn = document.querySelector('.col5_btn');

col4Btn.addEventListener('click', () => {
  listCol.classList.add('col_4');
  listCol.classList.remove('col_5');
});
col5Btn.addEventListener('click', () => {
  listCol.classList.add('col_5');
  listCol.classList.remove('col_4');
});


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
const searchOpen = document.getElementById('search');
const searchClose = document.getElementById('close');

searchOpen.addEventListener('click', () => {
  scr.classList.add('search_on');
});
searchClose.addEventListener('click', () => {
  scr.classList.remove('search_on');
});


//필터클릭시 아래로 필터다운
const filterBtn = document.querySelector('.filter_btn a');
const filterSpan = document.querySelector('.filter_btn >a>span')
const filterDown = document.querySelector('.filter_down');
let state = 0;

filterBtn.addEventListener('click', () => {
  if (state === 0) {
    filterDown.style.height = '374px';
    filterDown.style.opacity = '1';
    filterSpan.innerHTML = '-';
    state = 1;
  } else {
    filterDown.style.height = '0';
    filterDown.style.opacity = '0';
    filterSpan.innerHTML = '+';
    state = 0;
  }
});


//filter check
const sportChk = document.querySelectorAll('.sport');
const sportLabel = document.querySelectorAll('.sport_filter label');

for (let i = 0; i < sportChk.length; i++) {
  sportChk[i].addEventListener('click', () => {
    if (sportChk[i].checked) {
      sportLabel[i].style.color = '#000';
      sportLabel[i].style.fontWeight = '700';
    } else {
      sportLabel[i].style.color = '#777'
      sportLabel[i].style.fontWeight = '400'
    }
  });
}



//filter size check
const sizeChk = document.querySelectorAll('.size');
const sizeLabel = document.querySelectorAll('.size_filter label');

for (let i = 0; i < sizeChk.length; i++) {
  sizeChk[i].addEventListener('click', () => {
    if (sizeChk[i].checked) {
      sizeLabel[i].style.color = '#fff';
      sizeLabel[i].style.backgroundColor = '#002053';
    } else {
      sizeLabel[i].style.color = '#000'
      sizeLabel[i].style.backgroundColor = '#fff'
    }
  });
}

//filter price check
const priceChk = document.querySelectorAll('.price');
const priceLabel = document.querySelectorAll('.price_filter label');

for (let i = 0; i < priceChk.length; i++) {
  priceChk[i].addEventListener('click', () => {
    if (priceChk[i].checked) {
      priceLabel[i].style.color = '#000';
      priceLabel[i].style.fontWeight = '700';
    } else {
      priceLabel[i].style.color = '#777'
      priceLabel[i].style.fontWeight = '400'
    }
  });
}

//filter gender check
const genderChk = document.querySelectorAll('.gender');
const genderLabel = document.querySelectorAll('.gender_filter label');

for (let i = 0; i < genderChk.length; i++) {
  genderChk[i].addEventListener('click', () => {
    if (genderChk[i].checked) {
      genderLabel[i].style.color = '#000';
      genderLabel[i].style.fontWeight = '700';
    } else {
      genderLabel[i].style.color = '#777'
      genderLabel[i].style.fontWeight = '400'
    }
  });
}



//footer family
const familySite = document.getElementById('family_site');

familySite.addEventListener('change', (e) => {
  let options = e.currentTarget.options;
  let optionIndex = options.selectedIndex;
  let openNewWindow = window.open('about:blank');

  openNewWindow.location.href = options[optionIndex].value;
});


//상품개수표시
const totalProduct = document.getElementById('total');
totalProduct.innerHTML = subData.length;


//탑,바텀버튼
const topBtn = document.querySelector('.top');
const bottomBtn = document.querySelector('.bottom');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300 && window.scrollY < 2500) {
    gsap.to(bottomBtn, 0.1, {
      opacity: 1,
      visibility: 'visible'
    })
    gsap.to(topBtn, 0.1, {
      opacity: 1,
      visibility: 'visible'
    })
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


//팝업
const popup = document.querySelector('.popup');
const closeBtn = document.getElementById('close_btn');

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});




//페이지네이션
const dataLeng = subData.length;
const currentPage = 1;
const onePage = 20; //한페이지에뜰 상품
const pageCount = 5; //한화면에 보여질 페이지개수
const totalPage = Math.ceil(dataLeng / onePage); //총페이지수
const pageGroup = Math.ceil(currentPage / pageCount); //페이지네이션그룹

const pages = document.getElementById('pages');
const pageCont = Math.ceil(dataLeng / onePage);

let last = pageGroup * pageCount; //마지막페이지번호
let first = last - (pageCount - 1); //한페이지 그룹의 첫번째페이지 번호

/* if (last > totalPage) {
  last = totalPage;
} */
const next = last + 1;
const prev = first - 1;

if (prev >= 0) {
  pages.innerHTML += `<a href='#!' class='prev'><</a>`
}

for (let i = 1; i <= pageCont; i++) {
  pages.innerHTML += `<a href='#!' class='pg'>${i}</a>`;
}

if (last <= totalPage) {
  pages.innerHTML += `<a href='#!' class='next'>></a>`
}

//page버튼에 idx값 반환
const pageBtn = document.querySelectorAll('.pg');
pageBtn.forEach((item, idx) => {
  item.addEventListener('click', () => {
    displayData(idx);
  });
});

const product = document.querySelectorAll('.product_box');
const prevBtn = document.querySelector('.prev');

function displayData(idx) {
  let productArray = [...product];
  let start = idx * onePage;
  let end = start + onePage;

  for (let sd of productArray) {
    sd.style.display = 'none';
  }

  let subSlice = productArray.slice(start, end);

  for (let ss of subSlice) {
    ss.style.display = '';
  }

  for (let pb of pageBtn) {
    pb.classList.remove('active');
  }
  pageBtn[idx].classList.add('active');
  prevBtn.addEventListener('click', () => {
    if (idx > 0)
      displayData(idx - 1)
  });

}
displayData(0)