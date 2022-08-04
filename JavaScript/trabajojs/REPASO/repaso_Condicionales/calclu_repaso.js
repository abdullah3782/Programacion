var num1=prompt("Pon el primer dígito")
var num2=prompt("Pon el segundo dígito")
var operacion=prompt("Que operación quieres hacer, sumar, restar, multiplicar o dividir")

if (!isNaN (num1) && !isNaN(num2)) {

if (operacion=="sumar") {

alert(parseInt (num1) + parseInt (num2)) 

} else if (operacion=="restar") {

    alert(parseInt (num1) - parseInt(num2))

}else if (operacion=="multiplicar") {

    alert(parseInt (num1) * parseInt(num2))

}else if (operacion=="dividir") {

    alert(parseInt (num1) / parseInt(num2))

}else {

    alert("ERROR 404")
}

}
else {

    if (typeof(num1)=="string" || typeof(num2)=="string") {

        alert("Pon numeros")
    }
else { 

alert("Deja de inventar las cosas anda")

}
}