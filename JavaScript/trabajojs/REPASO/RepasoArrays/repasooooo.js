var articulos=["La casa de papel", "Lupin", "Alba", "BlackList", "ZonaF"];

document.write("<p> <strong> El primer elemento es <strong>")
document.write(articulos[0] + "</p> </strong>")

document.write("<p> <strong> El segundo elemento es <strong>")
document.write(articulos[1] + "</p> </strong>")

document.write("<p> <strong> El tercer elemento es <strong>")
document.write(articulos[2] + "</p> </strong>")

document.write("<p> <strong> El cuarto elemento es <strong>")
document.write(articulos[3] + "</p> </strong>")

document.write("<p> <strong> El quinto elemento es <strong>")
document.write(articulos[4] + "</p> </strong>")

document.write("<p> <strong> Agregemos un último elemento <strong>")
articulos.push(prompt(" PON UNO TÚ "))
document.write(articulos)
