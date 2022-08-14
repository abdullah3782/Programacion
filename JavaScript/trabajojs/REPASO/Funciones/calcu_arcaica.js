
var repetir="si"

do {
    
function sumar(num1, num2) {

    alert("la suma es " + (parseInt(num1) + parseInt(num2)));

}

function restar(num1, num2) {

    alert("la suma es " + (parseInt(num1) - parseInt(num2)))

}

function multiplicar(num1, num2) {

    alert("la suma es " + (parseInt(num1) * parseInt(num2)))

}

function dividir(num1, num2) {

    alert("la suma es " + (parseInt(num1) / parseInt(num2)))

}

var primero = prompt("Pon el primer dígito ")
var segundo = prompt("Pon el segundo dígito ")
var operacion = prompt("Que operación quieres realizar ?")

if (operacion == "sumar") {

    sumar(primero, segundo)

} else if (operacion == "restar") {

    restar(primero, segundo)

} else if (operacion == "multiplicar") {

    multiplicar(primero, segundo)

} else if (operacion == "dividir") {

    dividir(primero, segundo)

} else {

    alert("Aún no está disponible")
}

repetir=prompt("Quieres repetir las operaciones ?")

}while(repetir=="si")