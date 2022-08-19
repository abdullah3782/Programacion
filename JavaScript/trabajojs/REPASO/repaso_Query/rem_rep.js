$(document).ready(function () {
    
var i=document.getElementById("cerrar").addEventListener("click",  quitar_baner, false )
var imagenes=document.querySelectorAll("#carrete img")
for (var i=0;imagenes.length; i++ ) {

    imagenes[i].addEventListener("click", carrito, false)
    
    
    }
});

function quitar_baner () {


    $("#banner").remove();


}

function carrito (num) {

    if (num.target==imagen1) {

        $("#imagen1").replaceWith("<div id='imagen1'> Agregado al carro </div>");
    
    }

    if (num.target==imagen2) {

        $("#imagen2").replaceWith("<div id='imagen2'> Agregado al carro </div>");
    
    }  if (num.target==imagen3) {

        $("#imagen3").replaceWith("<div id='imagen3'> Agregado al carro </div>");
    
    }  if (num.target==imagen4) {

        $("#imagen4").replaceWith("<div id='imagen4'> Agregado al carro </div>");
    
    }

    
}