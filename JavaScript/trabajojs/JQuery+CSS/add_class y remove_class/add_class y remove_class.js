//Para que funcione todo después de ejecutar toda la página
$(document).ready(function () {
    // para que pillé ID "cursos" y que cuando hagas "click" que lo que dice la "funcion" que le hemos indicado en este caso ""linkdestacacursos""
    document.getElementById("cursos").addEventListener("click", resaltacursos, false);
    //lo mismo que la línea de arriba
    document.getElementById("informacion").addEventListener("click", resaltaejemplos, false);

});
//una funcion 
function resaltacursos() {
    //cuando hagas click encima de "cursos" se borre lo marcado en la encima de la informaciion addcicional
    $(".ejemplos").removeClass("linkdestacacursos");
    //cuando hagas click encima de "cursos" te lo marque, en este caso en rojo
    $(".cursos").addClass("linkdestacacursos");

}



function resaltaejemplos() {
    //cuando hagas click encima de "informacion addicional" se borre lo marcado encima de "cursos"
    $(".cursos").removeClass("linkdestacacursos");
    //cuando hagas click encima de "cursos" te lo marque, en este caso en rojo
    $(".ejemplos").addClass("linkdestacacursos");

}