# FILA (팀 기획, 개인프로젝트)
> FILA 사이트를 참고하여 리뉴얼한 개인프로젝트 (적응형웹)입니다.

![메인화면](https://github.com/Tae-Hyun98/FILA-project/assets/119056869/f7672f96-e27e-450e-871f-46681c279af7)  


- ## 목차  
  ### 1. [프로젝트 소개](#1-프로젝트-소개)
  ### 2. [제작기간](#2-제작-기간--20230428--2023524)
  ### 3. [사용한 기술스택](#3-사용한-skills)
  ### 4. [페이지 구성](#4-페이지-구성-1)
  ### 5. [주요기능(코드)](#5-주요기능)  
     - #### [검색기능](#5-1-검색기능)  
     - #### [리뷰등록기능](#5-2-상품-리뷰문의기능)  
  ### 6. [느낀점](#6-느낀점-1)


<br/> 

## 1. 프로젝트 소개
- FILA 사이트를 참고하여 리뉴얼한 개인프로젝트 (적응형웹) 입니다.

- 팀원 6명과 함께 자사 및 경쟁사 사이트를 분석후 기획을 하고, 프로토타입시안과 디자인시안을 도출한뒤 작업을 하였습니다.

- 퍼블리싱 및 기능구현은 **개인 100%** 작업입니다.

- Parcel번들러를 사용하여 개발환경을 구축하여 개발하였으며, 라이브러리는 swiper.js, gsap.js를 사용하였고, 대부분 코드는 Vanilla JS로 구현되었습니다.  

- 주요기능으로는 **상품검색, 상품필터, 리뷰, 상품문의, 로그인/회원가입 유효성체크** 등이 있습니다.
  
- 프로젝트에 사용한 데이터들은 직접 DataSet을 구축하여 사용하였습니다.

      
  <br/>

## 2. 제작 기간 : 2023.04.28 ~ 2023.5.24

 <br/>
 
## 3. 사용한 Skills  
  **Language**  
  <a href="#!"><img src="https://img.shields.io/badge/html5-E34F26?style=flat&logo=html5&logoColor=white"/></a>
  <a href="#!"><img src="https://img.shields.io/badge/css3-1572B6?style=flat&logo=css3&logoColor=white"/></a>
  <a href="#!"><img src="https://img.shields.io/badge/jquery-0769AD?style=flat&logo=jquery&logoColor=white"/></a>
  <a href="#!"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white"/></a>

  **Library**  
  <a href="#!"><img src="https://img.shields.io/badge/swiper.js-6332F6?style=flat&logo=swiper&logoColor=white"/></a>
  <a href="#!"><img src="https://img.shields.io/badge/gsap.js-88CE02?style=flat&logo=greensock&logoColor=white"/></a>
    
  **Tools**  
  <a href="#!"><img src="https://img.shields.io/badge/visual studio code-007ACC?style=flat&logo=visualstudiocode&logoColor=white"/></a>
  <a href="#!"><img src="https://img.shields.io/badge/github-181717?style=flat&logo=github&logoColor=white"/></a>

  <br/>
  
## 4. 페이지 구성  
페이지는 **메인페이지, 서브페이지(상품목록), 디테일페이지(상품상세정보 및 리뷰/문의), 로그인/회원가입페이지, 검색결과페이지**로 구성되어있습니다.

<br/>

## 5. 주요기능  
### 5-1. 검색기능  
![검색기능영상](https://github.com/Tae-Hyun98/FILA-project/assets/119056869/5d8ff80f-e1b0-4cd4-ab93-4952bf15326a)

<details>  
    <summary><span font-weight:bold>코드보기</span></summary>  
        
 #### 검색창의 Input을 통해 입력된값을 DataSet에서 입력된값이 포함된 이름을 필터하고 필터된 값들을 JSON형식으로 변환을하여 setItem으로 값을 search페이지로 전달합니다.  
```javascript
searchBtn.addEventListener('click', () => {
  let word = goInput.value.toLowerCase();
    
  if (word !== '') {
    let result = subData.filter(item => item.name.includes(word));
    goInput.innerHTML = ''
    location.href = 'search.html'
    localStorage.setItem('result', JSON.stringify(result))
    localStorage.setItem('word', word)
  } else if (word === '') {
    console.log('error')
  }
})
```

#### getItem으로 전달된 값을 받으면서 JSON형태의 데이터를 객체형태로 변환하여 저장합니다. 전달된 값이 없거나 length가 0이면 검색결과가 없다고 표시하며, 있다면 상품들을 출력하는 함수인 paginationFunc()함수로 상품들을 출력합니다.  
```javascript
const localData = JSON.parse(localStorage.getItem('result'));
let words = localStorage.getItem('word')

if (localData === '' || localData.length === 0) {
  productList.innerHTML = `<h1>검색결과 해당하는 상품이 없습니다.</h1>`
} else {
  paginationFunc(localData)
}
```

</details>

<br/>
  
### 5-2. 상품 리뷰/문의기능  
![상품리뷰영상](https://github.com/Tae-Hyun98/FILA-project/assets/119056869/6624c8e6-8c29-4c8c-9b72-2d06baf2d00a)

<details>
  <summary>코드보기</summary>  
  
#### 리뷰 및 문의 기능은 조건문으로 값이 비어있지 않다면 등록이 되도록 설계를 하였고, 값을 입력하고 등록하기 버튼을 누를시 함수가 호출되어 입력된 값들을 전달받아 생성된 엘리먼트들에게 appendChild를 이용하여 자식노드로 전달된 값이 추가되어 리뷰를 생성하도록 하였으며, 리뷰가 등록된후 입력이 되어있던 Input값들을 초기화하도록 만들었습니다.
```javascript
const addBtn = document.getElementById('add_btn');
const inputId = document.getElementById('input_id');
const inputTxt = document.getElementById('input_txt');
const reviewList = document.querySelector('.review_list');
const starBtn = document.querySelector('.rating');
const raingIcon = document.querySelectorAll('.rating i');
const today = new Date();
const dayFormat = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDate();
let count = 1;

addBtn.addEventListener('click', reviewAdd);

function reviewAdd() {
  if (inputId.value != '' && inputTxt.value != '') {
    const Li = document.createElement('li');
    const Pno = document.createElement('p');
    const Pnum = document.createTextNode(count);
    const Pstar = document.createElement('p');
    const Ptext = document.createElement('p');
    const Pid = document.createElement('p');
    const Ptoday = document.createElement('p');
    const Today = document.createTextNode(dayFormat);
    const Pdel = document.createElement('button');
    const del = document.createTextNode('X');
    const userId = document.createTextNode(inputId.value);
    const userTxt = document.createTextNode(inputTxt.value);

    Li.appendChild(Pno);
    Li.appendChild(Pstar);
    Li.appendChild(Ptext);
    Li.appendChild(Pid);
    Li.appendChild(Ptoday);
    Li.appendChild(Pdel);

    Ptoday.appendChild(Today);
    Pno.appendChild(Pnum);
    Ptext.appendChild(userTxt);
    Pid.appendChild(userId);
    Pdel.appendChild(del);
    Pdel.setAttribute('class', 'delete');
    Pstar.setAttribute('class', 'star');
    reviewList.appendChild(Li);

    inputId.value = '';
    inputTxt.value = '';
    count++;
    
    //별점출력
    Pstar.innerHTML = starBtn.innerHTML;
    
    raingIcon.forEach((item) => {
    item.setAttribute('class', 'far fa-star rating_star');
  })
  } else {
    alert('값을 입력하세요');
  }
  
}
```  

#### 생성된 리뷰 삭제시 X버튼을 누르면 클릭된 delete버튼의 인덱스 번호를 찾아 해당 인덱스의 부모노드전체를 삭제하는 방식으로 구현하였습니다.
```javascript
let delBtn = document.querySelectorAll('.delete');
    for (let i = 0; i < delBtn.length; i++) {
      delBtn[i].addEventListener('click', function () {
        if (delBtn[i].parentNode.parentNode) {
          this.parentNode.parentNode.removeChild(this.parentNode);
        }
      });
    }
```
</details>

## 6. 느낀점
FILA사이트를 사용자의 UX경험을 중점으로 팀원들과 기획하는 과정을 통해 협업에서의 소통능력을 기를수 있게되었고, 의견을 도출할 수 있는 능력을 기를수 있었으며, 다시한번 사용자의 입장에서 사이트를 사용했을때의 경험을 생각해볼수 있는 계기가 되었습니다.  


또한, 퍼블리싱 및 기능구현을 통하여 더욱 효율적인 마크업을 할수 있게 되었고, 자주 쓰이거나 재사용이 필요한 코드들을 함수로 정의해서 사용하면 효율적으로 코드를 짤수 있다는 것을 다시금 깨닫게 되었으며, 
DOM에 엘리먼트 및 노드 추가시 appendChild보다 innerHTML을 사용하여 추가하는것이 더욱 효율적이라는 것을 알게 되었습니다.

