// ANIMACION DEL HEADER PARA OCULAR AL HACER SCROLL

let lastScrollTop = 0;
const header = document.getElementById('site-header');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = '-150px';
  } else {
    header.style.top = '0';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});