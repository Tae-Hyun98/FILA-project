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
})({"js/detail.js":[function(require,module,exports) {
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
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("mouseover", function (e) {
    scr.classList.add('bg_on');
  });
  li[i].addEventListener("mouseout", function (e) {
    scr.classList.remove('bg_on');
  });
}

//검색버튼 클릭시 검색창
var searchOpen = document.getElementById('search').addEventListener('click', function () {
  scr.classList.add('search_on');
});
var searchClose = document.getElementById('close').addEventListener('click', function () {
  scr.classList.remove('search_on');
});
;

//디테일컷 스와이퍼
var image = ['detail_01.jpg', 'detail_02.jpg', 'detail_03.jpg', 'detail_04.jpg', 'detail_05.jpg', 'detail_06.jpg', 'detail_07.jpg', 'detail_08.jpg'];
var swiper = new Swiper(".detail_swiper", {
  loop: true,
  /* autoplay: {
    delay: 3000,
  }, */
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: "preview_img",
    bulletActiveClass: "swiper-pagination-active",
    renderBullet: function renderBullet(index, className) {
      return '<div class="' + className + '"><img src="../img/detail_img/' + image[index] + '"></div>';
    }
  }
});

//color 스와이퍼
var swiperColor = new Swiper(".color_swiper", {
  freeMode: true,
  slidesPerView: 'auto'
  /* autoplay: {
    delay: 3000,
  }, */
});

//실측사이즈 클릭시팝업
var sizeBtn = document.getElementById('size_btn');
var sizePopup = document.querySelector('.size_wrap');
var popupClose = document.querySelector('.close');
sizeBtn.addEventListener('click', function () {
  sizePopup.style.display = 'block';
  popupClose.addEventListener('click', function () {
    sizePopup.style.display = 'none';
  });
});

//수량 + -
var qtyNum = document.querySelector('.qty_num');
var totalSum = document.getElementById('sum');
var mius = document.querySelector('.mius').addEventListener('click', function () {
  if (qtyNum.value > 1) {
    qtyNum.value--;
    var result = qtyNum.value * 99000;
    totalSum.innerHTML = result.toLocaleString('ko-KR');
  } else {
    alert('최소 1개는 시켜야돼요');
  }
});
var plusDis = document.querySelector('.plus');
var plus = document.querySelector('.plus').addEventListener('click', function () {
  if (qtyNum.value >= 0 && qtyNum.value < 10) {
    qtyNum.value++;
    var result = qtyNum.value * 99000;
    totalSum.innerHTML = result.toLocaleString('ko-KR');
  } else {
    alert('10개이상은 안돼요');
  }
});
var qtyChan = qtyNum.addEventListener('change', function () {
  if (qtyNum.value > 0 && qtyNum.value <= 10) {
    var result = qtyNum.value * 99000;
    totalSum.innerHTML = result.toLocaleString('ko-KR');
  } else {
    qtyNum.value = 1;
    alert('수량을 입력해주세요 1~10');
  }
});

//sheet menu
var tabList = document.querySelectorAll('.sheet_menu .list li');
var contents = document.querySelectorAll('.sheet_menu .content ul');
var activeContent = '';
for (var _i = 0; _i < tabList.length; _i++) {
  tabList[_i].querySelector('.tab_tit').addEventListener('click', function (e) {
    e.preventDefault();
    for (var j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('on');
      contents[j].style.display = 'none';
    }
    this.parentNode.classList.add('on');
    activeContent = this.getAttribute('href');
    document.querySelector(activeContent).style.display = 'block';
  });
}

//review sheet
var sheetList = document.querySelectorAll('.tab_menu ul li');
var tabContents = document.querySelectorAll('.tab_menu .tab_cont>div');
var activeContents = '';
for (var _i2 = 0; _i2 < sheetList.length; _i2++) {
  sheetList[_i2].querySelector('.sheet_tit').addEventListener('click', function (e) {
    e.preventDefault();
    for (var j = 0; j < sheetList.length; j++) {
      sheetList[j].classList.remove('on');
      tabContents[j].style.display = 'none';
    }
    this.parentNode.classList.add('on');
    activeContents = this.getAttribute('href');
    document.querySelector(activeContents).style.display = 'block';
  });
}

//리뷰등록
var addBtn = document.getElementById('add_btn');
var inputId = document.getElementById('input_id');
var inputTxt = document.getElementById('input_txt');
var reviewList = document.querySelector('.review_list');
var today = new Date();
var dayFormat = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDate();
var count = 1;
addBtn.addEventListener('click', reviewAdd);
function reviewAdd() {
  if (inputId.value != '' && inputTxt.value != '') {
    var Li = document.createElement('li');
    var Pno = document.createElement('p');
    var Pnum = document.createTextNode(count);
    var Pstar = document.createElement('p');
    var Prating = document.createTextNode('★★★');
    var Ptext = document.createElement('p');
    var Pid = document.createElement('p');
    var Ptoday = document.createElement('p');
    var Today = document.createTextNode(dayFormat);
    var Pdel = document.createElement('button');
    var del = document.createTextNode('X');
    var userId = document.createTextNode(inputId.value);
    var userTxt = document.createTextNode(inputTxt.value);
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
    var delBtn = document.querySelectorAll('.delete');
    var _loop = function _loop(_i3) {
      delBtn[_i3].addEventListener('click', function () {
        if (delBtn[_i3].parentNode.parentNode) {
          this.parentNode.parentNode.removeChild(this.parentNode);
        }
      });
    };
    for (var _i3 = 0; _i3 < delBtn.length; _i3++) {
      _loop(_i3);
    }
  } else {
    alert('값을 입력하세요');
  }
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61152" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/detail.js"], null)
//# sourceMappingURL=/detail.975b991d.js.map