parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TTQa":[function(require,module,exports) {
function e(e){return a(e)||l(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function l(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function a(e){if(Array.isArray(e))return r(e)}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var i=["detail_01.jpg","detail_02.jpg","detail_03.jpg","detail_04.jpg","detail_05.jpg","detail_06.jpg","detail_07.jpg","detail_08.jpg"],d=new Swiper(".detail_swiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"preview_img",bulletActiveClass:"swiper-pagination-active",renderBullet:function(e,t){return'<div class="'+t+'"><img src="./img/detail_img/'+i[e]+'"></div>'}}}),o=new Swiper(".color_swiper",{freeMode:!0,slidesPerView:"auto"}),c=document.getElementById("size_btn"),u=document.querySelector(".size_wrap"),s=document.querySelector(".close");c.addEventListener("click",function(){u.style.display="block",s.addEventListener("click",function(){u.style.display="none"})});for(var p=document.querySelector(".qty_num"),m=document.getElementById("sum"),v=document.querySelector(".mius").addEventListener("click",function(){if(p.value>1){p.value--;var e=99e3*p.value;m.innerHTML=e.toLocaleString("ko-KR")}else alert("최소 1개는 시켜야돼요")}),y=document.querySelector(".plus"),f=document.querySelector(".plus").addEventListener("click",function(){if(p.value>=0&&p.value<10){p.value++;var e=99e3*p.value;m.innerHTML=e.toLocaleString("ko-KR")}else alert("10개이상은 안돼요")}),h=p.addEventListener("change",function(){if(p.value>0&&p.value<=10){var e=99e3*p.value;m.innerHTML=e.toLocaleString("ko-KR")}else p.value=1,alert("수량을 입력해주세요 1~10")}),g=document.querySelectorAll(".sheet_menu .list li"),_=document.querySelectorAll(".sheet_menu .content ul"),E="",S=0;S<g.length;S++)g[S].querySelector(".tab_tit").addEventListener("click",function(e){e.preventDefault();for(var t=0;t<g.length;t++)g[t].classList.remove("on"),_[t].style.display="none";this.parentNode.classList.add("on"),E=this.getAttribute("href"),document.querySelector(E).style.display="block"});for(var q=document.querySelectorAll(".tab_menu>ul>li"),b=document.querySelectorAll(".tab_menu .tab_cont .tab"),C="",L=0;L<q.length;L++)q[L].querySelector(".sheet_tit").addEventListener("click",function(e){e.preventDefault();for(var t=0;t<q.length;t++)q[t].classList.remove("on"),b[t].style.display="none";this.parentNode.classList.add("on"),C=this.getAttribute("href"),document.querySelector(C).style.display="block"});var k=e(document.querySelectorAll(".rating_star"));function N(e){var t=e.length;e.map(function(n){n.addEventListener("click",function(){var l=e.indexOf(n);if("far fa-star rating_star"===n.className)for(;l>=0;l--)e[l].className="fas fa-star rating_star";else for(;l<t;l++)e[l].className="far fa-star rating_star"})})}N(k);var w=document.getElementById("add_btn"),A=document.getElementById("input_id"),x=document.getElementById("input_txt"),T=document.querySelector(".review_list"),I=document.querySelector(".rating"),j=document.querySelectorAll(".rating i"),B=new Date,M=B.getFullYear()+"."+(B.getMonth()+1)+"."+B.getDate(),H=1;function D(){if(""!=A.value&&""!=x.value){var e=document.createElement("li"),t=document.createElement("p"),n=document.createTextNode(H),l=document.createElement("p"),a=document.createElement("p"),r=document.createElement("p"),i=document.createElement("p"),d=document.createTextNode(M),o=document.createElement("button"),c=document.createTextNode("X"),u=document.createTextNode(A.value),s=document.createTextNode(x.value);e.appendChild(t),e.appendChild(l),e.appendChild(a),e.appendChild(r),e.appendChild(i),e.appendChild(o),i.appendChild(d),t.appendChild(n),a.appendChild(s),r.appendChild(u),o.appendChild(c),o.setAttribute("class","delete"),l.setAttribute("class","star"),T.appendChild(e),A.value="",x.value="",H++,l.innerHTML=I.innerHTML;for(var p=document.querySelectorAll(".delete"),m=function(e){p[e].addEventListener("click",function(){p[e].parentNode.parentNode&&this.parentNode.parentNode.removeChild(this.parentNode)})},v=0;v<p.length;v++)m(v)}else alert("값을 입력하세요");j.forEach(function(e){e.setAttribute("class","far fa-star rating_star")})}w.addEventListener("click",D);var K=document.querySelector(".inquiry_write_wrap"),O=document.getElementById("inq_btn").addEventListener("click",function(){K.style.display="block"}),R=document.querySelector(".write_close").addEventListener("click",function(){K.style.display="none"}),z=document.getElementById("write_btn"),F=document.getElementById("inq_option"),P=document.querySelector(".inq_id input"),U=document.querySelector(".inq_title input"),V=document.querySelector(".inq_context textarea"),X=document.querySelector(".inq_list"),Y=2;function $(){if(""!=F.value&&""!=P.value&&""!=U.value&&""!=V.value){var e=F.options[F.selectedIndex].text,t=document.createElement("li"),n=document.createElement("span"),l=document.createTextNode(Y),a=document.createElement("span"),r=document.createElement("span"),i=document.createElement("span"),d=document.createElement("span"),o=document.createElement("span"),c=document.createTextNode("답변중"),u=document.createTextNode(M),s=document.createTextNode(e),p=document.createTextNode(P.value),m=document.createTextNode(U.value);t.appendChild(n),t.appendChild(a),t.appendChild(r),t.appendChild(i),t.appendChild(d),t.appendChild(o),n.appendChild(l),a.appendChild(s),r.appendChild(m),i.appendChild(p),d.appendChild(u),o.appendChild(c),X.appendChild(t),P.value="",V.value="",F.value="",U.value="",Y++,K.style.display="none"}else alert("입력되지 않은 칸이 있습니다."),K.style.display="block"}z.addEventListener("click",$);
},{}]},{},["TTQa"], null)
//# sourceMappingURL=/detail.609403cc.js.map