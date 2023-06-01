import subData from "./sub_data.js";

const subProduct = document.querySelector('.list_wrap');
const productList = document.querySelector('.product_list');

//상품 순서 정렬
const filterSele = document.getElementById('order');

filterSele.addEventListener('change', () => {
  if (filterSele.value === 'name') {
    const name = subData.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0); //이름 오름차순
    currentPage = 0;
    paginationFunc(name);
  } else if (filterSele.value === 'desc') {
    const desc = subData.sort((a, b) => a.price - b.price); //가격내림차순
    currentPage = 0;
    paginationFunc(desc);
  } else if (filterSele.value === 'asc') {
    const asc = subData.sort((a, b) => b.price - a.price); //가격오름차순
    currentPage = 0;
    paginationFunc(asc);
  } else if (filterSele.value === 'new') {
    const newProduct = subData.sort((a, b) => a.id > b.id ? -1 : a.id < b.id ? 1 : 0); //신상품
    currentPage = 0;
    paginationFunc(newProduct);
  } else if (filterSele.value === 'review') {
    const review = subData.sort((a, b) => a.review > b.review ? -1 : a.review < b.review ? 1 : 0); //리뷰순정렬
    currentPage = 0;
    paginationFunc(review);
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
      currentPage = 0;
      paginationFunc(price39000);
    } else if (priceFilter[1].checked) {
      currentPage = 0;
      paginationFunc(price49000);
    } else if (priceFilter[2].checked) {
      currentPage = 0;
      paginationFunc(price59000);
    } else if (priceFilter[3].checked) {
      currentPage = 0;
      paginationFunc(price69000);
    } else if (priceFilter[4].checked) {
      currentPage = 0;
      paginationFunc(price79000);
    } else {
      currentPage = 0;
      paginationFunc(subData);
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

colorChk.forEach((color) => {
  color.addEventListener('click', () => {
    if (colorChk[0].checked) {
      currentPage = 0;
      paginationFunc(white)
    } else if (colorChk[1].checked) {
      currentPage = 0;
      paginationFunc(black);
    } else if (colorChk[2].checked) {
      currentPage = 0;
      paginationFunc(gray);
    } else if (colorChk[3].checked) {
      currentPage = 0;
      paginationFunc(green);
    } else if (colorChk[4].checked) {
      currentPage = 0;
      paginationFunc(blue);
    } else if (colorChk[5].checked) {
      currentPage = 0;
      paginationFunc(mix);
    } else if (colorChk[6].checked) {
      currentPage = 0;
      paginationFunc(navy);
    } else if (colorChk[7].checked) {
      currentPage = 0;
      paginationFunc(orange);
    } else if (colorChk[8].checked) {
      currentPage = 0;
      paginationFunc(red);
    } else if (colorChk[9].checked) {
      currentPage = 0;
      paginationFunc(beige);
    } else {
      currentPage = 0;
      paginationFunc(subData);
    }
  });
})


const pages = document.getElementById('pages');
let currentPage = 0;

//페이지네이션 생성함수
function paginationFunc(obj) {
  subData.reverse();
  const onePage = 20; //한페이지에뜰 상품

  const totalItem = obj.length;
  if (totalItem <= onePage) {
    priobj(obj);
  }

  const startIndex = currentPage * onePage;
  const endIndex = startIndex + onePage;
  const pageData = obj.slice(startIndex, endIndex);
  const totalPage = Math.ceil(obj.length / onePage);
  priobj(pageData);

  //페이지네이션 이전,다음 숫자버튼생성
  let pagination = '';

  if (currentPage >= 0) {
    pagination += `<a href="#!" class="first_prev"><<</a>`;
  }

  if (currentPage >= 0) {
    pagination += `<a href="#!" class="prev"><</a>`;
  }

  for (let i = 1; i <= totalPage; i++) {
    pagination += `<a href="#!" class="pg">${i}</a>`
  }

  if (currentPage <= totalPage - 1) {
    pagination += `<a href="#!" class="next">></a>`;
  }

  if (currentPage <= totalPage - 1) {
    pagination += `<a href="#!" class="last_next">>></a>`;
  }

  pages.innerHTML = pagination;

  const pageBtn = document.querySelectorAll('.pg');
  const firstBtn = document.querySelector('.first_prev');
  const lastBtn = document.querySelector('.last_next');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  //페이지네이션에 버튼클릭시 이동과 active부여
  pageBtn.forEach((item, idx) => {
    item.addEventListener('click', () => {
      for (let pp of pageBtn) {
        pp.classList.remove('active')
      }
      if (currentPage !== idx) {
        currentPage = idx
        paginationFunc(obj)
      }

    })
    if (currentPage === idx) {
      pageBtn[idx].classList.add('active');
    }
  })


  //이전버튼, 처음으로버튼
  if (currentPage > 0) {
    prevBtn.addEventListener('click', () => {
      currentPage--;
      paginationFunc(obj)
    });

    firstBtn.addEventListener('click', () => {
      currentPage = 0;
      paginationFunc(obj);
    });

    prevBtn.classList.remove('disable');
    firstBtn.classList.remove('disable');
  } else {
    prevBtn.classList.add('disable');
    firstBtn.classList.add('disable');
  }


  //다음버튼, 마지막으로버튼
  if (currentPage < totalPage - 1) {
    nextBtn.addEventListener('click', () => {
      currentPage++;
      paginationFunc(obj)
    })

    lastBtn.addEventListener('click', () => {
      currentPage = totalPage - 1;
      paginationFunc(obj);
    });

    nextBtn.classList.remove('disable');
    lastBtn.classList.remove('disable');
  } else {
    nextBtn.classList.add('disable');
    lastBtn.classList.add('disable');
  }

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
    imgLink.setAttribute('href', './detail.html');
    subImgBox.appendChild(imgLink);

    const subImg = document.createElement('img');
    subImg.setAttribute('src', obj[i].src);
    imgLink.appendChild(subImg);

    const detailDiv = document.createElement('div');
    detailDiv.setAttribute('class', 'detail');

    const detailLink = document.createElement('a');
    detailLink.setAttribute('href', './detail.html');
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
    subProduct.append(pages)
  }
}

paginationFunc(subData);





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


//상품개수표시
const totalProduct = document.getElementById('total');
totalProduct.innerHTML = subData.length;


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
