var counterNext = 0;
var counterMain = 0;
function slideShowAnim(){
    
    var listaImgBg = document.getElementsByClassName('fondosHero');

    counterNext++;
    counterMain = counterNext-1;

    if(counterNext == listaImgBg.length){
        counterNext = 0;
    }

    if(counterMain < 0){
        counterMain = listaImgBg.length--;
    }
    for(var i = 0; i < listaImgBg.length; i++){
        listaImgBg[i].classList.remove('nextSlide');
        listaImgBg[i].classList.remove('mainSlide');
        listaImgBg[i].classList.remove('hiddenSlide');

        if(i == counterNext){
            listaImgBg[i].classList.add('nextSlide');
        }else if(i == counterMain){
            listaImgBg[i].classList.add('mainSlide');
        }else{
            listaImgBg[i].classList.add('hiddenSlide');
        }
    }
}