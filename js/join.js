const userId = document.getElementById('user_id');
const userPw = document.getElementById('user_pw');

const idSpan = document.querySelector('.id_valid');
const pwSpan = document.querySelector('.pw_valid');

const idRule = document.querySelector('.id_rule');
const pwRule = document.querySelector('.pw_rule');

const idPattern = /^[a-z0-9]{5,15}$/;
const pwPattern = /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{5,15}$/
const namePattern = /^[가-힣]{2,}$/;
const idcardPattern = /[0-9]{6,}/;

const equlChk = document.getElementById('user_pw_chk');
const eqSpan = document.querySelector('.eq_chk');

const userName = document.getElementById('user_name');
const nameSpan = document.querySelector('.chk_name');

const userIdcard = document.getElementById('user_idcard');
const userIdcard1 = document.getElementById('user_idcard1');
const idcardSpan = document.querySelector('.idcard_chk');

const userGender = document.getElementById('user_gender');
const genderSpan = document.querySelector('.gender_chk');

const userPhone = document.getElementById('phone1');
const userPhone1 = document.getElementById('phone2');
const userPhone2 = document.getElementById('phone3');


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
  const userValue = userId.value;
  if (!idPattern.test(userValue) || userValue === '') {
    userId.focus();
    idSpan.innerHTML = '사용불가능한 아이디';
    idSpan.style.color = 'red';
    idRule.style.display = 'block';
    return false;
  } else {
    idSpan.innerHTML = '사용가능한 아이디'
    idSpan.style.color = 'blue';
    idRule.style.display = 'none';
  }
}
//비밀번호 유효성검사
function checkPw() {
  const userValuePw = userPw.value;
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
    eqSpan.innerHTML = '비밀번호가 일치합니다.'
    eqSpan.style.color = 'green';
  } else {
    equlChk.select();
    eqSpan.innerHTML = '비밀번호가 일치하지않습니다.'
    eqSpan.style.color = 'red';
  }
}

//이름
function checkName() {
  const nameValue = userName.value;
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
  const idcardValue = userIdcard.value;
  const idcardLength = userIdcard.value.length;
  if (!idcardPattern.test(idcardValue) || idcardValue === '' || idcardLength <= 5) {
    idcardSpan.innerHTML = '형식을 지켜주세요'
    userIdcard.style.background = 'none'
  } else {
    userIdcard1.focus();
    userIdcard.style.background = 'lightsteelBlue';
  }
}

//성별선택
function checkGender() {
  const genderValue = userGender.value;
  if (genderValue === '') {
    genderSpan.innerHTML = '성별을 선택해주세요';
    genderSpan.style.color = 'red';
  } else {
    genderSpan.innerHTML = '';
  }
}

//휴대전화
function checkPhone() {
  const phoneValue = userPhone.value;
  const phoneValue1 = userPhone1.value;

  if (phoneValue.length >= 3) {
    userPhone1.focus();
  }
  if (phoneValue1.length >= 4) {
    userPhone2.focus();
  }
}

//약관동의
const allTerms = document.getElementById('all_terms');
const terms = document.querySelectorAll('.term');
const term01 = document.getElementById('term_1');
const term02 = document.getElementById('term_2');
const term03 = document.getElementById('term_3');
const term04 = document.getElementById('term_4');

allTerms.addEventListener('click', allCheck);
term01.addEventListener('click', termCheck);
term02.addEventListener('click', termCheck);
term03.addEventListener('click', termCheck);
term04.addEventListener('click', termCheck);

//전체체크함수
function allCheck() {
  if (allTerms.checked) {
    terms.forEach((e) => {
      e.checked = true;
    });
  } else {
    terms.forEach((e) => {
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
const joinBtn = document.getElementById('join_btn');

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