/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largostrim;
    var largoparceado;
    var anchostrim;
    var anchoparceado;
    var perimetro;
    var cantidaddealambres; 

    largostrim = txtIdLargo.value;
    anchostrim = txtIdAncho.value;

    largoparceado = parseInt(largostrim);
    anchoparceado = parseInt(anchostrim);

    perimetro = largoparceado + anchoparceado * 2;
    cantidaddealambres = perimetro * 3;

    alert("debe comprar: " + cantidaddealambres);

}
function Circulo () 
{
	var radiostrim;
    var radioparceado;
    var perimetro; 
    var cantidaddealambres;

    radiostrim = txtIdRadio.value;
    radioparceado = parseInt(radiostrim);

    perimetro = 2 * Math.PI * radioparceado ;
    cantidaddealambres= perimetro * 3;

    alert("debe comprar: " + cantidaddealambres);
}
function Materiales () 
{
	var largostrim;
    var largoparceado;
    var anchostrim;
    var anchoparceado;
    var superficie;
    var cal;
    var bolsas;

    largostrim = txtIdLargo.value;
    anchostrim = txtIdAncho.value;

    largoparceado = parseInt(largostrim);
    anchoparceado = parseInt(anchostrim);

    superficie = largoparceado * anchoparceado; 

    cal = superficie * 3;
    bolsas = superficie * 2;
    
    alert("debe comprar " + bolsas + " bolsas de cemento y " + cal + " de cal");
}