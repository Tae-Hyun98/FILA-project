parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ayng":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var d=[{id:"data01",username:"권태현",idcard_front:"981109",idcard_back:"1111111",userid:"taehyun12",password:"12345@"},{id:"data02",username:"홍길동",idcard_front:"123456",idcard_back:"1234567",userid:"green",password:"12345"},{id:"data03",username:"가나다",idcard_front:"123456",idcard_back:"1234567",userid:"abcde",password:"12345!"}],a=d;exports.default=a;
},{}],"eUXg":[function(require,module,exports) {
"use strict";var e=d(require("./login_data.js"));function d(e){return e&&e.__esModule?e:{default:e}}var t=document.getElementById("user_name"),a=document.getElementById("user_idcard"),u=document.getElementById("user_idcard1"),n=document.getElementById("find_id_btn"),l=document.getElementById("find_id_chk"),r=document.getElementById("find_name_chk"),c=document.getElementById("user_idcard_pw"),i=document.getElementById("user_idcard1_pw"),m=document.getElementById("find_pw_btn");function _(){""!==t.value&&""!==a.value&&""!==u.value?e.default.forEach(function(e){t.value===e.username&&a.value===e.idcard_front&&u.value===e.idcard_back&&alert("회원님의 아이디는 ".concat(e.userid," 입니다"))}):alert("정보를 입력해주세요.")}function f(){if(""!==l.value&&""!==r.value&&""!==c.value&&""!==i.value)for(var d=0;d<e.default.length;d++)l.value===e.default[d].userid&&r.value===e.default[d].username&&c.value===e.default[d].idcard_front&&i.value===e.default[d].idcard_back&&alert("회원님의 비밀번호는 : "+e.default[d].password+"입니다.");else alert("정보를 입력해주세요")}n.addEventListener("click",_),m.addEventListener("click",f);
},{"./login_data.js":"ayng"}]},{},["eUXg"], null)
//# sourceMappingURL=/find.199c8778.js.map