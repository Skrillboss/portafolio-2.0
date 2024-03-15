// FRAMEWORK PARA EL SLIDE DE PROYECTOS 

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    initialSlide: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // ANIMACION DEL HEADER PARA OCULAR AL HACER SCROLL

  let lastScrollTop = 0;
const header = document.getElementById('site-header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.top = '-150px';
    } else {
        header.style.top = '0';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// SUBIR 100 PIXELES EL SCROLL AL REALIZAR EL COMPORTAMIENTO DE UN HREF, CON UN DESPLAZAMIENTO SUAVE

function scrollToElement(event) {
  event.preventDefault();

  const targetId = event.target.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  const offset = 100;

  if (targetElement) {
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
      });
  }
}
