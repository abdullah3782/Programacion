var num1=prompt("Pon el primer dígito")
var num2=prompt("Pon el segundo dígito")
var operacion=prompt("Elije la operación, sumar, restar, multiplicar o dividir")
if (!isNaN(num1) && !isNaN(num2)) {


if (operacion=="sumar") {

alert(parseInt(num1) + parseInt (num2))

}else if (operacion=="restar") {

alert(num1-num2)

}else if (operacion=="multiplicar") {

    alert(num1*num2)
    
}else if (operacion=="dividir") {

    alert(num1/num2)
    
}else {

    alert("ERROR404")
}

}
else {

if (typeof(num1)=="string" && typeof(num2)=="string") {

alert("Pon bien los datos anda")

}
else {

    alert("En los 2 has puesto letra")
}

}