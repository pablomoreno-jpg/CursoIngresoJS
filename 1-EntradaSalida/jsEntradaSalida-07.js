/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primernumero = parseInt(txtIdNumeroUno.value)  
	var segundonumero = parseInt(txtIdNumeroDos.value)	

	var suma = primernumero + segundonumero

	alert("el resultado de la suma es: " + suma)
}

function restar()
{
	var primernumero = parseInt(txtIdNumeroUno.value)  
	var segundonumero = parseInt(txtIdNumeroDos.value)
	
	var restar = primernumero - segundonumero 

	alert("el resultado de la resta es: " + restar )
	
}

function multiplicar()
{ 
	var primernumero = parseInt(txtIdNumeroUno.value)  
	var segundonumero = parseInt(txtIdNumeroDos.value)

	var multiplicar = primernumero * segundonumero

	alert("el resulrado es: " + multiplicar )
}

function dividir()
{
	var primernumero = parseInt(txtIdNumeroUno.value)  
	var segundonumero = parseInt(txtIdNumeroDos.value)

	var dividir = primernumero / segundonumero

	alert("el resultado es: " + dividir)
}

