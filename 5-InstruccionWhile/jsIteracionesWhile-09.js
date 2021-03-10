/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var flag = true;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	
	do
	{		
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(flag == true )
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			flag= false;
		}
		else if(numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		else if (numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}
		

		respuesta=confirm("¿ desea continuar ?");

	}while(respuesta==true);

	console.log("bandera :" + flag)
	console.log("numero maximo " + numeroMaximo);
	console.log("numero minimo " + numeroMinimo);

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN