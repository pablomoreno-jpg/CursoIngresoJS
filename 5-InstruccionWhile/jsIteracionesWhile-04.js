/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un numero del 0 al 9 ");
	numeroIngresado = parseInt(numeroIngresado);
	
	while(numeroIngresado <0 || numeroIngresado > 9 )
	{
		alert("ingrese otro numero");
		numeroIngresado = prompt("ingrese un numero del 0 al 9");
		
	}
	
	txtIdNumero.value = numeroIngresado
}//FIN DE LA FUNCIÓN