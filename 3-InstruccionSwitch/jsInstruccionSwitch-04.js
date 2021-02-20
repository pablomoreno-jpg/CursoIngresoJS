/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	var mesdelaño;

	mesdelaño =  txtIdMes.value;

	switch(mesdelaño)
	{
		case "Febrero":
			alert("este mes solo tiene 28 dias");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("este mes tiene 30 dias");
			break;
		default:
			alert("este mes tiene 31 dias");
			break;
	}


}//FIN DE LA FUNCIÓN