$(document).ready(function () {
    document.getElementById("aumentar1").addEventListener("click", aumentar, false)
    document.getElementById("disminuir1").addEventListener("click", disminuir, false)

});


function aumentar(e) {

    var zonaActuacion;

    if (e.target == aumentar1) {

        zonaActuacion = "#noticia1"

    } else if

        (e.target == aumentar2) {

        zonaActuacion = "#noticia2"

    } else if

        (e.target == aumentar3) {

        zonaActuacion = "#noticia3F"

    }















    var amm1 = $("#noticia1").css("font-size");

    amm1 = parseInt(amm1)

    $("#noticia1").css("font-size", amm1 * 1.3);

}


function disminuir() {

    var dis1 = $("#noticia1").css("font-size");

    dis1 = parseInt(dis1)

    $("#noticia1").css("font-size", dis1 - 1.3);

}
