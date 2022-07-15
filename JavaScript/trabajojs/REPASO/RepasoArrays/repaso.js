var articulos=["Zapatillas", "camisetas", "pantalon", "Calcetines"] ;

document.write ("<p> El primer articulo es <strong>") ;
//aqui te muestra que array es, ponemos 0 porque empezamos de 0 y no de 1
 document.write (articulos [0] + "</strong> </p>") ;

 document.write ("<p> El primer articulo es <strong>") ;
 document.write (articulos[articulos.length-1] + "</strong> </p>") ;
 articulos.unshift("Bola")
 document.write ("<p> Casi se me olvida !!! Agregamos este elemento: <strong>") ;
 document.write (articulos[0] + "</strong> </p>") ;
 articulos.push=prompt("<p> AHORA SI, ELIJELO <strong>")
 document.write(articulos[articulos.length-1] + "</p> </strong>")
