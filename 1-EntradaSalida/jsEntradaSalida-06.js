/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1 = parseInt(txtIdNumeroUno.value);
	var numero2 = parseInt(txtIdNumeroDos.value);

	var suma = numero1 + numero2;


	alert("el resultado de la suma es: " + suma);
}

