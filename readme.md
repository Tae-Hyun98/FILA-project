![header](https://capsule-render.vercel.app/api?type=Rect&color=002053&height=150&section=header&text=F%20I%20L%20A&fontSize=60&fontColor=fff&animation=fadeIn)

# FILA (팀 기획, 개인프로젝트)
> FILA 사이트를 참고하여 리뉴얼한 개인프로젝트 (적응형웹)입니다.

![메인화면](https://github.com/Tae-Hyun98/FILA-project/assets/119056869/f7672f96-e27e-450e-871f-46681c279af7)


- ## 목차
    ### 1. [프로젝트 소개](#1-프로젝트-소개)
    ### 2. [제작기간](#2-제작-기간)
    ### 3. [사용한 기술스택](#3-사용한-skills)
    ### 4. [페이지 구성](#4-페이지-구성-1)
    ### 5. [주요기능(코드)](#5-주요기능)
    ### 6. [느낀점](#6-느낀점-1)

     
## 1. 프로젝트 소개
- FILA 사이트를 참고하여 리뉴얼한 개인프로젝트 (적응형웹) 입니다.

- 팀원 6명과 함께 자사 및 경쟁사 사이트를 분석후 기획을 하고, 프로토타입시안과 디자인시안을 도출한뒤 작업을 하였습니다.

- 퍼블리싱 및 기능구현은 **개인 100%** 작업입니다.

- Parcel번들러를 사용하여 개발환경을 구축하여 개발하였으며, 라이브러리는 swiper.js, gsap.js를 사용하였고, 대부분 코드는 Vanilla JS로 구현되었습니다.  

- 주요기능으로는 **상품검색, 상품필터, 리뷰, 상품문의, 로그인/회원가입 유효성체크** 등이 있습니다.  

## 2. 제작 기간  
- 2023.04.28 ~ 2023.5.~
 
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
  
## 4. 페이지 구성  
페이지는 **메인페이지**, **서브페이지(상품목록)**, **디테일페이지(상품상세정보 및 리뷰/문의)**, **로그인/회원가입페이지**로 구성되어있습니다.


## 5. 주요기능  
- ### 5-1. 검색기능  
### 검색창의 Input을 통해 입력된값을 DataSet에서 입력된값이 포함된 이름을 필터하고 필터된 값들을 JSON형식으로 변환을하여 setItem으로 값을 search페이지로 전달합니다.**  
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
**getItem으로 전달된 값을 받으면서 JSON형태의 데이터를 객체형태로 변환하여 저장합니다. 전달된 값이 없거나 length가 0이면 검색결과가 없다고 표시하며, 있다면 상품들을 출력하는 함수인 paginationFunc()함수로 상품들을 출력합니다.**  
```javascript
const localData = JSON.parse(localStorage.getItem('result'));
let words = localStorage.getItem('word')

if (localData === '' || localData.length === 0) {
  productList.innerHTML = `<h1>검색결과 해당하는 상품이 없습니다.</h1>`
} else {
  paginationFunc(localData)
}
```


<details>  
    <summary>검색기능시연사진</summary>  
        
  - ### 검색화면  
  ![search](https://github.com/Tae-Hyun98/FILA-project/assets/119056869/37cd4806-08ea-454c-b32b-7c52126bf96f)  

  - ### 검색결과화면  
  ![search](https://github.com/Tae-Hyun98/FILA-project/assets/119056869/575e9a6b-9990-402a-ac27-90a2bb6644aa)  

  - ### 검색실패화면  
  ![search](https://github.com/Tae-Hyun98/FILA-project/assets/119056869/7fa15a96-a980-4c58-89c6-8be178dae5ff)  

</details>


## 6. 느낀점
- FILA사이트를 사용자의 UX경험을 중점으로 팀원들과 기획하는 과정을 통해 협업에서의 소통능력을 기를수 있게되었고, 의견을 도출할 수 있는 능력을 기를수 있었으며, 다시한번 사용자의 입장에서 사이트를 사용했을때의 경험을 생각해볼수 있는 계기가 되었습니다.  
- 또한, 퍼블리싱 및 기능구현을 통하여 더욱 효율적인 마크업을 할수 있게 되었고, 

![Footer](https://capsule-render.vercel.app/api?type=waving&color=002053&height=200&section=footer)
