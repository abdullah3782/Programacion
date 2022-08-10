$(document).ready(function () {
    //asi simplificaré estas 2 líneas
    //var z=document.getElementById("cerrar");
    //z.addEventListener("click", cerrar_baner, false);
document.getElementById("cerrar").addEventListener("click", cerrar_baner, false)
document.getElementById("imagen1").addEventListener("click", carrito, false)
});


function cerrar_baner () {

$("#banner").remove();


}

function carrito () {

   $("#imagen1").replaceWith("<div id='imagen11'> Comprado!</div>");
    
    
    }