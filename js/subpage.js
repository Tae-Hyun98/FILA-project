import subData from "./sub_data.js";




const subProduct = document.querySelector('.list_wrap');
const productList = document.querySelector('.product_list');
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < subData.length; j++) {
    //서브 상품박스
    const subDiv = document.createElement('div');
    subDiv.setAttribute('class', 'product_box');

    const subImgBox = document.createElement('div');
    subImgBox.setAttribute('class', 'product_img');

    const imgLink = document.createElement('a');
    imgLink.setAttribute('href', "#!");
    subImgBox.appendChild(imgLink);

    const subImg = document.createElement('img');
    subImg.setAttribute('src', subData[j].src);
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
    const cateGoryText = document.createTextNode(subData[j].category);
    cateGory.appendChild(cateGoryText);

    //상품이름
    const productName = document.createElement('p');
    productName.setAttribute('class', 'product_name');
    detailLink.appendChild(productName);
    const nameText = document.createTextNode(subData[j].name);
    productName.appendChild(nameText);

    //상품가격
    const productPrice = document.createElement('p');
    productPrice.setAttribute('class', 'product_price');
    detailLink.appendChild(productPrice);
    const namePrice = document.createTextNode(subData[j].price + '원');
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
}

//상품3개, 4개보기버튼
const listCol = document.querySelector('.list_wrap');
const col3Btn = document.querySelector('.col3_btn');
const col4Btn = document.querySelector('.col4_btn');

col3Btn.addEventListener('click', () => {
  listCol.classList.add('col_3');
  listCol.classList.remove('col_4');
});
col4Btn.addEventListener('click', () => {
  listCol.classList.add('col_4');
  listCol.classList.remove('col_3');
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