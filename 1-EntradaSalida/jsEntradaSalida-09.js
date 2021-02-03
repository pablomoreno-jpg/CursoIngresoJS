/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldostrim;
	var sueldoparceado; 
	var resultado;

	sueldostrim = txtIdSueldo.value;
	sueldoparceado = parseInt(sueldostrim);

	resultado = sueldoparceado * 1,10 

	txtIdResultado.value = resultado
}
