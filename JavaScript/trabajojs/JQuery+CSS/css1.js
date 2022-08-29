$(document).ready(function () {

    document.getElementById("cursos").addEventListener("click",resaltacursos, false);
    document.getElementById("informacion").addEventListener("click",resaltaejemplos, false);

});

function resaltacursos () {

    $(".cursos").addClass("linkdestacacursos");

}



function resaltaejemplos() {

    $(".ejemplos").addClass("linkdestacacursos");

}