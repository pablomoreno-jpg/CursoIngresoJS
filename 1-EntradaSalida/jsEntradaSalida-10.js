/*se debe pedir el nombre del producto , tambien 
se debe pedir el porcentaje de descuento al usuario, mostar el mensaje 
"usted compro un XXXXXX con XX % de descuento, el precio final es XXXX
*/
function mostrarAumento()
{
	var precio; 
	var descuentouno; 
	var descuento;
	var operacioninicial;
	var operacionfinal; 

	precio = document.getElementsByTagName(txtIdImporte).Value;
	descuentouno = document.getElementsByTagName(txtIdResultado).value;

	descuento = parseInt(descuento);
	
	operacioninicial = precio * descuento /100;
	operacionfinal = precio - operacioninicial; 

	alert("usted compro un prodcuto de " + precio + " con un descuento de " + descuento + "%, el precio final es: " + operacioninicial);
	
}
