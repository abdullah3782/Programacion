var aleatorio=Math.round(Math.random()*100)
var minumum
minumum=0
do {

    minumum=prompt("Pon un numero")

if (minumum<aleatorio){

alert("mas alto")

}

if (minumum>aleatorio){

    alert("mas bajo")

}

}while (minumum!=aleatorio)


alert("Muy bien")