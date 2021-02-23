/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var numero;
	var acumulador;
	var respuesta;

	contador=0;
	acumulador=0;

	while(respuesta != "no")
	{
		numero = prompt(" ingrese un numero");
		numero = parseInt(numero);

		acumulador= acumulador + numero;

		contador = contador + 1;

		respuesta = prompt("¿ desea continuar ?");
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN