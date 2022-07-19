var nombre, apellido, edad, fueraedad;
do {
    nombre=prompt("Pon tu nombre");

}while(!isNaN(nombre))

do{
 apellido=prompt("Escribe tu apellido");

}while(!isNaN(apellido))

do{
 edad=prompt("Pon tu edad");
}while(isNaN(edad))

do {
 fueraedad=prompt("Cuantos años te quieres quitar");
}while(isNaN(fueraedad))

do{
 edad-=fueraedad;
}while(isNaN(edad-=fueraedad))

document.write ("Bienvenido " + nombre +" "+ apellido + "<br/>" + "Te gustaria tener " + edad + " años");

