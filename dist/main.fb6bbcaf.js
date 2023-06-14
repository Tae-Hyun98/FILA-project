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
})({"js/rank_data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tennisData = exports.targaData = exports.shirtsData = exports.runningData = exports.onlineData = exports.cateTit = void 0;
var cateTit = ['# 티셔츠&팬츠', '# 온라인단독', '# 타르가', '# 테니스', '# 런닝화'];
exports.cateTit = cateTit;
var shirtsData = [{
  name: '베이직 리니어 반팔티',
  image: './img/Main_img/Ranking_img/T&pants/01.jpg',
  price: '39,000원'
}, {
  name: '3D 빅로고 반팔티',
  image: './img/Main_img/Ranking_img/T&pants/02.jpg',
  price: '32,000원'
}, {
  name: '컴포트핏 인터내셔널 로고 반팔티',
  image: './img/Main_img/Ranking_img/T&pants/03.jpg',
  price: '38,000원'
}, {
  name: '컴포트핏 인터내셔널 반팔 맨투맨',
  image: './img/Main_img/Ranking_img/T&pants/04.jpg',
  price: '29,000원'
}, {
  name: '컴포트핏 조거팬츠',
  image: './img/Main_img/Ranking_img/T&pants/05.jpg',
  price: '24,000원'
}, {
  name: '이지팬츠',
  image: './img/Main_img/Ranking_img/T&pants/06.jpg',
  price: '18,000원'
}];
exports.shirtsData = shirtsData;
var onlineData = [{
  name: 'Fila athletics 아노락',
  image: './img/Main_img/Ranking_img/Online/01.jpg',
  price: '109,000원'
}, {
  name: 'Fila tennis 블럭 자켓',
  image: './img/Main_img/Ranking_img/Online/02.jpg',
  price: '129,000원'
}, {
  name: 'Fila tennis 블럭 하프넥 아노락',
  image: './img/Main_img/Ranking_img/Online/03.jpg',
  price: '129,000원'
}, {
  name: 'Sportslife 아치로고 맨투맨',
  image: './img/Main_img/Ranking_img/Online/04.jpg',
  price: '69,000원'
}, {
  name: 'Sportslife 아치로고 반팔 티셔츠',
  image: './img/Main_img/Ranking_img/Online/05.jpg',
  price: '42,000원'
}, {
  name: 'ball boy 반팔 티셔츠',
  image: './img/Main_img/Ranking_img/Online/06.jpg',
  price: '39,000원'
}];
exports.onlineData = onlineData;
var targaData = [{
  name: '타르가 클래식',
  image: './img/Main_img/Ranking_img/Targa/01.jpg',
  price: '89,000원'
}, {
  name: '타르가 OG 1988 BB',
  image: './img/Main_img/Ranking_img/Targa/02.jpg',
  price: '179,000원'
}, {
  name: '타르가 OG 1988',
  image: './img/Main_img/Ranking_img/Targa/03.jpg',
  price: '149,000원'
}, {
  name: '타르가 클럽 LT',
  image: './img/Main_img/Ranking_img/Targa/04.jpg',
  price: '109,000원'
}, {
  name: '타르가 88/22',
  image: './img/Main_img/Ranking_img/Targa/05.jpg',
  price: '79,000원'
}, {
  name: '타르가 클래식 808',
  image: './img/Main_img/Ranking_img/Targa/06.jpg',
  price: '88,000원'
}];
exports.targaData = targaData;
var tennisData = [{
  name: '테니스 소프트 볼캡',
  image: './img/Main_img/Ranking_img/Tennis/01.jpg',
  price: '39,000원'
}, {
  name: 'FILA 테니스 라켓 슬링백',
  image: './img/Main_img/Ranking_img/Tennis/02.jpg',
  price: '79,000원'
}, {
  name: 'WHITE LINE 라켓 슬링백',
  image: './img/Main_img/Ranking_img/Tennis/03.jpg',
  price: '99,000원'
}, {
  name: '테니스 타월',
  image: './img/Main_img/Ranking_img/Tennis/04.jpg',
  price: '49,000원'
}, {
  name: '테니스 탁텔 하드볼캡',
  image: './img/Main_img/Ranking_img/Tennis/05.jpg',
  price: '49,000원'
}, {
  name: '테니스 헤어밴드',
  image: './img/Main_img/Ranking_img/Tennis/06.jpg',
  price: '9,900원'
}];
exports.tennisData = tennisData;
var runningData = [{
  name: '휠라 플로트 맥시',
  image: './img/Main_img/Ranking_img/Running/01.jpg',
  price: '189,000원'
}, {
  name: '휠라 NRE I3',
  image: './img/Main_img/Ranking_img/Running/02.jpg',
  price: '109,000원'
}, {
  name: '휠라 플로트 프라임',
  image: './img/Main_img/Ranking_img/Running/03.jpg',
  price: '159,000원'
}, {
  name: '휠라 플로트 엘리트',
  image: './img/Main_img/Ranking_img/Running/04.jpg',
  price: '199,000원'
}, {
  name: '휠라 RGB 플렉스 3.0',
  image: './img/Main_img/Ranking_img/Running/05.jpg',
  price: '89,000원'
}, {
  name: '휠라 NRE I3',
  image: './img/Main_img/Ranking_img/Running/06.jpg',
  price: '109,900원'
}];
exports.runningData = runningData;
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _rank_data = require("./rank_data.js");
//카운트다운
var countDown = new Date("Jun 30, 2023 22:22:00").getTime();
var x = setInterval(function () {
  var timeP = document.querySelectorAll('.time p');
  var now = new Date().getTime();
  var timer = countDown - now;
  var days = Math.floor(timer / (1000 * 60 * 60 * 24));
  var hours = Math.floor(timer % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = Math.floor(timer % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor(timer % (1000 * 60) / 1000);
  for (var i = 0; i < timeP.length; i++) {
    timeP[0].innerHTML = "".concat(('00' + days + ' 일').slice(-4));
    timeP[1].innerHTML = "".concat(('00' + hours + ' : ').slice(-5));
    timeP[2].innerHTML = "".concat(('00' + minutes + ' : ').slice(-5));
    timeP[3].innerHTML = "".concat(('00' + seconds).slice(-2));
  }
  if (timer < 0) {
    clearInterval(x);
    document.querySelector(".count").innerHTML = "드디어 출시되는 FILA 에디션!";
  }
}, 1000);

//카테고리클릭시 들어가는거
var rankCategory = document.querySelectorAll('.rank_category ul li a');
var categoryTit = document.querySelector('.rank_top h3');
var rankIndi = document.querySelectorAll('.rank_bottom ul li a');
var rankImg = document.querySelectorAll('.rankSwiper .rank_img a img');
var rankDesc = document.querySelectorAll('.rank_desc ul li .desc_tit');
var rankDescPrice = document.querySelectorAll('.rank_desc ul li .desc_price');
rankCategory.forEach(function (item, idx) {
  item.addEventListener('click', function () {
    categoryTit.innerHTML = _rank_data.cateTit[idx];
    if (idx === 0) {
      rankIndi.forEach(function (ranks, idx) {
        rankIndi[idx].innerHTML = _rank_data.shirtsData[idx].name;
        rankImg[idx].setAttribute('src', _rank_data.shirtsData[idx].image);
        rankDesc[idx].innerHTML = _rank_data.shirtsData[idx].name;
        rankDescPrice[idx].innerHTML = _rank_data.shirtsData[idx].price;
      });
    } else if (idx === 1) {
      rankIndi.forEach(function (ranks, idx) {
        rankIndi[idx].innerHTML = _rank_data.onlineData[idx].name;
        rankImg[idx].setAttribute('src', _rank_data.onlineData[idx].image);
        rankDesc[idx].innerHTML = _rank_data.onlineData[idx].name;
        rankDescPrice[idx].innerHTML = _rank_data.onlineData[idx].price;
      });
    } else if (idx === 2) {
      rankIndi.forEach(function (ranks, idx) {
        rankIndi[idx].innerHTML = _rank_data.targaData[idx].name;
        rankImg[idx].setAttribute('src', _rank_data.targaData[idx].image);
        rankDesc[idx].innerHTML = _rank_data.targaData[idx].name;
        rankDescPrice[idx].innerHTML = _rank_data.targaData[idx].price;
      });
    } else if (idx === 3) {
      rankIndi.forEach(function (ranks, idx) {
        rankIndi[idx].innerHTML = _rank_data.tennisData[idx].name;
        rankImg[idx].setAttribute('src', _rank_data.tennisData[idx].image);
        rankDesc[idx].innerHTML = _rank_data.tennisData[idx].name;
        rankDescPrice[idx].innerHTML = _rank_data.tennisData[idx].price;
      });
    } else if (idx === 4) {
      rankIndi.forEach(function (ranks, idx) {
        rankIndi[idx].innerHTML = _rank_data.runningData[idx].name;
        rankImg[idx].setAttribute('src', _rank_data.runningData[idx].image);
        rankDesc[idx].innerHTML = _rank_data.runningData[idx].name;
        rankDescPrice[idx].innerHTML = _rank_data.runningData[idx].price;
      });
    }
  });
});

//magazine 나타나기
var magaEls = document.querySelectorAll('.magazine_box>div');
window.addEventListener('scroll', function () {
  if (window.scrollY >= 3600) {
    magaEls.forEach(function (item, idx) {
      gsap.to(item, 0.4, {
        delay: (idx + 1) * 0.4,
        opacity: 1,
        translateY: 0
      });
    });
  }
});

//sns
var snsEls = document.querySelectorAll('.sns_list .sa');
var snsElsb = document.querySelectorAll('.sns_list .sb');
window.addEventListener('scroll', function () {
  if (window.scrollY >= 5550) {
    snsEls.forEach(function (item, idx) {
      gsap.to(item, 0.5, {
        delay: idx * 0.5,
        opacity: 1,
        translateX: 0
      });
    });
    snsElsb.forEach(function (item, idx) {
      gsap.to(item, 0.5, {
        delay: idx * 0.5,
        opacity: 1,
        translateX: 0
      });
    });
  }
});
},{"./rank_data.js":"js/rank_data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53248" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map