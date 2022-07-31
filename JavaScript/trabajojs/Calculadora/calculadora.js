//Lo que se escriba en la pantalla de la calculadora, se almacenará en cifras Y NO EN ACUMULADO A NO SER QUE LE DE AL "="
var cifras="";
//por ejemplo 6+5=11, el 11 se guardará en "acumulado"
var acumulado=0
//no se explicarlo aun
var sumar=false
//no se explicarlo aun
var restar=false
//por si la primera operación no es la "suma" eso lo que hace es poner acumulado=0, ya que cifras será 0 acumulado también.
var p_operacion
//para poder escribir los numero en el display
function display_numero (numero) {
///no se explicarlo aun
document.getElementById("display").value=cifras+numero;
//lo que esté almacenado en cifras, lo muestre en el display
cifras=document.getElementById("display").value;
}

// es la funcion suma, lo que esté dentro de el se enlazará con el botón de suma para que se pueda ejecutar la suma
function suma () {
//en caso de que haya hecho una resta
if (restar) {
//si antes de la suma, hemos hecho una resta, pues que lo que haya sido almacenado en el acumulado me lo reste con la nueva operacion ESCRITA EN LA PANTALLA (CIFRAS)
acumulado=acumulado-parseInt(cifras)
document.getElementById("display").value=acumulado

}
//si antes de hacer la SUMA no he hecho nada, ejecutará el código de abajo
else {
//lo que esté en acumulado, en este caso que es una suma, pues que me lo sume con el número que vaya poner en el display
acumulado=acumulado+parseInt(cifras)
//lo que esté almacenado en acumulado, lo muestre en el display
document.getElementById("display").value=acumulado
}
//para que la "cifras" en este caso lo que se escribe en la pantalla de la calculadora, esté en vacio depsues de realizar varias operaciones 
cifras="";
sumar=true
restar=false
//poner en FALSE eso porque si ya he hecho una operación antes no tiene sentido que ejecute la siguintes lineas pensando que es la primera operacion 
p_operacion=false
}

// es la funcion resta, lo que esté dentro de el se enlazará con el botón de resta para que se pueda ejecutar la resta
function resta () {
//si es false, es decir que no es la primera opcion, ejecutara el segundo if, el segundo if es este " if (sumar){"
if (p_operacion==false) {
//en caso de que haya hecho una suma
if (sumar){ 
//si antes de la resta, hemos hecho una suma, pues que lo que haya sido almacenado en el acumulado me lo sume con la nueva operacion ESCRITA EN LA PANTALLA (CIFRAS)
acumulado=acumulado+parseInt(cifras)
//lo que esté almacenado en acumulado, lo muestre en el display
document.getElementById("display").value=acumulado
}
else{
//lo que esté en acumulado, en este caso que es una resta, pues que me lo reste con el número que vaya a poner en el display
acumulado=acumulado-restar
//lo que esté almacenado en acumulado, lo muestre en el display
document.getElementById("display").value=acumulado
}

}
//esté else es por si el if (p_operacion==false) fue TRUE 
else {
//lo que hace es que lo que este en acumulado valga lo mismo que cifras
    acumulado=parseInt(cifras)
//ya que hemos hecho la primera operación hay que ponerlo en FALSE,con eso le indicamos que ya hemos terminado con nuestra priemra operación
    p_operacion=false
}
//para que la "cifras" en este caso lo que se escribe en la pantalla de la calculadora, esté en vacio depsues de realizar varias operaciones 
cifras="";
sumar=false
restar=true
}
 
// es la funcion de igual(=), lo que esté dentro de el se enlazará con el botón de igual para que se pueda ejecutar el igual
function resultado () {

if (sumar) {
document.getElementById("display").value=acumulado+parseInt(cifras)
}
else if (restar) {


    document.getElementById("display").value=acumulado-cifras
}
acumulado=parseInt(document.getElementById("display").value)
cifras=0;

}
