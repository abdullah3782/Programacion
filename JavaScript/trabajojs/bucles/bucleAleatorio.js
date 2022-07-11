var aleatorio=Math.round(Math.random()*100);
var intentos, minum;
minum=0;
intentos=0;
do {
minum=prompt("Pon algun numero")
if (minum<aleatorio){

    alert("Más alto")

}
if (minum>aleatorio){

    alert("Más bajo")

}

}while(minum!=aleatorio);

alert("Muy bien")