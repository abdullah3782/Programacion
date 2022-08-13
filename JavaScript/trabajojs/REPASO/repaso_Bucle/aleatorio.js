var aleatorio=Math.round(Math.random()*100)
var numero=0


do {

    numero=prompt("Pon tu numero")
    
if (numero<aleatorio) {

alert("Más alto")


}else if (numero>aleatorio) {

    alert("Más bajo ")
}

}while (numero!=aleatorio)

alert("Lo has adivinado")