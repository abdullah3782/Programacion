var cuerpo=document.getElementById("cuerpo")
var colorWeb=prompt("Pon uno de estos 3 colores azul/verde/rojo") .toLowerCase();
//"&&="y"" != es diferente que
if (colorWeb !="azul" && colorWeb!="verde" && colorWeb!="rojo") {
alert ("esto no esta aquí busca en otro lado")
}
else if (colorWeb=="azul"){
cuerpo.style.backgroundColor="blue"
}

else if (colorWeb=="verde") {
cuerpo.style.backgroundColor="green"

}
else {
    cuerpo.style.backgroundColor="red"
    
    }