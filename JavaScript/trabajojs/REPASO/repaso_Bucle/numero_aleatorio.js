var numero=Math.round(Math.random()*100)
var intentos,minumum;
minumum=0
intentos=0
do {
    minumum=prompt("Pon tu numero")

    if (minumum>numero) {

        alert("Mas bajo")
}

if (minumum<numero) {
    
    alert("Mas alto")
}

}while (minumum!=numero)

alert("Lo has adivinado!")