import userData from "./login_data.js";

//아이디 찾기 변수
const findName = document.getElementById('user_name');
const idcardFront = document.getElementById('user_idcard');
const idcardBack = document.getElementById('user_idcard1');
const findBtn = document.getElementById('find_id_btn');

//비밀번호 찾기 변수
const userId = document.getElementById('find_id_chk');
const userName = document.getElementById('find_name_chk');
const idcardFrontPw = document.getElementById('user_idcard_pw');
const idcardBackPw = document.getElementById('user_idcard1_pw');
const findPwBtn = document.getElementById('find_pw_btn');

findBtn.addEventListener('click', clickBtn);
findPwBtn.addEventListener('click', clickPwBtn);

//아이디찾기 버튼
function clickBtn() {
  if (findName.value !== '' && idcardFront.value !== '' && idcardBack.value !== '') {
    userData.forEach(vl => {
      if (findName.value === vl.username && idcardFront.value === vl.idcard_front && idcardBack.value === vl.idcard_back) {
        alert(`회원님의 아이디는 ${vl.userid} 입니다`);
      } /* else if (findName.value !== vl.username || idcardFront.value !== vl.idcard_front || idcardBack.value !== vl.idcard_back) {
        alert('다시 입력해주세요');
      } */
    });
  } else {
    alert('정보를 입력해주세요.');
  }
}


//비밀번호 찾기
function clickPwBtn() {
  if (userId.value !== '' && userName.value !== '' && idcardFrontPw.value !== '' && idcardBackPw.value !== '') {
    for (let i = 0; i < userData.length; i++) {
      if ((userId.value === userData[i].userid) && (userName.value === userData[i].username) && (idcardFrontPw.value === userData[i].idcard_front) && (idcardBackPw.value === userData[i].idcard_back)) {
        alert('회원님의 비밀번호는 : ' + userData[i].password + '입니다.');
      }
      /* else if ((userId.value !== userData[i].userid) || (userName.value !== userData[i].username) || (idcardFrontPw.value !== userData[i].idcard_front) || (idcardBackPw.value !== userData[i].idcard_back)) {
             alert('정보를 확인해주세요');
             break;
           } */
    }
  } else {
    alert('정보를 입력해주세요');
  }
}


//검색버튼 클릭시 검색창
const scr = document.querySelector('body');
const searchOpen = document.getElementById('search');
const searchClose = document.getElementById('close');

searchOpen.addEventListener('click', () => {
  scr.classList.add('search_on');
});
searchClose.addEventListener('click', () => {
  scr.classList.remove('search_on');
});