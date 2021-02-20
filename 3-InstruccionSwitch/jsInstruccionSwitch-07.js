/*
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde
se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch (destinoIngresado)
	{
		case "Cataratas":
			alert("se encuentre en el norte");
			break;
		case "Ushuaia":
			alert("se encuentrea en el sur del pais");
			break;
		case "Bariloche":
			alert("se encuentra en el oeste del pais")
			break;
		case "Mar del plata":
			alert("se encuentra en el este del pais")
			break;
	}

}//FIN DE LA FUNCIÓN