// Itero entre los distintos botones de descarga cv que tenga en el html, y le asigno la tarea de abrir el pdf

document.addEventListener("DOMContentLoaded", function() {
    var botonesDescargarCV = document.getElementsByClassName("boton-descargar-cv");

    for (var i = 0; i < botonesDescargarCV.length; i++) {

      botonesDescargarCV[i].addEventListener("click", function() {

        var url = "../interes/LuisHeredia.pdf";
        
        window.open(url, "_blank");
      });
    }
  });
  