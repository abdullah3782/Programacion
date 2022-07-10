//IMPORTANTE
//while siempre tiene que oir debajo de la variable y nunca hay que olvidar de un prompt dentro de while
//IMPORTANTE
var nombre=prompt("Introduce tu nombre");
//while !isNan por si escribo un numero en vez de un letra 
while (!isNaN(nombre)) { 
    alert ("Pon un nombre correcto")  
    nombre=prompt("Introduce el nombre correcto") 
}
var edad=prompt("Introduce tu edad");
//while !isNan por si escribo un letra en vez de un numero 

while (edad<=0 || edad>105 || isNaN(edad)) {
    alert ("Pon una edad correcta")
    edad=prompt("Pon la edad buena anda")
}
var poblacion=prompt("Introduce tu población");

//while !isNan por si escribo un numero en vez de un letra 
while (!isNaN(poblacion)) { 
    alert ("Pon la población correcto")  
    poblacion=prompt("Introduce la población correcta") 

}
