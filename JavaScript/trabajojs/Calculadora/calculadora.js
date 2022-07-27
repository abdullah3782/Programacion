var cifras="";
var acumulado=0
function display_numero (numero) {

document.getElementById("display").value=cifras+numero;
cifras=document.getElementById("display").value;

};

function suma () {

acumulado=acumulado+parseInt(cifras)
document.getElementById("display").value=acumulado
cifras="";

}

function resta () {

    acumulado=acumulado-cifras
    document.getElementById("display").value=acumulado
    cifras="";
    
    }
    
