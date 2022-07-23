var aleatorio=Math.round(Math.random()*100);
var intentos, minum;
var mensaje=document.getElementById("c_mensaje")
var intentos=document.getElementById("c_intentos")
minum=0;
intentos=0;
do {
minum=prompt("Pon algun numero")
if (minum<aleatorio){

    mensaje.value="Más alto"

}
if (minum>aleatorio){

    mensaje.value="Más bajo"

}
//cada vez que lea el codigo donde pone intentos++ lo almacenará en la variable "intentos"
intentos++;

}while(minum!=aleatorio);

document.write("Lo has logrado en " + intentos + " intentos")