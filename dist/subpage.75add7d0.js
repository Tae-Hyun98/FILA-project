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
  id: "data01",
  category: "공용 오버핏 라이프스타일",
  name: "헤리티지 세리프 로고 루즈핏 반팔티",
  price: "32,000",
  src: "../img/Sub_img/01.jpg"
}, {
  id: "data02",
  category: "공용",
  name: "헤리티지 세리프 로고 루즈핏 반팔티",
  price: "32,000",
  src: "../img/Sub_img/02.jpg"
}, {
  id: "data03",
  category: "공용",
  name: "FILATECH 아노락 하프 집업",
  price: "99,000",
  src: "../img/Sub_img/03.jpg"
}, {
  id: "data04",
  category: "공용 컴포트핏 러닝",
  name: "FILATECH 후드 경량자켓",
  price: "109,000",
  src: "../img/Sub_img/04.jpg"
}, {
  id: "data05",
  category: "공용",
  name: "FILA ITALIA 반팔티셔츠",
  price: "32,000",
  src: "../img/Sub_img/05.jpg"
}, {
  id: "data06",
  category: "공용",
  name: "FILA ITALIA 반팔티셔츠",
  price: "32,000",
  src: "../img/Sub_img/06.jpg"
}, {
  id: "data07",
  category: "공용",
  name: "오버핏 코쿤 볼 패딩",
  price: "139,000",
  src: "../img/Sub_img/07.jpg"
}, {
  id: "data08",
  category: "공용",
  name: "스몰로고 맨투맨",
  price: "59,000",
  src: "../img/Sub_img/08.jpg"
}, {
  id: "data09",
  category: "공용",
  name: "헤리티지 로고 후드",
  price: "69,000",
  src: "../img/Sub_img/09.jpg"
}, {
  id: "data10",
  category: "공용 레귤러핏 러닝",
  name: "FILA SPORTS 후디",
  price: "69,000",
  src: "../img/Sub_img/10.jpg"
}, {
  id: "data11",
  category: "공용",
  name: "FILATECH 아노락 하프 집업",
  price: "99,000",
  src: "../img/Sub_img/11.jpg"
}, {
  id: "data12",
  category: "공용",
  name: "노카라 퀄팅 자켓",
  price: "89,000",
  src: "../img/Sub_img/12.jpg"
}, {
  id: "data13",
  category: "공용",
  name: "스몰로고 맨투맨",
  price: "59,000",
  src: "../img/Sub_img/13.jpg"
}, {
  id: "data14",
  category: "공용 라이프스타일",
  name: "컴포트핏 인터내셔널 와이드팬츠",
  price: "89,000",
  src: "../img/Sub_img/14.jpg"
}, {
  id: "data15",
  category: "공용",
  name: "리버시블 후드 플리스",
  price: "109,000",
  src: "../img/Sub_img/15.jpg"
}, {
  id: "data16",
  category: "공용",
  name: "브이 배색 경량 자켓",
  price: "119,000",
  src: "../img/Sub_img/16.jpg"
}];
var _default = subData;
exports.default = _default;
},{}],"js/subpage.js":[function(require,module,exports) {
"use strict";

var _sub_data = _interopRequireDefault(require("./sub_data.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var subProduct = document.querySelector('.list_wrap');
for (var i = 0; i < 2; i++) {
  for (var j = 0; j < _sub_data.default.length; j++) {
    //서브 상품박스
    var subDiv = document.createElement('div');
    subDiv.setAttribute('class', 'product_box');
    var subImgBox = document.createElement('div');
    subImgBox.setAttribute('class', 'product_img');
    var imgLink = document.createElement('a');
    imgLink.setAttribute('href', "#!");
    subImgBox.appendChild(imgLink);
    var subImg = document.createElement('img');
    subImg.setAttribute('src', _sub_data.default[j].src);
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
    var cateGoryText = document.createTextNode(_sub_data.default[j].category);
    cateGory.appendChild(cateGoryText);

    //상품이름
    var productName = document.createElement('p');
    productName.setAttribute('class', 'product_name');
    detailLink.appendChild(productName);
    var nameText = document.createTextNode(_sub_data.default[j].name);
    productName.appendChild(nameText);

    //상품가격
    var productPrice = document.createElement('p');
    productPrice.setAttribute('class', 'product_price');
    detailLink.appendChild(productPrice);
    var namePrice = document.createTextNode(_sub_data.default[j].price + '원');
    productPrice.appendChild(namePrice);

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
    subProduct.appendChild(subDiv);
  }
}

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
for (var _i = 0; _i < li.length; _i++) {
  li[_i].addEventListener("mouseover", function (e) {
    scr.classList.add('bg_on');
  });
  li[_i].addEventListener("mouseout", function (e) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58587" + '/');
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