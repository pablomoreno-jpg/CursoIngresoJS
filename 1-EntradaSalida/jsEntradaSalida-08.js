/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo; 
	var divisor;

	dividendo = parseInt(txtIdNumeroDividendo.value);

	divisor = parseInt(txtIdNumeroDivisor.value);

	var resultado;


	resultado=dividendo % divisor;


	alert("el resto es: " + resultado);



}
