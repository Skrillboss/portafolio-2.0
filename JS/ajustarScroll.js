// SUBIR 80 PIXELES EL SCROLL AL REALIZAR EL COMPORTAMIENTO DE UN HREF, CON UN DESPLAZAMIENTO SUAVE

function scrollToElement(event) {
    event.preventDefault();
  
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const offset = 80;
  
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
  