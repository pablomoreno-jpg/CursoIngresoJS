/*
Al ingresar una edad debemos informar si la persona es mayor de edad, sino 
informar que es un menor de edad.*/
function mostrar()
{
	var edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if(edad > 17 )
	{
		alert("usted es mayor de edad");
	}
	else
	{
		alert("usted es menor de edad");
	}

}//FIN DE LA FUNCIÓN