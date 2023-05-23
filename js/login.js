import userData from "./login_data.js";

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


//눈표시누르면 input type -> text 끄면 input type -> password
const loginId = document.getElementById('login_id');
const loginPw = document.getElementById('login_pw');
const loninBtn = document.getElementById('login_btn');

const eye = document.querySelector('.eye');
const eyeOff = document.querySelector('.eye_off');

eye.addEventListener('click', inputText);
eyeOff.addEventListener('click', inputPassword);

function inputText() {
  loginPw.type = 'text';
  eye.style.display = 'none';
  eyeOff.style.display = 'block';
}

function inputPassword() {
  loginPw.type = 'password';
  eye.style.display = 'block';
  eyeOff.style.display = 'none';
}

loninBtn.addEventListener('click', () => {
  for (let i = 0; i < userData.length; i++) {
    if ((loginId.value !== '' && loginPw.value !== '') && (loginId.value === userData[i].userid || loginPw.value === userData[i].password)) {
      if (loginId.value === userData[i].userid && loginPw.value === userData[i].password) {
        alert('로그인성공');
      } else if (loginId.value !== userData[i].userid && loginPw.value === userData[i].password) {
        alert('아이디가 틀렸습니다.');
      } else if (loginId.value === userData[i].userid && loginPw.value !== userData[i].password) {
        alert('비밀번호가 틀렸습니다.');
      } else if (loginId.value !== userData[i].userid && loginPw.value !== userData[i].password) {
        alert('일치하는 정보 없음');
      }
    }
  }
  if (loginId.value === '' && loginPw.value === '') {
    alert('아이디/비밀번호를 입력해주세요.');
  } else if (loginId.value !== '' && loginPw.value === '') {
    alert('비밀번호를 입력해주세요.');
  } else if (loginId.value === '' && loginPw.value !== '') {
    alert('아이디를 입력해주세요.');
  }

});


