/**
 una agencia de viajes nos piden informar si hacemos viajes a lugares 
según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
 */
function mostrar()
{
	var estacion;
	var destino;

	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					alert("se puede viajar.");
					break;
				default:
					alert("no se viaja.");
					break;

			}
			break;

		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					alert("se puede viajar.");
					break;

				default:
					alert("no se viaja.");
					break;
			}
			break;
		case "primavera":
			switch(destino)
			{
				case "Bariloche":
					alert("no se puede viajar");
					break;

				default:
					alert("se puede viajar");
					break;
			}
			break;

		default:
			alert("se puede viajar")
			break;
	}





}//FIN DE LA FUNCIÓN