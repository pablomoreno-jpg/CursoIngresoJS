
function mostrar()
{
	//variables strim del largo y ancho del rectangulo:
	var ancho;
	var largo;

	//promt de las variables 

	ancho = prompt("ingrese su ancho: ");
	largo = prompt("ingrese su largo: "); 

	//parceable de los datos anteriores 

	var numeroparceadoancho = parseInt(ancho);
	var numeroparceadolargo = parseInt(largo);

	//operaciones 

	var sumadelosparceados = numeroparceadoancho + numeroparceadolargo;
	var resultadofianal = sumadelosparceados * 2; 

	alert("el perimetro de su rectangulo es: " + resultadofianal);
}
