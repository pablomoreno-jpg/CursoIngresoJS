/*
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/

function mostrar()
{
	var mesdelaño;

	mesdelaño = txtIdMes.value ;

	switch(mesdelaño)
	{
		case "Enero":
			alert("que comiences bien el año!!!");
			break;
		case "Marzo":
			alert("a clases!!!");
			break;	
		case "Julio":
			alert("se vienen las vacaciones");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!");
			break;
		default:
			alert("no es ningun mes importante");
			break;

	}


}//FIN DE LA FUNCIÓN