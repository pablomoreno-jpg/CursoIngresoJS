function mostrar()
{ 
    var preciostrim;
    var precioparceado;
    var porcetanjededescuentostrim;
    var porcetanjededescuentoparceado;
    var preciofianal;
    var resultado;

    //perceo de del precio y descuento 

    preciostrim = prompt("ingrese el percio");
    porcetanjededescuentostrim = prompt("ingrese su descuento");

    precioparceado = parseInt(preciostrim);
    porcetanjededescuentoparceado = parseInt(porcetanjededescuentostrim);

    //operacion de descuento 

    preciofianal = precioparceado * porcetanjededescuentostrim / 100;
    resultado = precioparceado - preciofianal 

    elPrecioFinal.value = resultado;

}
