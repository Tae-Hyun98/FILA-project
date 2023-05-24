// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/sub_data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var subData = [{
  id: 1,
  category: "공용 오버핏 라이프스타일",
  name: "헤리티지 세리프 로고 루즈핏 반팔티",
  price: 41000,
  src: "./img/Sub_img/01.jpg",
  review: 5,
  color: 'black'
}, {
  id: 2,
  category: "공용",
  name: "헤리티지 세리프 로고 루즈핏 반팔티",
  price: 12000,
  src: "./img/Sub_img/02.jpg",
  review: 9,
  color: 'white'
}, {
  id: 3,
  category: "공용",
  name: "FILATECH 아노락 하프 집업",
  price: 99000,
  src: "./img/Sub_img/03.jpg",
  review: 15,
  color: 'gray'
}, {
  id: 4,
  category: "공용 컴포트핏 러닝",
  name: "FILATECH 후드 경량자켓",
  price: 109000,
  src: "./img/Sub_img/04.jpg",
  review: 1,
  color: 'black'
}, {
  id: 5,
  category: "공용",
  name: "FILA ITALIA 반팔티셔츠",
  price: 32000,
  src: "./img/Sub_img/05.jpg",
  review: 20,
  color: 'white'
}, {
  id: 6,
  category: "공용",
  name: "FILA ITALIA 반팔티셔츠",
  price: 25000,
  src: "./img/Sub_img/06.jpg",
  review: 4,
  color: 'black'
}, {
  id: 7,
  category: "공용",
  name: "오버핏 코쿤 볼 패딩",
  price: 139000,
  src: "./img/Sub_img/07.jpg",
  review: 50,
  color: 'beige'
}, {
  id: 8,
  category: "공용",
  name: "스몰로고 맨투맨",
  price: 49000,
  src: "./img/Sub_img/08.jpg",
  review: 3,
  color: 'black'
}, {
  id: 9,
  category: "공용",
  name: "헤리티지 로고 후드",
  price: 69000,
  src: "./img/Sub_img/09.jpg",
  review: 49,
  color: 'gray'
}, {
  id: 10,
  category: "공용 레귤러핏 러닝",
  name: "FILA SPORTS 후디",
  price: 69000,
  src: "./img/Sub_img/10.jpg",
  review: 42,
  color: 'gray'
}, {
  id: 11,
  category: "공용",
  name: "FILATECH 아노락 하프 집업",
  price: 99000,
  src: "./img/Sub_img/11.jpg",
  review: 46,
  color: 'beige'
}, {
  id: 12,
  category: "공용",
  name: "노카라 퀄팅 자켓",
  price: 89000,
  src: "./img/Sub_img/12.jpg",
  review: 60,
  color: 'black'
}, {
  id: 13,
  category: "공용",
  name: "스몰로고 맨투맨",
  price: 59000,
  src: "./img/Sub_img/13.jpg",
  review: 20,
  color: 'gray'
}, {
  id: 14,
  category: "공용 라이프스타일",
  name: "컴포트핏 인터내셔널 와이드팬츠",
  price: 89000,
  src: "./img/Sub_img/14.jpg",
  review: 12,
  color: 'black'
}, {
  id: 15,
  category: "공용",
  name: "리버시블 후드 플리스",
  price: 109000,
  src: "./img/Sub_img/15.jpg",
  review: 1,
  color: 'beige'
}, {
  id: 16,
  category: "공용",
  name: "브이 배색 경량 자켓",
  price: 119000,
  src: "./img/Sub_img/16.jpg",
  review: 0,
  color: 'mix'
}, {
  id: 17,
  category: "공용 신상품",
  name: "FILA ITALIA 반팔티셔츠",
  price: 39000,
  src: "./img/Sub_img/17.jpg",
  review: 100,
  color: 'blue'
}, {
  id: 18,
  category: "남성 공용 신상품",
  name: "오버핏 코쿤 볼 패딩",
  price: 139000,
  src: "./img/Sub_img/18.jpg",
  review: 66,
  color: 'black'
}, {
  id: 19,
  category: "남성 공용 신상품",
  name: "오버핏 코쿤 볼 패딩",
  price: 139000,
  src: "./img/Sub_img/19.jpg",
  review: 56,
  color: 'white'
}, {
  id: 20,
  category: "공용 신상품",
  name: "<온라인 단독>헤리티지 세리프 루즈핏 반팔티",
  price: 38000,
  src: "./img/Sub_img/20.jpg",
  review: 17,
  color: 'navy'
}, {
  id: 21,
  category: "남성 신상품",
  name: "FILA ITALIA 반팔티셔츠",
  price: 32000,
  src: "./img/Sub_img/21.jpg",
  review: 2,
  color: 'orange'
}, {
  id: 22,
  category: "공용 신상품 라이프스타일",
  name: "핫써머 씨어서커 아노락 바람막이",
  price: 55000,
  src: "./img/Sub_img/22.jpg",
  review: 0,
  color: 'blue'
}];
var _default = subData;
exports.default = _default;
},{}],"js/subpage.js":[function(require,module,exports) {
"use strict";

var _sub_data = _interopRequireDefault(require("./sub_data.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var subProduct = document.querySelector('.list_wrap');
var productList = document.querySelector('.product_list');

//상품 순서 정렬
var filterSele = document.getElementById('order');
filterSele.addEventListener('change', function () {
  if (filterSele.value === 'name') {
    var name = _sub_data.default.sort(function (a, b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    }); //이름 오름차순
    priobj(name);
  } else if (filterSele.value === 'desc') {
    var desc = _sub_data.default.sort(function (a, b) {
      return a.price - b.price;
    }); //가격내림차순
    priobj(desc);
  } else if (filterSele.value === 'asc') {
    var asc = _sub_data.default.sort(function (a, b) {
      return b.price - a.price;
    }); //가격오름차순
    priobj(asc);
  } else if (filterSele.value === 'new') {
    var newProduct = _sub_data.default.sort(function (a, b) {
      return a.id > b.id ? -1 : a.id < b.id ? 1 : 0;
    }); //신상품
    priobj(newProduct);
  } else if (filterSele.value === 'review') {
    var review = _sub_data.default.sort(function (a, b) {
      return a.review > b.review ? -1 : a.review < b.review ? 1 : 0;
    }); //리뷰순정렬
    priobj(review);
  }
});

//가격정렬
var priceFilter = document.querySelectorAll('.price');
var price39000 = _sub_data.default.filter(function (pr39) {
  return pr39.price <= 39000;
});
var price49000 = _sub_data.default.filter(function (pr49) {
  return pr49.price > 39000 && pr49.price <= 49000;
});
var price59000 = _sub_data.default.filter(function (pr59) {
  return pr59.price > 49000 && pr59.price <= 59000;
});
var price69000 = _sub_data.default.filter(function (pr69) {
  return pr69.price > 59000 && pr69.price <= 79000;
});
var price79000 = _sub_data.default.filter(function (pr79) {
  return pr79.price > 79000;
});
for (var a = 0; a < priceFilter.length; a++) {
  priceFilter[a].addEventListener('click', function () {
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
      priobj(_sub_data.default);
    }
  });
}

//filter color check
var colorChk = document.querySelectorAll('.color');
var colorLabel = document.querySelectorAll('.color_filter label');
var _loop = function _loop(i) {
  colorChk[i].addEventListener('click', function () {
    if (colorChk[i].checked) {
      colorLabel[i].classList.add('on');
    } else {
      colorLabel[i].classList.remove('on');
    }
  });
};
for (var i = 0; i < colorChk.length; i++) {
  _loop(i);
}

//컬러필터
var white = _sub_data.default.filter(function (color01) {
  return color01.color === 'white';
});
var black = _sub_data.default.filter(function (color01) {
  return color01.color === 'black';
});
var gray = _sub_data.default.filter(function (color01) {
  return color01.color === 'gray';
});
var green = _sub_data.default.filter(function (color01) {
  return color01.color === 'green';
});
var blue = _sub_data.default.filter(function (color01) {
  return color01.color === 'blue';
});
var khaki = _sub_data.default.filter(function (color01) {
  return color01.color === 'khaki';
});
var mix = _sub_data.default.filter(function (color01) {
  return color01.color === 'mix';
});
var navy = _sub_data.default.filter(function (color01) {
  return color01.color === 'navy';
});
var neon = _sub_data.default.filter(function (color01) {
  return color01.color === 'neon';
});
var orange = _sub_data.default.filter(function (color01) {
  return color01.color === 'orange';
});
var pink = _sub_data.default.filter(function (color01) {
  return color01.color === 'pink';
});
var red = _sub_data.default.filter(function (color01) {
  return color01.color === 'red';
});
var beige = _sub_data.default.filter(function (color01) {
  return color01.color === 'beige';
});
var yellow = _sub_data.default.filter(function (color01) {
  return color01.color === 'yellow';
});
for (var _i = 0; _i < colorChk.length; _i++) {
  colorChk[_i].addEventListener('click', function () {
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
      priobj(khaki);
    } else if (colorChk[6].checked) {
      priobj(mix);
    } else if (colorChk[7].checked) {
      priobj(navy);
    } else if (colorChk[8].checked) {
      priobj(neon);
    } else if (colorChk[9].checked) {
      priobj(orange);
    } else if (colorChk[10].checked) {
      priobj(pink);
    } else if (colorChk[11].checked) {
      priobj(red);
    } else if (colorChk[12].checked) {
      priobj(beige);
    } else if (colorChk[13].checked) {
      priobj(yellow);
    } else {
      priobj(_sub_data.default);
    }
  });
}

//리스트 객체함수
function priobj(obj) {
  productList.innerHTML = '';
  for (var _i2 = 0; _i2 < obj.length; _i2++) {
    //서브 상품박스
    var subDiv = document.createElement('div');
    subDiv.setAttribute('class', 'product_box');
    var subImgBox = document.createElement('div');
    subImgBox.setAttribute('class', 'product_img');
    var imgLink = document.createElement('a');
    imgLink.setAttribute('href', "#!");
    subImgBox.appendChild(imgLink);
    var subImg = document.createElement('img');
    subImg.setAttribute('src', obj[_i2].src);
    imgLink.appendChild(subImg);
    var detailDiv = document.createElement('div');
    detailDiv.setAttribute('class', 'detail');
    var detailLink = document.createElement('a');
    detailLink.setAttribute('href', '#!');
    detailDiv.appendChild(detailLink);

    //상품박스 호버했을때
    var hoverDiv = document.createElement('div');
    hoverDiv.setAttribute('class', 'hover_box');
    subImgBox.appendChild(hoverDiv);
    var cartDiv = document.createElement('div');
    hoverDiv.appendChild(cartDiv);
    var cartSpan = document.createElement('span');
    cartSpan.setAttribute('class', 'material-icons-outlined');
    var cartText = document.createTextNode('shopping_cart');
    cartDiv.appendChild(cartSpan);
    cartSpan.appendChild(cartText);
    var likeDiv = document.createElement('div');
    hoverDiv.appendChild(likeDiv);
    var likeSpan = document.createElement('span');
    likeSpan.setAttribute('class', 'material-icons-outlined');
    var likeText = document.createTextNode('favorite');
    likeDiv.appendChild(likeSpan);
    likeSpan.appendChild(likeText);

    //카테고리
    var cateGory = document.createElement('p');
    cateGory.setAttribute('class', 'category');
    detailLink.appendChild(cateGory);
    var cateGoryText = document.createTextNode(obj[_i2].category);
    cateGory.appendChild(cateGoryText);

    //상품이름
    var productName = document.createElement('p');
    productName.setAttribute('class', 'product_name');
    detailLink.appendChild(productName);
    var nameText = document.createTextNode(obj[_i2].name);
    productName.appendChild(nameText);

    //상품가격
    var productPrice = document.createElement('p');
    productPrice.setAttribute('class', 'product_price');
    detailLink.appendChild(productPrice);
    var namePrice = document.createTextNode(obj[_i2].price.toLocaleString('ko-KR') + '원');
    productPrice.appendChild(namePrice);

    //리뷰수
    var reviSpan = document.createElement('span');
    var reviCount = document.createTextNode('★(' + obj[_i2].review + ')');
    productPrice.appendChild(reviSpan);
    reviSpan.appendChild(reviCount);

    //BUY버튼
    var buyDiv = document.createElement('div');
    buyDiv.setAttribute('class', 'buy_btn');
    detailDiv.appendChild(buyDiv);
    var buyA = document.createElement('a');
    buyA.setAttribute('href', '#!');
    buyDiv.appendChild(buyA);
    var buyText = document.createTextNode('BUY');
    buyA.appendChild(buyText);
    subDiv.appendChild(subImgBox);
    subDiv.appendChild(detailDiv);
    productList.appendChild(subDiv);
    subProduct.appendChild(productList);
  }
}
priobj(_sub_data.default);

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
var listCol = document.querySelector('.list_wrap');
var col4Btn = document.querySelector('.col4_btn');
var col5Btn = document.querySelector('.col5_btn');
col4Btn.addEventListener('click', function () {
  listCol.classList.add('col_4');
  listCol.classList.remove('col_5');
});
col5Btn.addEventListener('click', function () {
  listCol.classList.add('col_5');
  listCol.classList.remove('col_4');
});

//스크롤시 헤더
var scr = document.querySelector('.scroll');
window.addEventListener("wheel", function (e) {
  var scrollUp = e.deltaY <= 0;
  var scrollDown = e.deltaY > 0;
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
window.addEventListener("scroll", function () {
  if (scrollY === 0) {
    scr.classList.remove('scr_up');
    scr.classList.remove('scr_down');
  }
});

//lnb마우스호버시
var li = document.querySelectorAll('.header .lnb>ul>li');
for (var _i3 = 0; _i3 < li.length; _i3++) {
  li[_i3].addEventListener("mouseover", function (e) {
    scr.classList.add('bg_on');
  });
  li[_i3].addEventListener("mouseout", function (e) {
    scr.classList.remove('bg_on');
  });
}

//검색버튼 클릭시 검색창
var searchOpen = document.getElementById('search');
var searchClose = document.getElementById('close');
searchOpen.addEventListener('click', function () {
  scr.classList.add('search_on');
});
searchClose.addEventListener('click', function () {
  scr.classList.remove('search_on');
});

//필터클릭시 아래로 필터다운
var filterBtn = document.querySelector('.filter_btn a');
var filterSpan = document.querySelector('.filter_btn >a>span');
var filterDown = document.querySelector('.filter_down');
var state = 0;
filterBtn.addEventListener('click', function () {
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
var sportChk = document.querySelectorAll('.sport');
var sportLabel = document.querySelectorAll('.sport_filter label');
var _loop2 = function _loop2(_i4) {
  sportChk[_i4].addEventListener('click', function () {
    if (sportChk[_i4].checked) {
      sportLabel[_i4].style.color = '#000';
      sportLabel[_i4].style.fontWeight = '700';
    } else {
      sportLabel[_i4].style.color = '#777';
      sportLabel[_i4].style.fontWeight = '400';
    }
  });
};
for (var _i4 = 0; _i4 < sportChk.length; _i4++) {
  _loop2(_i4);
}

//filter size check
var sizeChk = document.querySelectorAll('.size');
var sizeLabel = document.querySelectorAll('.size_filter label');
var _loop3 = function _loop3(_i5) {
  sizeChk[_i5].addEventListener('click', function () {
    if (sizeChk[_i5].checked) {
      sizeLabel[_i5].style.color = '#fff';
      sizeLabel[_i5].style.backgroundColor = '#002053';
    } else {
      sizeLabel[_i5].style.color = '#000';
      sizeLabel[_i5].style.backgroundColor = '#fff';
    }
  });
};
for (var _i5 = 0; _i5 < sizeChk.length; _i5++) {
  _loop3(_i5);
}

//filter price check
var priceChk = document.querySelectorAll('.price');
var priceLabel = document.querySelectorAll('.price_filter label');
var _loop4 = function _loop4(_i6) {
  priceChk[_i6].addEventListener('click', function () {
    if (priceChk[_i6].checked) {
      priceLabel[_i6].style.color = '#000';
      priceLabel[_i6].style.fontWeight = '700';
    } else {
      priceLabel[_i6].style.color = '#777';
      priceLabel[_i6].style.fontWeight = '400';
    }
  });
};
for (var _i6 = 0; _i6 < priceChk.length; _i6++) {
  _loop4(_i6);
}

//filter gender check
var genderChk = document.querySelectorAll('.gender');
var genderLabel = document.querySelectorAll('.gender_filter label');
var _loop5 = function _loop5(_i7) {
  genderChk[_i7].addEventListener('click', function () {
    if (genderChk[_i7].checked) {
      genderLabel[_i7].style.color = '#000';
      genderLabel[_i7].style.fontWeight = '700';
    } else {
      genderLabel[_i7].style.color = '#777';
      genderLabel[_i7].style.fontWeight = '400';
    }
  });
};
for (var _i7 = 0; _i7 < genderChk.length; _i7++) {
  _loop5(_i7);
}

//footer family
var familySite = document.getElementById('family_site');
familySite.addEventListener('change', function (e) {
  var options = e.currentTarget.options;
  var optionIndex = options.selectedIndex;
  var openNewWindow = window.open('about:blank');
  openNewWindow.location.href = options[optionIndex].value;
});

//상품개수표시
var totalProduct = document.getElementById('total');
totalProduct.innerHTML = _sub_data.default.length;

//탑,바텀버튼
var topBtn = document.querySelector('.top');
var bottomBtn = document.querySelector('.bottom');
window.addEventListener('scroll', function () {
  if (window.scrollY > 300 && window.scrollY < 3500) {
    gsap.to(bottomBtn, 0.1, {
      opacity: 1,
      visibility: 'visible'
    });
    gsap.to(topBtn, 0.1, {
      opacity: 0,
      visibility: 'hidden'
    });
  } else if (window.scrollY >= 3500) {
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
topBtn.addEventListener('click', function () {
  gsap.to(window, 0.5, {
    scrollTo: 0
  });
});
bottomBtn.addEventListener('click', function () {
  gsap.to(window, 0.5, {
    scrollTo: 7000
  });
});
},{"./sub_data.js":"js/sub_data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56045" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/subpage.js"], null)
//# sourceMappingURL=/subpage.75add7d0.js.map