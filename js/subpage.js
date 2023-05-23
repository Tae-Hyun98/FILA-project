import subData from "./sub_data.js";

const subProduct = document.querySelector('.list_wrap');
const productList = document.querySelector('.product_list');

//상품 순서 정렬
const filterSele = document.getElementById('order');

filterSele.addEventListener('change', () => {
  if (filterSele.value === 'name') {
    subData.sort(function (a, b) { //이름 오름차순
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    productList.innerHTML = '';
    bindData();
  } else if (filterSele.value === 'desc') {
    subData.sort(function (a, b) { //가격내림차순
      return a.price - b.price;
    });
    productList.innerHTML = '';
    bindData();
  } else if (filterSele.value === 'asc') {
    subData.sort(function (a, b) { //가격오름차순
      return b.price - a.price;
    });
    productList.innerHTML = '';
    bindData();
  } else if (filterSele.value === 'new') {
    subData.sort(function (a, b) { //신상품
      return a.id > b.id ? -1 : a.id < b.id ? 1 : 0;
    });
    productList.innerHTML = '';
    bindData();
  } else if (filterSele.value === 'review') {
    subData.sort(function (a, b) { //리뷰순정렬
      return a.review > b.review ? -1 : a.review < b.review ? 1 : 0;
    });
    productList.innerHTML = '';
    bindData();
  }
});

const priceFi = document.getElementById('price01');
const ar01 = subData.filter(function (pri) {
  return pri.price <= 39000;
});
priceFi.addEventListener('click', () => {
  if (priceFi.checked) {
    productList.innerHTML = '';
    priobj(ar01);
  } else {
    productList.innerHTML = '';
    bindData();
  }
});
//컬러선택
const blackChk = document.getElementById('color_02');

blackChk.addEventListener('click', () => {
  if (blackChk.checked) {
    let Newch = subData.filter(function (a) {
      return a.color === 'black';
    });
    productList.innerHTML = '';

    for (let i = 0; i < Newch.length; i++) {
      //서브 상품박스
      const subDiv = document.createElement('div');
      subDiv.setAttribute('class', 'product_box');

      const subImgBox = document.createElement('div');
      subImgBox.setAttribute('class', 'product_img');

      const imgLink = document.createElement('a');
      imgLink.setAttribute('href', "#!");
      subImgBox.appendChild(imgLink);

      const subImg = document.createElement('img');
      subImg.setAttribute('src', Newch[i].src);
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
      const cateGoryText = document.createTextNode(Newch[i].category);
      cateGory.appendChild(cateGoryText);

      //상품이름
      const productName = document.createElement('p');
      productName.setAttribute('class', 'product_name');
      detailLink.appendChild(productName);
      const nameText = document.createTextNode(Newch[i].name);
      productName.appendChild(nameText);

      //상품가격
      const productPrice = document.createElement('p');
      productPrice.setAttribute('class', 'product_price');
      detailLink.appendChild(productPrice);
      const namePrice = document.createTextNode(Newch[i].price.toLocaleString('ko-KR') + '원');
      productPrice.appendChild(namePrice);

      //리뷰수
      const reviSpan = document.createElement('span');
      const reviCount = document.createTextNode('★(' + Newch[i].review + ')');
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
  } else {
    productList.innerHTML = '';
    bindData();
  }
});


function priobj(obj) {
  for (let i = 0; i < obj.length; i++) {
    //서브 상품박스
    const subDiv = document.createElement('div');
    subDiv.setAttribute('class', 'product_box');

    const subImgBox = document.createElement('div');
    subImgBox.setAttribute('class', 'product_img');

    const imgLink = document.createElement('a');
    imgLink.setAttribute('href', "#!");
    subImgBox.appendChild(imgLink);

    const subImg = document.createElement('img');
    subImg.setAttribute('src', obj[i].src);
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


//가격필터



/* const listBlack = subData.filter(function (data) {
  return data.color === 'black';
});
console.log(listBlack)  */
/* colorChk.addEventListener('click', () => {
  if (filterSele.value === 'name') {
    subData.filter(function (a, b) { //이름 오름차순
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    productList.innerHTML = '';
    bindData();
  } else if (filterSele.value === 'desc') {
    subData.sort(function (a, b) { //가격내림차순
      return a.price - b.price;
    });
    productList.innerHTML = '';
    bindData();
  } else if (filterSele.value === 'asc') {
    subData.sort(function (a, b) { //가격오름차순
      return b.price - a.price;
    });
    productList.innerHTML = '';
    bindData();
  }
}); */

/* colorChk.forEach(chk => chk.addEventListener('click', () => { 
for(let i=0;i<lists.length;i++){
    if (lists[i].color === 'black') {
      subBox[i].style.display = 'block'
    } else if (lists[i].color != 'black') {
      subBox[i].style.display = 'none'
    }
  }
}));
 */

/* for (let i = 0; i < colorChk.length; i++) {
  colorChk[i].addEventListener('click', () => {
    if (colorChk[i].checked && lists[i].color === 'black') {
      productList[i].style.display = 'none';
    } else if (!colorChk[i].checked) {
      productList[i].style.display = 'flex'
    }
  })
} */

/* const input1 = document.getElementById('price01');

input1.addEventListener('click', () => {
  if (input1.checked) {
    subData.filter(function (e) {
      return e.price <= 39000;
    });
    /* let result = subData.filter(sub => sub.price <= 39000); 
    productList.innerHTML = '';
    bindData();
  }

}); */

/* function priceFilter() {
  function getPrice(value) {
    return value.price <= 39000;
  }
  const newPrice=subData.filter(getPrice);
} */
/* colorLabel[1].addEventListener('click', () => {
  subData.filter(function (emp) {
    if (emp.color === 'black') {
      return emp;
    }
    productList.innerHTML = '';
    bindData();
  });
});
 */

//상품리스트 객체
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
bindData();

/* 
const count = 0;
window.onscroll = function () {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
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
      const namePrice = document.createTextNode(subData[i].price + '원');
      productPrice.appendChild(namePrice);

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
    count++;

  } else if (count[i] === 5) {
    stop();
  }
} */


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

//quick top
const top = document.querySelector('.quick');
window.addEventListener('scroll', () => {
  if (scrollY > 200) {
    top.classList.add('on');
  } else {
    top.classList.remove('on');
  }
});

//상품개수표시
const totalProduct = document.getElementById('total');
totalProduct.innerHTML = subData.length;