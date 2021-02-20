/*
Al ingresar una edad menor a 18 años y un estado civil 
distinto a "Soltero", NO HACER NADA, pero si no es asi, y es 
soltero y no es menor, mostrar el siguiente mensaje: 
'Es soltero y no es menor.
*/

function mostrar()
{
	/*var edad;
	var Ecivil;

	edad = txtIdEdad.value;
	Ecivil = estadoCivil.value;
	
	edad = parseInt(edad);

	if(edad > 17 && Ecivil == "Soltero")
	{
		alert("usted no es menor y es soltero")
	}*/

	/*
	una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 
	por cada estadia como base, se pide el ingreso de una estacion del año y localidad 
	para vacacionar para poder calcular el precio final

	en Invierno: bariloche tiene un aumento del 20% cataratas 
	y Cordoba tiene un descuento del 10% Mar del plata 
	tiene un descuento del 20%

	en Verano: bariloche tiene un descuento del 20% cataratas y 
	Cordoba tiene un aumento del 10% 
	Mar del plata tiene un aumento del 20%

	en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas 
	tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba
	tiene el precio sin descuento*/

	var lugar;
	var estacionAño;
	var cobro = 15000;
	var precio;
	var preciofinal;

	lugar = txtIdEdad.value;
	estacionAño = estadoCivil.value;

	//soltero = invierno en este caso,

	if(estacionAño == "Soltero")
	{
		if(lugar == "Bariloche")
		{
		precio = cobro * 20 / 100; 
		preciofinal = cobro + precio;

		alert("el cobro es: " + preciofinal);
		}

		if(lugar == "cataratas" || lugar == "Cordoba" )
		{
			precio = cobro * 10 / 100;
			preciofinal = cobro - precio;

			alert("el cobro es: " + preciofinal);
		}

		if(lugar == "Mar del plata")
		{
			precio = cobro * 20 / 100; 
			preciofinal = cobro - precio;

			alert("el cobro es: " + preciofinal);
		}
	
	} //casado = verano 
	else{
		if(estacionAño == "Casado")
		{
			if( lugar == "Bariloche")
			{
				precio = cobro * 20 / 100; 
				preciofinal = cobro - precio;

				alert("el cobro es: " + preciofinal);
			}

			if(lugar == "cataratas" || lugar == "Cordoba")
			{
				precio = cobro * 10 / 100;
				preciofinal = cobro + precio;

				alert("el cobro es: " + preciofinal);
			}

			if(lugar == "Mar del plata")
			{
				precio = cobro * 20 / 100; 
				preciofinal = cobro + precio;

				alert("el cobro es: " + preciofinal);
			}
		}
		else{ //primavera y otoño = divorsiado 
			if(estacionAño == "Divorciado")
			{
				if(lugar == "Bariloche" || lugar == "cataratas" || lugar == "cataratas" )
				{
					precio = cobro * 10 / 100;
					preciofinal = cobro + precio;

					alert("el cobro es: " + preciofinal);
				}
				else{
					alert("no tiene ni descuento ni aumento.")
				}

			}
		}
	}





}//FIN DE LA FUNCIÓN