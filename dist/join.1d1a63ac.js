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
})({"js/join.js":[function(require,module,exports) {
var userId = document.getElementById('user_id');
var userPw = document.getElementById('user_pw');
var idSpan = document.querySelector('.id_valid');
var pwSpan = document.querySelector('.pw_valid');
var idRule = document.querySelector('.id_rule');
var pwRule = document.querySelector('.pw_rule');
var idPattern = /^[a-z0-9]{5,15}$/;
var pwPattern = /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{5,15}$/;
var namePattern = /^[가-힣]{2,}$/;
var idcardPattern = /[0-9]{6,}/;
var equlChk = document.getElementById('user_pw_chk');
var eqSpan = document.querySelector('.eq_chk');
var userName = document.getElementById('user_name');
var nameSpan = document.querySelector('.chk_name');
var userIdcard = document.getElementById('user_idcard');
var userIdcard1 = document.getElementById('user_idcard1');
var idcardSpan = document.querySelector('.idcard_chk');
var userGender = document.getElementById('user_gender');
var genderSpan = document.querySelector('.gender_chk');
var userPhone = document.getElementById('phone1');
var userPhone1 = document.getElementById('phone2');
var userPhone2 = document.getElementById('phone3');
userId.addEventListener('change', checkId);
userPw.addEventListener('change', checkPw);
equlChk.addEventListener('change', checkEqul);
userName.addEventListener('change', checkName);
userIdcard.addEventListener('keyup', checkIdcard);
userGender.addEventListener('change', checkGender);
userPhone.addEventListener('keyup', checkPhone);
userPhone1.addEventListener('keyup', checkPhone);

//아이디 유효성검사
function checkId() {
  var userValue = userId.value;
  if (!idPattern.test(userValue) || userValue === '') {
    userId.focus();
    idSpan.innerHTML = '사용불가능한 아이디';
    idSpan.style.color = 'red';
    idRule.style.display = 'block';
    return false;
  } else {
    idSpan.innerHTML = '사용가능한 아이디';
    idSpan.style.color = 'blue';
    idRule.style.display = 'none';
  }
}

//비밀번호 유효성검사
function checkPw() {
  var userValuePw = userPw.value;
  if (!pwPattern.test(userValuePw) || userValuePw === '') {
    userPw.focus();
    pwSpan.innerHTML = '사용불가능한 비밀번호';
    pwSpan.style.color = 'red';
    pwRule.style.display = 'block';
    return false;
  } else {
    pwSpan.innerHTML = '사용가능한 비밀번호';
    pwSpan.style.color = 'blue';
    pwRule.style.display = 'none';
  }
}

//비밀번호 확인
function checkEqul() {
  if (userPw.value === equlChk.value) {
    eqSpan.innerHTML = '비밀번호가 일치합니다.';
    eqSpan.style.color = 'green';
  } else {
    equlChk.select();
    eqSpan.innerHTML = '비밀번호가 일치하지않습니다.';
    eqSpan.style.color = 'red';
  }
}

//이름
function checkName() {
  var nameValue = userName.value;
  if (!namePattern.test(nameValue) || nameValue === '') {
    nameSpan.innerHTML = '잘못입력하셨습니다.';
    nameSpan.style.color = 'red';
  } else {
    nameSpan.innerHTML = '올바릅니다.';
    nameSpan.style.color = 'blue';
  }
}

//주민등록번호
function checkIdcard() {
  var idcardValue = userIdcard.value;
  var idcardLength = userIdcard.value.length;
  var idcardValue1 = userIdcard1.value;
  var idcardLength1 = userIdcard1.value.length;
  if (!idcardPattern.test(idcardValue) || idcardValue === '' || idcardLength <= 5) {
    idcardSpan.innerHTML = '형식을 지켜주세요';
    userIdcard.style.background = 'none';
  } else if (idcardLength === 6) {
    userIdcard1.focus();
    idcardSpan.innerHTML = '';
    userIdcard.style.background = 'lightsteelBlue';
  } else if (idcardLength === 6 && (idcardLength1 === '' || idcardValue1 < 7)) {
    idcardSpan.innerHTML = '형식을 지켜주세요';
  }
}

//성별선택
function checkGender() {
  var genderValue = userGender.value;
  if (genderValue === '') {
    genderSpan.innerHTML = '성별을 선택해주세요';
    genderSpan.style.color = 'red';
  } else {
    genderSpan.innerHTML = '';
  }
}

//휴대전화
function checkPhone() {
  var phoneValue = userPhone.value;
  var phoneValue1 = userPhone1.value;
  if (phoneValue.length >= 3) {
    userPhone1.focus();
  }
  if (phoneValue1.length >= 4) {
    userPhone2.focus();
  }
}

//약관동의
var allTerms = document.getElementById('all_terms');
var terms = document.querySelectorAll('.term');
var term01 = document.getElementById('term_1');
var term02 = document.getElementById('term_2');
var term03 = document.getElementById('term_3');
var term04 = document.getElementById('term_4');
allTerms.addEventListener('click', allCheck);
term01.addEventListener('click', termCheck);
term02.addEventListener('click', termCheck);
term03.addEventListener('click', termCheck);
term04.addEventListener('click', termCheck);

//전체체크함수
function allCheck() {
  if (allTerms.checked) {
    terms.forEach(function (e) {
      e.checked = true;
    });
  } else {
    terms.forEach(function (e) {
      e.checked = false;
    });
  }
}

//체크여부
function termCheck() {
  if (term01.checked && term02.checked && term03.checked && term04.checked) {
    allTerms.checked = true;
  } else {
    allTerms.checked = false;
  }
}

//가입버튼누를시 값체크
var joinBtn = document.getElementById('join_btn');
joinBtn.addEventListener('click', btnClick);
function btnClick() {
  if (userId.value === '') {
    userId.focus();
  } else if (userPw.value === '') {
    userPw.focus();
  } else if (equlChk.value === '') {
    equlChk.focus();
  } else if (userName.value === '') {
    userName.focus();
  } else if (userIdcard.value === '' || userIdcard1.value === '') {
    userIdcard.focus();
  } else if (userGender.value === '') {
    userGender.focus();
  } else if (userPhone.value === '' || userPhone1.value === '' || userPhone2.value === '') {
    userPhone.focus();
  } else {
    alert('가입완료');
  }
}

//전문보기 클릭
var seeBtn1 = document.querySelector('.see_1');
var seeBtn2 = document.querySelector('.see_2');
var seeBtn3 = document.querySelector('.see_3');
var seeBtn4 = document.querySelector('.see_4');
var agreeBox = document.querySelectorAll('.agree_popup');
var closeBtn = document.querySelectorAll('.agree_close_btn');
seeBtn1.addEventListener('click', function () {
  agreeBox[0].style.display = 'block';
});
seeBtn2.addEventListener('click', function () {
  agreeBox[1].style.display = 'block';
});
seeBtn3.addEventListener('click', function () {
  agreeBox[2].style.display = 'block';
});
seeBtn4.addEventListener('click', function () {
  agreeBox[3].style.display = 'block';
});
closeBtn.forEach(function (btn, idx) {
  btn.addEventListener('click', function () {
    if (btn) {
      agreeBox[idx].style.display = 'none';
    }
  });
});
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63428" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/join.js"], null)
//# sourceMappingURL=/join.1d1a63ac.js.map