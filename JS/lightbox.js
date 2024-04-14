const imagenes = document.querySelectorAll('.img-galeria');
const contenedorImagen = document.querySelector('.contenedor-imagen');
const mostrarImg = document.querySelector('.img-mostrar');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', () =>{
        agregarImagen(imagen.getAttribute('src'), imagen.getAttribute('alt'))
    })
})

const agregarImagen = (srcImagen, altImagen) =>{
    contenedorImagen.classList.toggle('move')
    mostrarImg.src = srcImagen;
    mostrarImg.alt = altImagen;
}

contenedorImagen.addEventListener('click', ()=>{
    contenedorImagen.classList.toggle('move')
})