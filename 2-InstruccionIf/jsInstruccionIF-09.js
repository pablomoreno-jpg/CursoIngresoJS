/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive.*/
function mostrar()
{
	var numero;

	numero = Math.random() * 100; 

	numero = parseInt(numero);

	if( numero < 10)
	{
		alert(numero);
	}


}//FIN DE LA FUNCIÓN