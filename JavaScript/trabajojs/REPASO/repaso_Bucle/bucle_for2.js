var user=new Array();
var personas=""
var contador=0
while(personas!="salir") {

personas=prompt("Pon el nombre del trabajador")
//La primera vez que entramso en el bucle el contador vale 0, entonces al user le damos esa referencia de contador y lo que pongasmos ahí será igual a 0 
// es decir si ponemos "DARK" en el primer prompt de "personas" empezará a formar la parte 0 de la array
user[contador]=personas
//para sumar (yo lo entiendo)
    contador++

}

user.pop()

for (var i=0; i<user.length; i++) {

document.write(user[i] + "<br/>")


}