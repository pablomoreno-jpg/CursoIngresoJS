/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var preciounostrim;
    var preciodonstrim;
    var preciotresstrim;

    preciounostrim = txtIdPrecioUno.value;
    preciodonstrim = txtIdPrecioDos.value;
    preciotresstrim = txtIdPrecioTres.value;

    //parceo de los datos ateriores: 

    var preciounoparceo = parseInt(preciounostrim);
    var preciodosparceo = parseInt(preciodonstrim);
    var preciotresparceo = parseInt(preciodonstrim);

    //suma de los datos:

    var suma; 

    suma = preciounoparceo + preciodosparceo + preciotresparceo;

    alert("el resultado es: " + suma);

}
function Promedio () 
{
	var preciounostrim;
    var preciodonstrim;
    var preciotresstrim;

    preciounostrim = txtIdPrecioUno.value;
    preciodonstrim = txtIdPrecioDos.value;
    preciotresstrim = txtIdPrecioTres.value;

    //parceo de los datos ateriores: 

    var preciounoparceo = parseInt(preciounostrim);
    var preciodosparceo = parseInt(preciodonstrim);
    var preciotresparceo = parseInt(preciodonstrim);

    //suma de los datos:

    var suma;
    var promedio; 

    suma = preciounoparceo + preciodosparceo + preciotresparceo;
    promedio = suma / 3 ; 

    alert("su promedio es: " + promedio);

    
}
function PrecioFinal () 
{
	var preciounostrim;
    var preciodonstrim;
    var preciotresstrim;

    preciounostrim = txtIdPrecioUno.value;
    preciodonstrim = txtIdPrecioDos.value;
    preciotresstrim = txtIdPrecioTres.value;

    //parceo de los datos ateriores: 

    var preciounoparceo = parseInt(preciounostrim);
    var preciodosparceo = parseInt(preciodonstrim);
    var preciotresparceo = parseInt(preciodonstrim);

    //suma de los datos:

    var suma;
    var iva = 21; 
    var precioconiva;
    var preciofinal; 

    suma = preciounoparceo + preciodosparceo + preciotresparceo;
    precioconiva = suma * iva / 100 ;
    preciofinal = suma + precioconiva;
    
    alert("el precio final es: " + preciofinal);
}