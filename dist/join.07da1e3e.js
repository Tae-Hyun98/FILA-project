parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"onm6":[function(require,module,exports) {
var e=document.getElementById("user_id"),t=document.getElementById("user_pw"),n=document.querySelector(".id_valid"),c=document.querySelector(".pw_valid"),l=document.querySelector(".id_rule"),d=document.querySelector(".pw_rule"),u=/^[a-z0-9]{5,15}$/,r=/^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{5,15}$/,o=/^[가-힣]{2,}$/,i=/[0-9]{6,}/,a=document.getElementById("user_pw_chk"),s=document.querySelector(".eq_chk"),y=document.getElementById("user_name"),m=document.querySelector(".chk_name"),v=document.getElementById("user_idcard"),E=document.getElementById("user_idcard1"),k=document.querySelector(".idcard_chk"),f=document.getElementById("user_gender"),g=document.querySelector(".gender_chk"),L=document.getElementById("phone1"),h=document.getElementById("phone2"),_=document.getElementById("phone3");function p(){var t=e.value;if(!u.test(t)||""===t)return e.focus(),n.innerHTML="사용불가능한 아이디",n.style.color="red",l.style.display="block",!1;n.innerHTML="사용가능한 아이디",n.style.color="blue",l.style.display="none"}function B(){var e=t.value;if(!r.test(e)||""===e)return t.focus(),c.innerHTML="사용불가능한 비밀번호",c.style.color="red",d.style.display="block",!1;c.innerHTML="사용가능한 비밀번호",c.style.color="blue",d.style.display="none"}function q(){t.value===a.value?(s.innerHTML="비밀번호가 일치합니다.",s.style.color="green"):(a.select(),s.innerHTML="비밀번호가 일치하지않습니다.",s.style.color="red")}function I(){var e=y.value;o.test(e)&&""!==e?(m.innerHTML="올바릅니다.",m.style.color="blue"):(m.innerHTML="잘못입력하셨습니다.",m.style.color="red")}function S(){var e=v.value,t=v.value.length,n=E.value,c=E.value.length;!i.test(e)||""===e||t<=5?(k.innerHTML="형식을 지켜주세요",v.style.background="none"):6===t?(E.focus(),k.innerHTML="",v.style.background="lightsteelBlue"):6===t&&(""===c||n<7)&&(k.innerHTML="형식을 지켜주세요")}function b(){""===f.value?(g.innerHTML="성별을 선택해주세요",g.style.color="red"):g.innerHTML=""}function H(){var e=L.value,t=h.value;e.length>=3&&h.focus(),t.length>=4&&_.focus()}e.addEventListener("change",p),t.addEventListener("change",B),a.addEventListener("change",q),y.addEventListener("change",I),v.addEventListener("keyup",S),f.addEventListener("change",b),L.addEventListener("keyup",H),h.addEventListener("keyup",H);var M=document.getElementById("all_terms"),T=document.querySelectorAll(".term"),w=document.getElementById("term_1"),$=document.getElementById("term_2"),A=document.getElementById("term_3"),j=document.getElementById("term_4");function z(){M.checked?T.forEach(function(e){e.checked=!0}):T.forEach(function(e){e.checked=!1})}function x(){w.checked&&$.checked&&A.checked&&j.checked?M.checked=!0:M.checked=!1}M.addEventListener("click",z),w.addEventListener("click",x),$.addEventListener("click",x),A.addEventListener("click",x),j.addEventListener("click",x);var C=document.getElementById("join_btn");function D(){""===e.value?e.focus():""===t.value?t.focus():""===a.value?a.focus():""===y.value?y.focus():""===v.value||""===E.value?v.focus():""===f.value?f.focus():""===L.value||""===h.value||""===_.value?L.focus():alert("가입완료")}C.addEventListener("click",D);var F=document.querySelector(".see_1"),G=document.querySelector(".see_2"),J=document.querySelector(".see_3"),K=document.querySelector(".see_4"),N=document.querySelectorAll(".agree_popup"),O=document.querySelectorAll(".agree_close_btn");F.addEventListener("click",function(){N[0].style.display="block"}),G.addEventListener("click",function(){N[1].style.display="block"}),J.addEventListener("click",function(){N[2].style.display="block"}),K.addEventListener("click",function(){N[3].style.display="block"}),O.forEach(function(e,t){e.addEventListener("click",function(){e&&(N[t].style.display="none")})});
},{}]},{},["onm6"], null)
//# sourceMappingURL=/join.07da1e3e.js.map