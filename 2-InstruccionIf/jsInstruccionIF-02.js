/*
Al ingresar una edad solo debemos informar si la persona
NO es adolescente.*/
				


function mostrar()
{
	var edad; 

	edad = txtIdEdad.value; 

	edad = parseInt(edad);

	if(edad >= 18 )
	{
			alert("eres mayor de edad, no eres un adolecente");
	}	

}//FIN DE LA FUNCIÓN