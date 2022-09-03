$(document).ready(function () {
    document.getElementById("aumentar1").addEventListener("click", aumentar, false)
    document.getElementById("disminuirr").addEventListener("click", disminuir, false)

});


function aumentar (){

var amm1=$("#noticia1").css("font-size");

amm1=parseInt(amm1)

$("#noticia1").css("font-size", amm1*1.3);

}


function disminuir (){

    var dis1=$("#noticia1").css("font-size");
    
    dis1=parseInt(dis1)
    
    $("#noticia1").css("font-size", dis1-1.3);
    
    }
    