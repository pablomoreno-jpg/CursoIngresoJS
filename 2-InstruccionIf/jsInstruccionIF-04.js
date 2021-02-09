/*
Al ingresar una edad debemos informar si la persona es 
adolescente, edad entre 13 y 17 años (inclusive)*/
function mostrar()
{
	var edad; 

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if(edad > 13 && edad <= 17)
	{
		alert("usted es un adolecente");
	}
	else
	{
		alert("usted no es un adolecente");
	}


}//FIN DE LA FUNCIÓN