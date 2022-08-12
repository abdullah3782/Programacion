var articulos=["La casa de papel", "Lupin", "Alba", "BlackList"];
document.write(" <p> El primer articulo es <strong>")
document.write( articulos[0] + "</p> </strong>")
document.write(" <p> El segundo articulo es <strong>")
document.write( articulos[1] + "</p> </strong>")
document.write(" <p> El tercero articulo es <strong>")
document.write( articulos[2] + "</p> </strong>")
document.write(" <p> El cuarto articulo es <strong>")
document.write( articulos[3] + "</p> </strong>")

articulos.unshift("Los Ladrones")

document.write(" <p> El quinto articulo es <strong>")
document.write( articulos[0] + "</p> </strong>")

articulos.push("PEKKA")

document.write(" <p> El último articulo es <strong>")
document.write (articulos[articulos.length-1] + "</strong> </p>") ;


articulos.push(prompt("Añade uno tú"))
document.write(" <p> El articulo escrito por ti es <strong>")
document.write (articulos[articulos.length-1] + "</strong> </p>") ;


document.write( "<p>" + articulos[0] + "<strong>" + "<br>")
document.write( articulos[1] + "</br>")
document.write( articulos[2] + "</br>")
document.write( articulos[3] + "</br>")
document.write( articulos[4] + "</br>" )
document.write( articulos[5] + "</br>" )
document.write( articulos[6] + "</p> </strong>")


alert("Voy a borrar el primer elemento")

articulos.shift();
articulos.shift();

document.write( "<p>" + articulos[0] + "<strong>" + "<br>")
document.write( articulos[1] + "</br>")
document.write( articulos[2] + "</br>")
document.write( articulos[3] + "</br>")
document.write( articulos[4] + "</br> </p> </strong>" )


alert("Voy a borrar el últimmo elemento")

articulos.pop();


document.write( "<p>" + articulos[0] + "<strong>" + "<br>")
document.write( articulos[1] + "</br>")
document.write( articulos[2] + "</br>")
document.write( articulos[3] + "</br> </p> </strong>")
