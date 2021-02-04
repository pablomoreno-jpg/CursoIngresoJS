/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldostrim;
	var sueldoparceado;
	var porcetejatedeaumeto = 10 ;
	var importeaumeto; 
	var resultado;

	sueldostrim = txtIdSueldo.value;
	sueldoparceado = parseInt(sueldostrim);

	resultado = sueldoparceado * porcetejatedeaumeto / 100;

	importeaumeto = resultado + sueldoparceado;

	txtIdResultado.value= importeaumeto;
}
