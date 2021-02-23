/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var numero = 10;
	var contador = 0;

	while(contador < 10)
	{
		numero = numero -1;

		alert(numero);

		contador = contador + 1;
		
		console.log(contador);

	}

}//FIN DE LA FUNCIÓN