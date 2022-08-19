//Primero ejemplo

/*var meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];



for (var i=0; i<meses.length; i++)  {

   document.write(meses[i] +" <br/>")
    
}*/

//he hecho este array así porque no sabemos cuantos elementos entraran en ella
var trabajadores=new Array();
//variable donde se almacenarán la cantidad de personas
var personas=""
//las veces que se introduzcan los datos
var contador=0
//mientras personas sea difernte que salir se repetirá el código
while(personas!="salir"){
//persona=prompt para que lo que se escriba en prompt se almacené en la variable personas
personas=prompt("Introduce el nombre del trabajor")
//La primera vez que entramso en el bucle el contador vale 0, entonces al user le damos esa referencia de contador y lo que pongasmos ahí será igual a 0 
// es decir si ponemos "DARK" en el primer prompt de "personas" empezará a formar la parte 0 de la array
trabajadores[contador]=personas
//para que sume la cantida una vez
contador++

}
//para evitar que salga "salir" cuando salgamos del prompt
trabajadores.pop();
//que saque los nombres de a variable y con "document.write" me lo escriba en la pantalla
for (var i=0; i<trabajadores.length; i++){
document.write(trabajadores[i] + "<br/>")


}