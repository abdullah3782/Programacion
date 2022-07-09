var num1=prompt("Pon el primer número");
var num2=prompt("Pon el segundo número");
//isNaN omprueba si lo que se escribe dentro de los () no es un numero y si escribimos !isNaN así, hace todo lo contrario
if (!isNaN (num1) && !isNaN (num2)) {

var operacion=prompt("Que quieres hacer, sumar, restar, multiplicacón o divisón");

if (operacion=="sumar"){
//parseInt para que el javascript reconozca a los numeros como numeros y no como una letra

    alert (parseInt(num1) + parseInt(num2))
}

else if (operacion=="restar") {
//parseInt para que el javascript reconozca a los numeros como numeros y no como una letra

    alert (parseInt(num1) - parseInt(num2))


}

else if (operacion=="multiplicación" || operacion=="multiplicacion") {
//parseInt para que el javascript reconozca a los numeros como numeros y no como una letra

    alert (parseInt(num1) * parseInt(num2))
 
}

else if (operacion=="divisón" || operacion=="division") {
//parseInt para que el javascript reconozca a los numeros como numeros y no como una letra

    alert (parseInt(num1) / parseInt(num2))

}

else {
    alert("Operacion no contemplada")
}

}

else {
    //typeof detecta si has puesto una letra en vez de un numero
    if (typeof (num1)=="string" || typeof (num2)=="string") {
        alert ("has puesto valores numericos")
    }
    else {
      alert ("Error muy grave")  
    }
}