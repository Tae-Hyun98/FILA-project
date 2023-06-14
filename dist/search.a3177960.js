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
exports.subData = exports.color = void 0;
var color = ['white', 'black', 'gray', 'green', 'blue', 'mix', 'navy', 'orange', 'red', 'beige'];
exports.color = color;
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
  category: "공용 라이프스타일",
  name: "FILA CLASSIC 기모맨투맨",
  price: 69000,
  src: "./img/Sub_img/39.jpg",
  review: 120,
  color: 'black'
}, {
  id: 18,
  category: "남성 공용",
  name: "오버핏 코쿤 볼 패딩",
  price: 139000,
  src: "./img/Sub_img/18.jpg",
  review: 66,
  color: 'black'
}, {
  id: 19,
  category: "남성 공용",
  name: "오버핏 코쿤 볼 패딩",
  price: 139000,
  src: "./img/Sub_img/19.jpg",
  review: 56,
  color: 'white'
}, {
  id: 20,
  category: "공용 신상품",
  name: "FILA ITALIA 반팔티셔츠",
  price: 39000,
  src: "./img/Sub_img/17.jpg",
  review: 100,
  color: 'blue'
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
}, {
  id: 23,
  category: "공용 신상품",
  name: "노카라 퀄팅 자켓",
  price: 89000,
  src: "./img/Sub_img/25.jpg",
  review: 10,
  color: 'green'
}, {
  id: 24,
  category: "공용 신상품 라이프스타일",
  name: "<온라인 단독>컬러블럭킹 아노락",
  price: 109000,
  src: "./img/Sub_img/28.jpg",
  review: 4,
  color: 'mix'
}, {
  id: 25,
  category: "공용 신상품 테니스",
  name: "<온라인 단독>Fila tennis 하프팬츠",
  price: 59000,
  src: "./img/Sub_img/29.jpg",
  review: 14,
  color: 'green'
}, {
  id: 26,
  category: "남성 신상품 테니스",
  name: "글로벌 패턴 반바지",
  price: 65000,
  src: "./img/Sub_img/44.jpg",
  review: 10,
  color: 'blue'
}, {
  id: 27,
  category: "공용 신상품",
  name: "<온라인 단독>헤리티지 세리프 루즈핏 반팔티",
  price: 38000,
  src: "./img/Sub_img/20.jpg",
  review: 17,
  color: 'navy'
}, {
  id: 28,
  category: "공용 라이프스타일 신상품",
  name: "헤리티지 오버핏 케이블 가디건",
  price: 139000,
  src: "./img/Sub_img/40.jpg",
  review: 12,
  color: 'navy'
}, {
  id: 29,
  category: "공용 신상품",
  name: "오버핏 인터내셔널 바람막이",
  price: 149000,
  src: "./img/Sub_img/42.jpg",
  review: 1,
  color: 'white'
}, {
  id: 30,
  category: "남성 테니스 신상품",
  name: "글로벌 라인 반팔티",
  price: 65000,
  src: "./img/Sub_img/45.jpg",
  review: 0,
  color: 'white'
}, {
  id: 31,
  category: "남성 공용",
  name: "오버핏 코쿤 볼 패딩",
  price: 139000,
  src: "./img/Sub_img/18.jpg",
  review: 66,
  color: 'black'
}, {
  id: 32,
  category: "남성 공용",
  name: "오버핏 코쿤 볼 패딩",
  price: 139000,
  src: "./img/Sub_img/19.jpg",
  review: 56,
  color: 'white'
}, {
  id: 33,
  category: "공용 신상품",
  name: "FILA ITALIA 반팔티셔츠",
  price: 39000,
  src: "./img/Sub_img/17.jpg",
  review: 100,
  color: 'blue'
}, {
  id: 34,
  category: "남성 신상품",
  name: "FILA ITALIA 반팔티셔츠",
  price: 32000,
  src: "./img/Sub_img/21.jpg",
  review: 2,
  color: 'orange'
}, {
  id: 35,
  category: "공용 신상품 라이프스타일",
  name: "핫써머 씨어서커 아노락 바람막이",
  price: 55000,
  src: "./img/Sub_img/22.jpg",
  review: 0,
  color: 'blue'
}, {
  id: 36,
  category: "공용 신상품",
  name: "노카라 퀄팅 자켓",
  price: 89000,
  src: "./img/Sub_img/25.jpg",
  review: 10,
  color: 'green'
}, {
  id: 37,
  category: "공용 컴포트핏 러닝",
  name: "FILATECH 후드 경량자켓",
  price: 109000,
  src: "./img/Sub_img/04.jpg",
  review: 1,
  color: 'black'
}, {
  id: 38,
  category: "공용",
  name: "FILA ITALIA 반팔티셔츠",
  price: 32000,
  src: "./img/Sub_img/05.jpg",
  review: 20,
  color: 'white'
}, {
  id: 39,
  category: "공용",
  name: "FILA ITALIA 반팔티셔츠",
  price: 25000,
  src: "./img/Sub_img/06.jpg",
  review: 4,
  color: 'black'
}, {
  id: 40,
  category: "공용",
  name: "오버핏 코쿤 볼 패딩",
  price: 139000,
  src: "./img/Sub_img/07.jpg",
  review: 50,
  color: 'beige'
}, {
  id: 41,
  category: "공용",
  name: "스몰로고 맨투맨",
  price: 49000,
  src: "./img/Sub_img/08.jpg",
  review: 3,
  color: 'black'
}, {
  id: 42,
  category: "공용",
  name: "헤리티지 로고 후드",
  price: 69000,
  src: "./img/Sub_img/09.jpg",
  review: 49,
  color: 'gray'
}, {
  id: 43,
  category: "공용 레귤러핏 러닝",
  name: "FILA SPORTS 후디",
  price: 69000,
  src: "./img/Sub_img/10.jpg",
  review: 42,
  color: 'gray'
}, {
  id: 44,
  category: "공용",
  name: "FILATECH 아노락 하프 집업",
  price: 99000,
  src: "./img/Sub_img/11.jpg",
  review: 46,
  color: 'beige'
}, {
  id: 45,
  category: "남성 레귤러핏 테니스",
  name: "테니스 퍼포먼스 헨리넥 반팔티셔츠",
  price: 59000,
  src: "./img/Sub_img/53.jpg",
  review: 0,
  color: 'white'
}, {
  id: 46,
  category: "남녀공용 테니스",
  name: "Fila tennis 레터링 반팔티셔츠",
  price: 35000,
  src: "./img/Sub_img/54.jpg",
  review: 0,
  color: 'navy'
}, {
  id: 47,
  category: "남녀공용 라이프스타일",
  name: "Sportslife 져지 하프팬츠",
  price: 62000,
  src: "./img/Sub_img/55.jpg",
  review: 2,
  color: 'gray'
}, {
  id: 48,
  category: "남녀공용 라이프스타일",
  name: "Sportslife 하프팬츠",
  price: 59000,
  src: "./img/Sub_img/56.jpg",
  review: 2,
  color: 'navy'
}, {
  id: 49,
  category: "남녀공용 테니스 신상품",
  name: "테니스 라이프 반바지",
  price: 69000,
  src: "./img/Sub_img/57.jpg",
  review: 0,
  color: 'navy'
}, {
  id: 50,
  category: "남녀공용 컴포트핏 신상품",
  name: "인터내셔널 반팔 카라티",
  price: 69000,
  src: "./img/Sub_img/58.jpg",
  review: 0,
  color: 'blue'
}, {
  id: 51,
  category: "남녀공용 컴포트핏 신상품",
  name: "인터내셔널 그래픽 반팔티",
  price: 49000,
  src: "./img/Sub_img/59.jpg",
  review: 0,
  color: 'white'
}, {
  id: 52,
  category: "남녀공용 레귤러핏 신상품",
  name: "페스타 그래픽 티셔츠",
  price: 49000,
  src: "./img/Sub_img/60.jpg",
  review: 1,
  color: 'orange'
}, {
  id: 53,
  category: "남성 컴포트핏 신상품",
  name: "핫써머 모노그램 나시티",
  price: 49000,
  src: "./img/Sub_img/61.jpg",
  review: 1,
  color: 'mix'
}, {
  id: 54,
  category: "남성 레귤러핏 트레이닝",
  name: "퍼포먼스 PQ스판 반팔티셔츠",
  price: 59000,
  src: "./img/Sub_img/62.jpg",
  review: 0,
  color: 'red'
}, {
  id: 55,
  category: "남녀공용 컴포트핏 테니스",
  name: "테니스 라이프 카라티셔츠",
  price: 89000,
  src: "./img/Sub_img/63.jpg",
  review: 1,
  color: 'green'
}, {
  id: 56,
  category: "남성 레귤러핏 테니스 신상품",
  name: "테니스 퍼포먼스 스트레치 반바지",
  price: 59000,
  src: "./img/Sub_img/64.jpg",
  review: 0,
  color: 'green'
}];
exports.subData = subData;
},{}],"js/search.js":[function(require,module,exports) {
"use strict";

var _sub_data = require("./sub_data.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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

//상품개수표시
var totalProduct = document.getElementById('total');
totalProduct.innerHTML = _sub_data.subData.length;

//카테고리 클릭시 on
var allLi = document.querySelectorAll('.all_filter ul li');
allLi.forEach(function (value, idx) {
  value.addEventListener('click', function () {
    var _iterator = _createForOfIteratorHelper(allLi),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var el = _step.value;
        el.classList.remove('on');
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    allLi[idx].classList.add('on');
  });
});

/* const colorbox = document.querySelectorAll('.color');
colorbox.forEach((item, idx) => {
  item.setAttribute('value', color[idx])
  item.addEventListener('click', (e) => {
    if (colorbox[idx].checked) {

      e.preventDefault();
      let aa = e.currentTarget.value;

      const ab = subData.filter((ac) => ac.color === aa)
      console.log(ab)
    }

  })
}) */

//filter check
var sportChk = document.querySelectorAll('.sport');
var sportLabel = document.querySelectorAll('.sport_filter label');
//filter price check
var priceChk = document.querySelectorAll('.price');
var priceLabel = document.querySelectorAll('.price_filter label');
//filter gender check
var genderChk = document.querySelectorAll('.gender');
var genderLabel = document.querySelectorAll('.gender_filter label');
filterChk(sportChk, sportLabel);
filterChk(priceChk, priceLabel);
filterChk(genderChk, genderLabel);

//체크시 컬러와 폰트바꾸는 함수
function filterChk(obj, label) {
  obj.forEach(function (item, idx) {
    item.addEventListener('click', function () {
      if (item.checked) {
        label[idx].style.color = '#000';
        label[idx].style.fontWeight = '700';
      } else {
        label[idx].style.color = '#777';
        label[idx].style.fontWeight = '400';
      }
    });
  });
}

//filter size check
var sizeChk = document.querySelectorAll('.size');
var sizeLabel = document.querySelectorAll('.size_filter label');
var _loop = function _loop(i) {
  sizeChk[i].addEventListener('click', function () {
    if (sizeChk[i].checked) {
      sizeLabel[i].style.color = '#fff';
      sizeLabel[i].style.backgroundColor = '#002053';
    } else {
      sizeLabel[i].style.color = '#000';
      sizeLabel[i].style.backgroundColor = '#fff';
    }
  });
};
for (var i = 0; i < sizeChk.length; i++) {
  _loop(i);
}
var subProduct = document.querySelector('.list_wrap');
var productList = document.querySelector('.product_list');

//상품 순서 정렬
var filterSele = document.getElementById('order');
filterSele.addEventListener('change', function () {
  if (filterSele.value === 'name') {
    var name = _sub_data.subData.sort(function (a, b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    }); //이름 오름차순
    filter(name);
  } else if (filterSele.value === 'desc') {
    var desc = _sub_data.subData.sort(function (a, b) {
      return a.price - b.price;
    }); //가격내림차순
    filter(desc);
  } else if (filterSele.value === 'asc') {
    var asc = _sub_data.subData.sort(function (a, b) {
      return b.price - a.price;
    }); //가격오름차순
    filter(asc);
  } else if (filterSele.value === 'new') {
    var basic = _sub_data.subData.sort(function (a, b) {
      return b.id - a.id;
    });
    filter(basic);
  } else if (filterSele.value === 'review') {
    var review = _sub_data.subData.slice().sort(function (a, b) {
      return a.review > b.review ? -1 : a.review < b.review ? 1 : 0;
    }); //리뷰순정렬
    filter(review);

    /* colorChk.forEach((item) => {
      item.addEventListener('change', (e) => {
        e.preventDefault();
        let ad = e.currentTarget.value;
        let colorfil = subData.filter((color1) => color1.color === ad)
        const ap = arr.filter((color1) => color1.color === ad).sort((a, b) => a.review > b.review ? -1 : a.review < b.review ? 1 : 0);
        if (item.checked) {
          arr.push(...ap)
          const review1 = arr.sort((a, b) => a.review > b.review ? -1 : a.review < b.review ? 1 : 0);
            filter(ap)
        } else {
          arr.splice(ap, ap.length)
        }
      })
    }) */
  }
});

//가격정렬
var priceFilter = document.querySelectorAll('.price');
var price39000 = _sub_data.subData.filter(function (pr39) {
  return pr39.price <= 39000;
});
var price49000 = _sub_data.subData.filter(function (pr49) {
  return pr49.price > 39000 && pr49.price <= 49000;
});
var price59000 = _sub_data.subData.filter(function (pr59) {
  return pr59.price > 49000 && pr59.price <= 59000;
});
var price69000 = _sub_data.subData.filter(function (pr69) {
  return pr69.price > 59000 && pr69.price <= 79000;
});
var price79000 = _sub_data.subData.filter(function (pr79) {
  return pr79.price > 79000;
});
priceFilter.forEach(function (price, idx) {
  price.addEventListener('click', function () {
    if (price.checked) {
      switch (idx) {
        case 0:
          filter(price39000);
          break;
        case 1:
          filter(price49000);
          break;
        case 2:
          filter(price59000);
          break;
        case 3:
          filter(price69000);
          break;
        case 4:
          filter(price79000);
          break;
      }
    } else {
      filter(_sub_data.subData);
    }
  });
});

//filter color check
var colorChk = document.querySelectorAll('.color');
var colorLabel = document.querySelectorAll('.color_filter label');

//컬러필터
function makefilter() {
  var arr = [];
  colorChk.forEach(function (item, idx) {
    item.setAttribute('value', _sub_data.color[idx]);
    item.addEventListener('change', function (e) {
      e.preventDefault();
      var ad = e.currentTarget.value;
      var colorfil = _sub_data.subData.filter(function (color1) {
        return color1.color === ad;
      });
      if (item.checked) {
        arr.push.apply(arr, _toConsumableArray(colorfil));
        filter(arr);
        colorLabel[idx].classList.add('on');
        filterSele.addEventListener('change', function () {
          if (filterSele.value === 'name') {
            var name = arr.slice().sort(function (a, b) {
              return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            }); //이름 오름차순
            filter(name);
          } else if (filterSele.value === 'desc') {
            var desc = arr.slice().sort(function (a, b) {
              return a.price - b.price;
            }); //가격내림차순
            filter(desc);
          } else if (filterSele.value === 'asc') {
            var asc = arr.slice().sort(function (a, b) {
              return b.price - a.price;
            }); //가격오름차순
            filter(asc);
          } else if (filterSele.value === 'new') {
            var basic = arr.slice().sort(function (a, b) {
              return b.id - a.id;
            });
            filter(basic);
          } else if (filterSele.value === 'review') {
            var review = arr.slice().sort(function (a, b) {
              return a.review > b.review ? -1 : a.review < b.review ? 1 : 0;
            }); //리뷰순정렬
            filter(review);
          }
        });
      } else {
        colorLabel[idx].classList.remove('on');
        arr.splice(colorfil, colorfil.length);
        if (arr.length === 0) {
          filter(_sub_data.subData);
        } else if (arr.length !== 0) {
          filter(arr);
        }
      }
    });
  });
}
makefilter();
function filter(value) {
  currentPage = 0;
  paginationFunc(value);
}

//컬러필터
// const white = subData.filter((Color) => Color.color === 'white');
// const black = subData.filter((Color) => Color.color === 'black');
// const gray = subData.filter((Color) => Color.color === 'gray');
// const green = subData.filter((Color) => Color.color === 'green');
// const blue = subData.filter((Color) => Color.color === 'blue');
// const mix = subData.filter((Color) => Color.color === 'mix');
// const navy = subData.filter((Color) => Color.color === 'navy');
// const orange = subData.filter((Color) => Color.color === 'orange');
// const red = subData.filter((Color) => Color.color === 'red');
// const beige = subData.filter((Color) => Color.color === 'beige');

// function colorFilter() {
//   colorChk.forEach((color) => {
//     color.addEventListener('click', () => {
//       if (colorChk[0].checked) {
//         filter(white);
//       } else if (colorChk[1].checked) {
//         currentPage = 0;
//         paginationFunc(black);
//       } else if (colorChk[2].checked) {
//         currentPage = 0;
//         paginationFunc(gray);
//       } else if (colorChk[3].checked) {
//         currentPage = 0;
//         paginationFunc(green);
//       } else if (colorChk[4].checked) {
//         currentPage = 0;
//         paginationFunc(blue);
//       } else if (colorChk[5].checked) {
//         currentPage = 0;
//         paginationFunc(mix);
//       } else if (colorChk[6].checked) {
//         currentPage = 0;
//         paginationFunc(navy);
//       } else if (colorChk[7].checked) {
//         currentPage = 0;
//         paginationFunc(orange);
//       } else if (colorChk[8].checked) {
//         currentPage = 0;
//         paginationFunc(red);
//       } else if (colorChk[9].checked) {
//         currentPage = 0;
//         paginationFunc(beige);
//       } else {
//         currentPage = 0;
//         paginationFunc(subData);
//       }
//     });
//   })
// }
// colorFilter();

var pages = document.getElementById('pages');
var currentPage = 0;

//페이지네이션 생성함수
function paginationFunc(obj) {
  var onePage = 20; //한페이지에뜰 상품
  var totalItem = obj.length;
  if (totalItem <= onePage) {
    priobj(obj);
  }
  var startIndex = currentPage * onePage;
  var endIndex = startIndex + onePage;
  var pageData = obj.slice(startIndex, endIndex);
  var totalPage = Math.ceil(obj.length / onePage);
  priobj(pageData);

  //페이지네이션 이전,다음 숫자버튼생성
  var pagination = '';
  if (currentPage >= 0) {
    pagination += "<a href=\"#!\" class=\"first_prev\"><<</a>";
  }
  if (currentPage >= 0) {
    pagination += "<a href=\"#!\" class=\"prev\"><</a>";
  }
  for (var _i = 1; _i <= totalPage; _i++) {
    pagination += "<a href=\"#!\" class=\"pg\">".concat(_i, "</a>");
  }
  if (currentPage <= totalPage - 1) {
    pagination += "<a href=\"#!\" class=\"next\">></a>";
  }
  if (currentPage <= totalPage - 1) {
    pagination += "<a href=\"#!\" class=\"last_next\">>></a>";
  }
  pages.innerHTML = pagination;
  var pageBtn = document.querySelectorAll('.pg');
  var firstBtn = document.querySelector('.first_prev');
  var lastBtn = document.querySelector('.last_next');
  var prevBtn = document.querySelector('.prev');
  var nextBtn = document.querySelector('.next');

  //페이지네이션에 버튼클릭시 이동과 active부여
  pageBtn.forEach(function (item, idx) {
    item.addEventListener('click', function () {
      var _iterator2 = _createForOfIteratorHelper(pageBtn),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var pp = _step2.value;
          pp.classList.remove('active');
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (currentPage !== idx) {
        currentPage = idx;
        paginationFunc(obj);
      }
    });
    if (currentPage === idx) {
      pageBtn[idx].classList.add('active');
    }
  });

  //이전버튼, 처음으로버튼
  if (currentPage > 0) {
    prevBtn.addEventListener('click', function () {
      currentPage--;
      paginationFunc(obj);
    });
    firstBtn.addEventListener('click', function () {
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
    nextBtn.addEventListener('click', function () {
      currentPage++;
      paginationFunc(obj);
    });
    lastBtn.addEventListener('click', function () {
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
  for (var _i2 = 0; _i2 < obj.length; _i2++) {
    //서브 상품박스
    var subDiv = document.createElement('div');
    subDiv.setAttribute('class', 'product_box');
    var subImgBox = document.createElement('div');
    subImgBox.setAttribute('class', 'product_img');
    var imgLink = document.createElement('a');
    imgLink.setAttribute('href', './detail.html');
    subImgBox.appendChild(imgLink);
    var subImg = document.createElement('img');
    subImg.setAttribute('src', obj[_i2].src);
    imgLink.appendChild(subImg);
    var detailDiv = document.createElement('div');
    detailDiv.setAttribute('class', 'detail');
    var detailLink = document.createElement('a');
    detailLink.setAttribute('href', './detail.html');
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
    subProduct.append(pages);
  }
}
var localData = JSON.parse(localStorage.getItem('result'));
var words = localStorage.getItem('word');
console.log(localData);
if (localData === '' || localData.length === 0) {
  productList.innerHTML = "<h1>\uAC80\uC0C9\uACB0\uACFC \uD574\uB2F9\uD558\uB294 \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</h1>";
} else {
  paginationFunc(localData);
}
var count = document.querySelector('.count');
count.innerHTML = localData.length;
var word = document.querySelector('.word');
word.innerHTML = words;
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64883" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/search.js"], null)
//# sourceMappingURL=/search.a3177960.js.map