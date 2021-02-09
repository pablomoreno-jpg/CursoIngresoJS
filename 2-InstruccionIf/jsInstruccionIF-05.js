/*
Al ingresar una edad solo debemos informar 
si la persona NO es adolescente.*/
function mostrar()
{
	var edad; 

	edad = txtIdEdad.value; 

	edad = parseInt(edad);

	if(edad < 12 || edad >= 18)
	{
		alert("usted no es un adolecente");
	}
	
}//FIN DE LA FUNCIÓN