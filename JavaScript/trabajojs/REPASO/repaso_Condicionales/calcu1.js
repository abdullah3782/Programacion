var num1=prompt("Pon el primer número")
var num2=prompt("Pon el segundos dígito")
if (!isNaN (num1) && !isNaN (num2)) {

 var operacion=prompt("Que operación quieres hacer, sumar, restar, multiplicar o dividir")

 if (operacion=="sumar") {

    alert(parseInt (num1) + parseInt(num2))
}

else if (operacion=="restar"){
    alert(parseInt (num1) - parseInt(num2))
}

else if (operacion=="mulplicacion" || operacion=="multiplicación") {

alert(parseInt (num1) * parseInt (num2))

}

else if (operacion=="dividir" || operacion=="division") {

alert(parseInt(num1)/parseInt(num2))

}

else {

    alert("!Error404¡")
}

}

else {

if (typeof(num1)=="string" || typeof(num2)=="string") {

alert("Datos incorrectos")
}
else {
    alert("datos como que no molan")
}
}