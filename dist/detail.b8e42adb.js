parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TTQa":[function(require,module,exports) {
var e=document.querySelector(".scroll");window.addEventListener("wheel",function(t){var n=t.deltaY<=0;t.deltaY>0&&scrollY>=100?(e.classList.add("scr_down"),e.classList.remove("scr_up")):n&&0===scrollY?(e.classList.remove("scr_up"),e.classList.remove("scr_down")):n&&0!==scrollY&&(e.classList.add("scr_up"),e.classList.remove("scr_down"))}),window.addEventListener("scroll",function(){0===scrollY&&(e.classList.remove("scr_up"),e.classList.remove("scr_down"))});for(var t=document.querySelectorAll(".header .lnb>ul>li"),n=0;n<t.length;n++)t[n].addEventListener("mouseover",function(t){e.classList.add("bg_on")}),t[n].addEventListener("mouseout",function(t){e.classList.remove("bg_on")});var l=document.getElementById("search").addEventListener("click",function(){e.classList.add("search_on")}),d=document.getElementById("close").addEventListener("click",function(){e.classList.remove("search_on")}),c=["detail_01.jpg","detail_02.jpg","detail_03.jpg","detail_04.jpg","detail_05.jpg","detail_06.jpg","detail_07.jpg","detail_08.jpg"],r=new Swiper(".detail_swiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"preview_img",bulletActiveClass:"swiper-pagination-active",renderBullet:function(e,t){return'<div class="'+t+'"><img src="./img/detail_img/'+c[e]+'"></div>'}}}),o=new Swiper(".color_swiper",{freeMode:!0,slidesPerView:"auto"}),a=document.getElementById("size_btn"),i=document.querySelector(".size_wrap"),s=document.querySelector(".close");a.addEventListener("click",function(){i.style.display="block",s.addEventListener("click",function(){i.style.display="none"})});for(var u=document.querySelector(".qty_num"),m=document.getElementById("sum"),p=document.querySelector(".mius").addEventListener("click",function(){if(u.value>1){u.value--;var e=99e3*u.value;m.innerHTML=e.toLocaleString("ko-KR")}else alert("최소 1개는 시켜야돼요")}),v=document.querySelector(".plus"),y=document.querySelector(".plus").addEventListener("click",function(){if(u.value>=0&&u.value<10){u.value++;var e=99e3*u.value;m.innerHTML=e.toLocaleString("ko-KR")}else alert("10개이상은 안돼요")}),_=u.addEventListener("change",function(){if(u.value>0&&u.value<=10){var e=99e3*u.value;m.innerHTML=e.toLocaleString("ko-KR")}else u.value=1,alert("수량을 입력해주세요 1~10")}),g=document.querySelectorAll(".sheet_menu .list li"),L=document.querySelectorAll(".sheet_menu .content ul"),h="",f=0;f<g.length;f++)g[f].querySelector(".tab_tit").addEventListener("click",function(e){e.preventDefault();for(var t=0;t<g.length;t++)g[t].classList.remove("on"),L[t].style.display="none";this.parentNode.classList.add("on"),h=this.getAttribute("href"),document.querySelector(h).style.display="block"});for(var E=document.querySelectorAll(".tab_menu>ul>li"),w=document.querySelectorAll(".tab_menu .tab_cont .tab"),S="",q=0;q<E.length;q++)E[q].querySelector(".sheet_tit").addEventListener("click",function(e){e.preventDefault();for(var t=0;t<E.length;t++)E[t].classList.remove("on"),w[t].style.display="none";this.parentNode.classList.add("on"),S=this.getAttribute("href"),document.querySelector(S).style.display="block"});var b=document.getElementById("add_btn"),k=document.getElementById("input_id"),C=document.getElementById("input_txt"),N=document.querySelector(".review_list"),A=new Date,B=A.getFullYear()+"."+(A.getMonth()+1)+"."+A.getDate(),T=1;function j(){if(""!=k.value&&""!=C.value){var e=document.createElement("li"),t=document.createElement("p"),n=document.createTextNode(T),l=document.createElement("p"),d=document.createTextNode("★★★★★"),c=document.createElement("p"),r=document.createElement("p"),o=document.createElement("p"),a=document.createTextNode(B),i=document.createElement("button"),s=document.createTextNode("X"),u=document.createTextNode(k.value),m=document.createTextNode(C.value);e.appendChild(t),e.appendChild(l),e.appendChild(c),e.appendChild(r),e.appendChild(o),e.appendChild(i),o.appendChild(a),l.appendChild(d),t.appendChild(n),c.appendChild(m),r.appendChild(u),i.appendChild(s),i.setAttribute("class","delete"),N.appendChild(e),k.value="",C.value="",T++;for(var p=document.querySelectorAll(".delete"),v=function(e){p[e].addEventListener("click",function(){p[e].parentNode.parentNode&&this.parentNode.parentNode.removeChild(this.parentNode)})},y=0;y<p.length;y++)v(y)}else alert("값을 입력하세요")}b.addEventListener("click",j);var I=document.querySelector(".inquiry_write_wrap"),x=document.getElementById("inq_btn").addEventListener("click",function(){I.style.display="block"}),Y=document.querySelector(".write_close").addEventListener("click",function(){I.style.display="none"});
},{}]},{},["TTQa"], null)
//# sourceMappingURL=/detail.b8e42adb.js.map