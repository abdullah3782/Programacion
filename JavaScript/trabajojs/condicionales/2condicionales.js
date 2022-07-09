var cuerpo=document.getElementById("cuerpo")
var colorWeb=prompt("Pon uno de estos 3 colores azul/verde/rojo") .toLowerCase();
if (colorWeb=="rojo") {
cuerpo.style.backgroundColor="red"
}
else if (colorWeb=="azul"){
cuerpo.style.backgroundColor="blue"
}

else if (colorWeb=="verde") {
cuerpo.style.backgroundColor="green"

}

else {

alert("este colo no existe aquí")

}
