var nombre=prompt("Pon tu nombre");
var apellido=prompt("Escribe tu apellido");
var edad=prompt("Pon tu edad");
var fueraedad=prompt("Cuantos años te quieres quitar");
edad-=fueraedad;
document.write ("Bienvenido " + nombre + " " + apellido + "<br/>" + "Te gustaria tener " + edad + " años");
