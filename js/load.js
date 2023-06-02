const header = document.querySelector('.header');

fetch('header.html')
  .then(res => res.text())
  .then(head => header.innerHTML = head);


const footer = document.querySelector('.footer');

fetch('footer.html')
  .then(res => res.text())
  .then(data => footer.innerHTML = data);

  