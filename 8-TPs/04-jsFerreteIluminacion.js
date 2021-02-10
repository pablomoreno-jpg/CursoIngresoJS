/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lamparitas;
    var lamparitastotales;
    var marca;  
    var precio; 
    var preciofinal;
    var aumento; 
    var precioIIBB; 

    marca = Marca.value
    
    lamparitas = txtIdCantidad.value;
    
    lamparitas = parseFloat(lamparitas);

    lamparitastotales = lamparitas *35 

    if( lamparitas > 5 )
    {
        precio = lamparitastotales * 50 / 100;
        preciofinal = lamparitastotales - precio; 

        txtIdprecioDescuento.value  = preciofinal
    }
    else{
        if( lamparitas < 6 && marca == "ArgentinaLuz" )
        {
            precio = lamparitastotales * 40 / 100; 
            preciofinal= lamparitastotales - precio ;

            txtIdprecioDescuento.value = preciofinal;
        }
        else{
            if(lamparitas < 6 && marca != "ArgentinaLuz" )
            {
                precio = lamparitastotales * 30 / 100;
                preciofinal = lamparitastotales - precio; 

                txtIdprecioDescuento.value = preciofinal;
            }
            else{
                if(lamparitas < 5 && marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    precio = lamparitastotales * 25 / 100; 
                    preciofinal = lamparitastotales - precio;

                    txtIdprecioDescuento.value = preciofinal;
                }
                else{
                    if(lamparitas < 5 && marca != "ArgentinaLuz" || marca != "FelipeLamparas")
                    {
                        precio = lamparitastotales * 20 / 100; 
                        preciofinal = lamparitastotales - precio;

                        txtIdprecioDescuento.value = preciofinal;
                    }
                    else{
                       if(lamparitas < 4 && marca == "ArgentinaLuz") 
                       {
                           precio = lamparitastotales * 15 / 100; 
                           preciofinal = lamparitastotales - precio;

                           txtIdprecioDescuento.value = preciofinal;
                       }
                       else{
                           if(lamparitas < 4 && marca == "FelipeLamparas")
                           {
                               precio = lamparitastotales * 10 / 100;
                               preciofinal = lamparitastotales - precio;

                               txtIdprecioDescuento.value = preciofinal;
                           }
                           else{
                               if(lamparitas < 4 && marca != "FelipeLamparas" || marca != "ArgentinaLuz")
                               {
                                   precio = lamparitastotales * 5 / 100;
                                   preciofinal = lamparitastotales - precio;
 
                                   txtIdprecioDescuento.value = preciofinal;
                               }
                           }
                       }
                    }
                }
            }
        }
    }
    if( preciofinal >= 120 )
    {
        aumento = preciofinal * 10 / 100;
        precioIIBB = preciofinal + aumento;

        alert("usted pago " + precioIIBB + " de " + preciofinal);
        txtIdprecioDescuento.value = precioIIBB;
    }

    

}
