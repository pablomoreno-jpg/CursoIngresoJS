/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturastrim;
    var temperaturaparceada;
    var celciusinincial;
    var celecius;

    temperaturastrim = txtIdTemperatura.value; 
    temperaturaparceada = parseInt(temperaturastrim);

    celciusinincial = temperaturaparceada - 32;
    celecius = celciusinincial / 32; 

    alert(temperaturaparceada + " fahrenthait son " + celecius + " grados centrigradso ");

}

function CentigradosFahrenheit () 
{
    var temperaturastrim;
    var temperaturaparceada;
    var Fahrenheitinicial;
    var Fahrenheit

    temperaturastrim = txtIdTemperatura.value; 
    temperaturaparceada = parseInt(temperaturastrim);

    Fahrenheitinicial = temperaturaparceada * 1.8;
    Fahrenheit = Fahrenheitinicial + 32; 

    alert(temperaturaparceada + " celcius son " + Fahrenheit + " grados fahrenhient");

}
