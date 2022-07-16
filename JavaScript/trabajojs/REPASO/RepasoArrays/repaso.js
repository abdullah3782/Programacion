//asi se comienza hacer un array
var articulos=["Zapatillas", "camisetas", "pantalon", "Calcetines"] ;
//eso no es  que nada es un simple texto que queremos que nos aparezca en la web nada más
document.write ("<p> El primer articulo es <strong>") ;
//aqui te muestra que array es, ponemos 0 porque empezamos de 0 y no de 1
 document.write (articulos [0] + "</strong> </p>") ;
   //eso no es  que nada es un simple texto que queremos que nos aparezca en la web nada más
 document.write ("<p> El último articulo es <strong>") ;
//lenth-1 para que me muestre el ultimo lentgh
 document.write (articulos[articulos.length-1] + "</strong> </p>") ;
 //unshift es para que agrege un elemto al principio de la array  
 articulos.unshift("Bola")
   //eso no es  que nada es un simple texto que queremos que nos aparezca en la web nada más
 document.write ("<p> Casi se me olvida !!! Agregamos este elemento: <strong>") ;
 //para que me escriba el primer elemento de la array 
 document.write (articulos[0] + "</strong> </p>") ;
  //eso no es  que nada es un simple texto que queremos que nos aparezca en la web nada más
 document.write("<p>Vamos a meter un ultimo elemento <strong>")
 //push para meter un elemento al final de la array 
 articulos.push (prompt("Pon lo que tu quieras"))
document.write (articulos[articulos.length-1] + "</p></strong>")
//para que me escriba el primer elemento de la array y luego las que viene
document.write ("<p>" + articulos[0] + "<br/>" )
document.write (articulos[1] + "<br/>")
document.write (articulos[2] + "<br/>")
document.write (articulos[3] + "<br/>")
document.write (articulos[4] + "<br/>")
document.write (articulos[5] + "<br/> </p>")
//una simple alerta 
alert("Voy a borrar el primer elemento")
//para borrar el primer elemnto
 articulos.shift();
 //para que nos ecriba los elemntos que tiene la array dentro de ella en ese momento
 document.write ("<p>" + articulos[0] + "<br/>")
 document.write (articulos[1] + "<br/>")
 document.write (articulos[2] + "<br/>")
 document.write (articulos[3] + "<br/>")
 document.write (articulos[4] + "<br/> </p>")
//una simple alerta 
 alert("Ahora toca borrar el último elemento")
 //pop es para borrar el último elemnto 
 articulos.pop();
 document.write ("<p>" + articulos[0] + "<br/>")
 document.write (articulos[1] + "<br/>")
 document.write (articulos[2] + "<br/>")
 document.write (articulos[3] + "<br/> </p>")
 