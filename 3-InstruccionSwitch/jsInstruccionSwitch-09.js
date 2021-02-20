/*
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por 
cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar 
para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin descuento
 */

function mostrar()
{
	var estacionAño;
	var destino;
	var tarifa = 15000;
	var precio;
	var preciofinal;

	estacionAño = txtIdEstacion.value;
	destino = txtIdDestino.value;

	switch(estacionAño)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					precio = tarifa * 20 / 100;
					preciofinal = tarifa + precio; 

					alert("la tarifa es " + preciofinal);
					break;

				case "Mar del plata":
					precio = tarifa * 20 / 100;
					preciofinal = tarifa - precio; 

					alert("la tarifa es " + preciofinal);
					break;

				default:
					precio = tarifa * 10 / 100;
					preciofinal = tarifa - precio; 

					alert("la tarifa es " + preciofinal);
					break;
				
			}
			break;

		case "Verano":
			switch (destino)
			{
				case "Bariloche":
					precio = tarifa * 20 / 100;
					preciofinal = tarifa - precio; 

					alert("la tarifa es " + preciofinal);
					break;

				case "Mar del plata":
					precio = tarifa * 20 / 100;
					preciofinal = tarifa + precio; 

					alert("la tarifa es " + preciofinal);
					break;
				
				default:
					precio = tarifa * 10 / 100;
					preciofinal = tarifa + precio; 

					alert("la tarifa es " + preciofinal);
					break;
			}
			break;

		default:
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					precio = tarifa * 10 / 100;
					preciofinal = tarifa + precio; 

					alert("la tarifa es " + preciofinal);
					break;

				default:
					alert("no tiene descuento");
					break;

			}
			break;

	}

}//FIN DE LA FUNCIÓN