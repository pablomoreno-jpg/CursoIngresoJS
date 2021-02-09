/*
Al ingresar una edad debemos informar si la persona es 
mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) 
o niño (menor a 13 años).*/

function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad > 17){
		alert("usted es un adulto")
	}
	else{
		if(edad < 13 )
		{
			alert("usted es un niño")
		}
		else
		{
			alert("usted es un adolecente")
		}
	}

	

}//FIN DE LA FUNCIÓN