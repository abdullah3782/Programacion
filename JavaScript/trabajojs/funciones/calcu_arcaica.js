//si quiero que me pregunte todo de nuevo sin darle al F5 (en chrome no funciona)
var repetir="si"
//lo que hace es sumar y ya luego se puede usar esta funcion donde quiera sumar
function suma(num1, num2) {
    alert("la suma es " + (num1 + num2));

}
//lo que hace es sumar y ya luego se puede usar esta funcion donde quiera restar

function restar(num1, num2) {
    alert("la resta es " + (num1 - num2));

}
//lo que hace es sumar y ya luego se puede usar esta funcion donde quiera multiplicar

function multiplicacion(num1, num2) {
    alert("la multiplicación es " +( num1 * num2));

}
//lo que hace es sumar y ya luego se puede usar esta funcion donde quiera dividir

function division (num1, num2) {


    alert("La divisíon es " + (num1/num2))
}
//para que me pregunte que operación quiero hacer
var operacion=prompt("Que operaciion quieres realizar?")
//para poner el primer digitos
var operador1=parseInt(prompt("Pon el primer dígito"))
//para poner el segundo digitos
var operador2=parseInt(prompt("Pon el segundo dígito"))
//do="haz esto"
do {
//si operacion es igual a sumar, que me ejecute la funcioon de suma
if (operacion=="sumar"){

    suma(operador1,operador2)

}
//si operacion es igual a sumar, que me ejecute la funcioon de restar
else if (operacion=="restar"){

    restar(operador1, operador2)
    
    }
//si operacion es igual a sumar, que me ejecute la funcioon de multiplicar
    else if (operacion=="multiplicación"){

        multiplicacion(operador1, operador2)
        
        }
//si operacion es igual a sumar, que me ejecute la funcioon de dividir
        else if (operacion=="división"){

            division(operador1, operador2)
            //y si ningun "if" es valido pues nos saldrá este alert
            }
            else {

                alert("Pronto meteremos esta función mi pana")
            }
            //que nos pregunte si queremos repetir las operaciones
        repetir=prompt("Desea repetir las operacíones?")
        //si le damos a "si" en el prompt, ejecutará todo el código que está dentro del "Do" y "While"
    }while(repetir=="si")