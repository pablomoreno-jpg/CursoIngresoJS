/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch (destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("hace frio");
			break;
		default:
			alert("hace calor");
	}
}//FIN DE LA FUNCIÓN