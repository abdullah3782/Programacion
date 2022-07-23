//Primero ejemplo

/*var meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];



for (var i=0; i<meses.length; i++)  {

   document.write(meses[i] +" <br/>")
    
}*/

var trabajadores=new Array();
var personas=""
var contador=0

while(personas!="salir"){

personas=prompt("Introduce el nombre del trabajor")
trabajadores[contador]=personas
contador++

}

trabajadores.pop();

for (var i=0; i<trabajadores.length; i++){
document.write(trabajadores[i] + "<br/>")


}