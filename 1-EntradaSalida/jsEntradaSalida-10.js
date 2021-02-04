/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importestrim;
	var importeparceado;
	var Descuento = 25;
	var resultadofinal;
	var resultado;

	importestrim = txtIdImporte.value; 
	importeparceado = parseInt(importestrim);

	resultado = importeparceado * Descuento / 100;

	resultadofinal = importeparceado - resultado;

	txtIdResultado.value = resultadofinal;

	 

}
