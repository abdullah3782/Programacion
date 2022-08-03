var articulos=["Zapatillas", "camisetas", "pantalon", "Calcetines"] ;
document.write ("<p> El primer articulo es <strong>") ;
document.write ( articulos[0] + "</p> </strong>")
document.write ("<p> El segundo articulo es <strong>") ;
document.write ( articulos[1] + "</p></strong>")
articulos.unshift("BAZA")
document.write ("<p> El tercer articulo es <strong>") ;
document.write ( articulos[0] + "</p></strong>")
articulos.push("Ardilla")
document.write ("<p> El tercer articulo es <strong>") ;
document.write ( articulos[articulos.length-1] + "</p></strong>")
document.write ("<p> El cuarto articulo es <strong>") ;
document.write ( articulos[5] + "</p></strong>")
articulos.push(prompt("Que prodcuto quieres añadir?"));
document.write ("<p> El último articulo es <strong>"+ articulos [articulos.length-1]);


document.write ("<p>" + articulos[0] + "<br/>" )
document.write (articulos[1] + "<br/>")
document.write (articulos[2] + "<br/>")
document.write (articulos[3] + "<br/>")
document.write (articulos[4] + "<br/>")
document.write (articulos[5] + "<br/>")
document.write (articulos[6] + "<br/> </p>")

alert("Voy a borrar el primer elemento")

articulos.shift()

document.write ("<p>" + articulos[0] + "<br/>" )
document.write (articulos[1] + "<br/>")
document.write (articulos[2] + "<br/>")
document.write (articulos[3] + "<br/>")
document.write (articulos[4] + "<br/>")
document.write (articulos[5] + "<br/> </p>")


alert("Voy a borrar el último elemento")

articulos.pop()

document.write ("<p>" + articulos[0] + "<br/>" )
document.write (articulos[1] + "<br/>")
document.write (articulos[2] + "<br/>")
document.write (articulos[3] + "<br/>")
document.write (articulos[4] + "<br/> </p>")


