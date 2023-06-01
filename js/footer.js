
function footerHTML() {
  const footer = document.getElementById('footer');

  let footerInner = '';
  footerInner += `
 <!-- 푸터 -->
 <div class="footer_nav">
   <ul class="footer_top">
     <li>
       <a href="#!">
         <img src="./img/Logo/blue_fila.png" alt="logo">
       </a>
     </li>
     <li>
       <p>FILA IR</p>
     </li>
   </ul>

   <ul>
     <li class="f_nav_tit">
       <a href="#!">WOMEN</a>
     </li>
     <li><a href="#!">의류</a></li>
     <li><a href="#!">신발</a></li>
     <li><a href="#!">용품</a></li>
     <li><a href="#!">언더웨어</a></li>
     <li><a href="#!">신상품</a></li>
     <li><a href="#!">베스트</a></li>
     <li><a href="#!">세일</a></li>
   </ul>

   <ul>
     <li class="f_nav_tit">
       <a href="#!">MEN</a>
     </li>
     <li><a href="#!">의류</a></li>
     <li><a href="#!">신발</a></li>
     <li><a href="#!">용품</a></li>
     <li><a href="#!">언더웨어</a></li>
     <li><a href="#!">신상품</a></li>
     <li><a href="#!">베스트</a></li>
     <li><a href="#!">세일</a></li>
   </ul>

   <ul>
     <li class="f_nav_tit">
       <a href="#!">KIDS</a>
     </li>
     <li><a href="#!">의류</a></li>
     <li><a href="#!">신발</a></li>
     <li><a href="#!">용품</a></li>
     <li><a href="#!">신상품</a></li>
     <li><a href="#!">베스트</a></li>
     <li><a href="#!">세일</a></li>
   </ul>

   <ul>
     <li class="f_nav_tit">
       <a href="#!">BRAND</a>
     </li>
     <li><a href="#!">About Fila</a></li>
     <li><a href="#!">Collaboration</a></li>
     <li><a href="#!">Sustainability</a></li>
     <li><a href="#!">Athelets</a></li>
     <li><a href="#!">Tennis Stories</a></li>
   </ul>

 </div>

 <div class="footer_list">
   <ul>
     <li><a href="#!">매장안내</a></li>
     <li><a href="#!">공지사항</a></li>
     <li><a href="#!">FILA MEMBERSHIP</a></li>
     <li><a href="#!">대리점 개설문의</a></li>
     <li><a href="#!">FILA 입찰 참여 안내</a></li>
     <li><a href="#!">통합회원 이용약관</a></li>
     <li><a href="#!" class="red">개인정보처리방침</a></li>
     <li><a href="#!">제보센터</a></li>
     <li><a href="#!" class="blue">KOREA</a></li>
     <li>
       <select name="" id="family_site">
         <option value="">Family Site</option>
         <option value="https://www.keds.co.kr/main/main.asp">KEDS 온라인스토어</option>
         <option value="https://www.nicedocu.com/web/buyer/main/index.jsp">FILA 입찰공고</option>
         <option value="http://filaholdings.com/kr/main/index.asp">FILA Holdings</option>
       </select>
     </li>
   </ul>
 </div>

 <div class="footer_bottom">
   <div class="f_bom_left">
     <p>
       서울시 강동구 천호대로 1077 이스트센트럴타워 15층 ~ 18층 휠라코리아(주) 대표이사 : 김지헌
       <br />
       사업자등록번호:716-81-01573 사업자정보확인 통신판매업신고: 제 2020-서울강동-0160호
       <br />
       개인정보 관리책임자:이학우
       <br /><br />
       본 사이트의 상품이미지 저작권은 휠라코리아(주)에 있으며, 내용의 무단복제를 금합니다.
       <br />
       콘텐츠산업진흥법에 의한 콘텐츠보호안내
     </p>
   </div>

   <div class="f_bom_right">
     <p><a href="#!">CS CENTER</a></p>
     <p class="bold">1577-3472</p>
     <p class="bold">filaonline@fila.com</p>
     <p>평일 월 - 금 : 09시 - 18시 (공휴일제외)</p>
   </div>

   <div class="f_sns">
     <ul>
       <li><a href="#!" class="insta">insta</a></li>
       <li><a href="#!" class="facebook">facebook</a></li>
       <li><a href="#!" class="youtube">youtube</a></li>
       <li><a href="#!" class="kakao">kakao</a></li>
     </ul>
   </div>
 </div>
  `
  footer.innerHTML = footerInner
}
footerHTML();