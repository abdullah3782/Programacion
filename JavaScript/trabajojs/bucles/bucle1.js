//IMPORTANTE
//while siempre tiene que ir debajo de la variable y nunca hay que olvidar de un prompt dentro de while
//IMPORTANTE
//
var nombre, poblacion, edad;
//while !isNan por si escribo un numero en vez de un letra 
do {  
    nombre=prompt("Introduce el nombre correcto") 
}while (!isNaN(nombre))

//while !isNan por si escribo un letra en vez de un numero 

do{
    edad=prompt("Pon la edad buena anda")
}while (edad<=0 || edad>105 || isNaN(edad))

//while !isNan por si escribo un numero en vez de un letra 
do{ 
    poblacion=prompt("Introduce la población correcta") 

}while (!isNaN(poblacion)) 
