/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{ 
	var numeroIngresado;
	var respuesta;
	var numeronegativo;
	var numeropositivo;
	var flag = true;
	var contador = 0;
	

	do
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseFloat(numeroIngresado);

		if(flag == true )
		{
			numeropositivo = numeroIngresado;
			flag = false;
		}
		else 
		{
			if(numeroIngresado > 0)
			{
				numeronegativo = numeroIngresado
			}
			else if(numeroIngresado < 0 )
			{
				numeronegativo = numeroIngresado
			}

		}

		switch(numeroIngresado)
		{
			case numeropositivo:
				while(contador < 1)
				{
					numeropositivo = numeropositivo + numeropositivo
					contador = contador + 1;
				}break;
			default
				{
					while(contador < 1)
					{
						numeronegativo = numeronegativo - numeronegativo
						contador = contador + 1
					}
				}
		}

		
		console.log("el numero positivo es " + numeronegativo);
		console.log("el numero negativo es " + numeropositivo);

		respuesta = confirm("¿desea continuar?");

	}while(respuesta == true);






}//FIN DE LA FUNCIÓN