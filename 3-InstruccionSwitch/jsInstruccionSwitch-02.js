/*
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar()
{
	var mesdelaño;

	mesdelaño =  txtIdMes.value;
	
	switch(mesdelaño)
	{
		case "Abril":
		case "mayo":
		case "Junio":
			alert("Falta para el invierno");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
			alert("ya pasamos el frio, ahora hace calor !!!");
			break;
		default:
			alert("no llega invierno todavia");
			break;

	}



}//FIN DE LA FUNCIÓN