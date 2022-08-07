//Código js solo para ocultar una imagen
/*
var imagenes=document.querySelectorAll("#carrete img")
for (var i=0; i<imagenes.length; i++) {

imagenes[i].style.visibility="hidden"
}*/


//Código Jquery para ocultar imagen

/*
$(document).ready(function () {
   
    $("#carrete img").hide();
});
*/



//Código js para hacer que la imagen tarde unos milesegundos en aparecer y modificar su altura y anchura
/*
var anuncio=document.getElementById("anuncio")
anuncio.style.width="500px"
anuncio.style.height="500px"
anuncio.innerHTML="¡Vende!"
*/

//Código JQuery para hacer que la imagen tarde unos milesegundos en aparecer y modificar su altura y anchura

$(document).ready(function () {

$("#anuncio").width(500)
.height(500)
.hide()
.fadeIn(5000);

});