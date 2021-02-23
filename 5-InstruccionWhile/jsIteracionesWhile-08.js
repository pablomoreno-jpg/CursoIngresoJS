/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var numero;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;

	while(respuesta != "no")
	{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		if(numero > 1)
		{
			sumaPositivos = sumaPositivos + numero;
		}
		if(numero < 0)
		{
			multiplicacionNegativos = multiplicacionNegativos + 1;
			multiplicacionNegativos = multiplicacionNegativos * numero
		}
		
		console.log("la suma es " + sumaPositivos);
		console.log("la multiplicacion es " + multiplicacionNegativos);

		respuesta = prompt("¿ desea continuar ?");
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN