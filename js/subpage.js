import subData from "./sub_data.js";

const subProduct = document.querySelector('.list_wrap');
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < subData.length; j++) {
    const subDiv = document.createElement('div');
    subDiv.setAttribute('class', 'product_box');

    const subImg = document.createElement('img');
    subImg.setAttribute('src', subData[j].src);

    const detailDiv = document.createElement('div');

    subDiv.appendChild(subImg);
    subDiv.appendChild(detailDiv);
    subProduct.appendChild(subDiv);
  }
}