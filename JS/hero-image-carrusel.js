// var bgCounter = 0;
// function heroSlideshow(){
//     var listaImgBg = [
//         "linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-principal)), url('imagenes/hero-image/hero-image1.jpg')",
//         "linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-principal)), url('imagenes/hero-image/hero-image2.jpg')",
//         "linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-principal)), url('imagenes/hero-image/hero-image3.jpg')",
//         "linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-principal)), url('imagenes/hero-image/hero-image4.jpg')"
//     ];

//     bgCounter++;

//     if(bgCounter == listaImgBg.length){
//         bgCounter = 0;
//     };

//     document.querySelector('.banner').style.backgroundImage = listaImgBg[bgCounter];
// }

// var counterNext = 0;
// var counterMain = 0;
// function slideShowAnim(){
    
//     var listaImgBg = document.getElementsByClassName('fondosHero');

//     counterNext++;
//     counterMain = counterNext-1;

//     if(counterNext == listaImgBg.length){
//         counterNext = 0;
//     }

//     if(counterMain < 0){
//         counterMain = listaImgBg.length--;
//     }
//     for(var i = 0; i < listaImgBg.length; i++){
//         listaImgBg[i].classList.remove('nextSlide');
//         listaImgBg[i].classList.remove('mainSlide');
//         listaImgBg[i].classList.remove('hiddenSlide');

//         if(i == counterNext){
//             listaImgBg[i].classList.add('nextSlide');
//         }else if(i == counterMain){
//             listaImgBg[i].classList.add('mainSlide');
//         }else{
//             listaImgBg[i].classList.add('hiddenSlide');
//         }
//     }
// }