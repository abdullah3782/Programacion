var nombre, edad, poblacion;

do {

nombre=prompt("Introduce tu nombre");

} while(!isNaN (nombre));

do {

edad=prompt("Pon tu edad correcta");

} while (edad<=0 || edad>=105 || isNaN(edad));


do {

    poblacion=prompt("Pon tu población");
}while(!isNaN(poblacion));