/*
Al ingresar una edad menor a 18 años y un estado civil distinto
 a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño 
 para NO ser soltero.'*/
function mostrar()
{
	var edad; 
	var Ecivil;
	
	edad = txtIdEdad.value;
	Ecivil = estadoCivil.value;

	edad = parseInt(edad);

	if(edad < 18 && Ecivil != "Soltero")
	{
		alert("usted es demasiado joven para no ser soltero");
	}

}//FIN DE LA FUNCIÓN