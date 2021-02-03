/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importestrim;
	var importeparceado;
	var resultado;

	importestrim = txtIdImporte.value; 
	importeparceado = parseInt(importestrim);

	resultado = importeparceado * 0,75 

	txtIdResultado.value = resultado 

}
