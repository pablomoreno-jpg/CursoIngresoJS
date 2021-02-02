/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var a = parseInt(txtIdNumeroUno.value)  
	var b = parseInt(txtIdNumeroDos.value)	

	var c = a + b 

	alert(c)
}

function restar()
{
	var a = parseInt(txtIdNumeroUno.value)  
	var b = parseInt(txtIdNumeroDos.value)

	var c = a -b

	alert(c)
	
}

function multiplicar()
{ 
	var a = parseInt(txtIdNumeroUno.value)  
	var b = parseInt(txtIdNumeroDos.value)

	var c = a * b

	alert(c)
}

function dividir()
{
	var a = parseInt(txtIdNumeroUno.value)  
	var b = parseInt(txtIdNumeroDos.value)

	var c = a / b 

	alert(c)
}

