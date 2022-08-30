//Para que funcione todo después de ejecutar toda la página
$(document).ready(function () {
    // para que pillé ID "cursos" y que cuando hagas "click" que lo que dice la "funcion" que le hemos indicado en este caso ""linkdestacacursos""
    document.getElementById("cursos").addEventListener("click", resaltacursos, false);
    //lo mismo que la línea de arriba
    document.getElementById("informacion").addEventListener("click", resaltaejemplos, false);

});
//una funcion 
function resaltacursos() {
    //Esto funciona como on/off y va con checkbox, cuando sale el tick está activado y cuando no sale no está activo
    $(".cursos").toggleClass("linkdestacacursos");
}



function resaltaejemplos() {
    $(".ejemplos").toggleClass("linkdestacacursos");
}