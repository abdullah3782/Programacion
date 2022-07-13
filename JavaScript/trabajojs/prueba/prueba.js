var nombre=prompt ("Introduce tu nombre por favor ")
			var apellido=prompt ("Introduce tu apellido por favor ") 
			var edad=prompt ("Pon tu edad anda")
			var restanado=prompt ("¿Cuantos te los quieres quitar raton?")
			edad-=restanado ; 
			document.write ("<p>");
			document.write ("Bienvenido: " + nombre + " " + apellido + "<br/>" + "Te gustaria ser una rata de " + edad + " años") ;
		    document.write ("</p>");