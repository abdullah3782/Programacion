var cifras="";
var p_operacion
var acumulado=0
var sumar=false
var restar=false
function display_numero (numero) {

document.getElementById("display").value=cifras+numero;
cifras=document.getElementById("display").value;

};

function suma () {

acumulado=acumulado+parseInt(cifras)
document.getElementById("display").value=acumulado
cifras="";
sumar=true
}






function resta () {
if (sumar){ 
acumulado=acumulado+parseInt(cifras)
document.getElementById("display").value=acumulado
}else 
{
acumulado=acumulado-restar
document.getElementById("display").value=acumulado
}

cifras="";
sumar=false
restar=true
    }
 
    











function resultado () {

if (sumar) {
document.getElementById("display").value=acumulado+parseInt(cifras)
}
else if (restar) {


    document.getElementById("display").value=acumulado-cifras
}

}
