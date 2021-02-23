/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	//alert("Hola, buen dia");

	var numero;
	var acumulador = 0
	var contador = 0

	while(contador < 5)
	{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		acumulador = acumulador + numero;

		contador = contador + 1; 

		console.log(contador);
	}

	alert("el resultado es: " + acumulador)

}

