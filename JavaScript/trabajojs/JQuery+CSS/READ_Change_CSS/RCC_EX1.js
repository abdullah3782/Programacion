$(document).ready(function () {
    document.getElementById("aumentar1").addEventListener("click", aumentar, false)
});


function aumentar (){

var amm1=$("#noticia1").css("font-size");

amm1=parseInt(amm1)

$("#noticia1").css("font-size", amm1*2);

}

