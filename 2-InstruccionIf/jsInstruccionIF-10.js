/*
*/
function mostrar()
{
    /*var nota;

	nota = Math.random() * 10; 

	nota = parseInt(nota);

	alert(nota);

	if(nota >= 10)
	{
		alert("EXCELENTE");
	}
	else{
		if(nota > 3 && nota < 9)
		{
			alert("usted APROBÓ");
		}
		else 
		{
			alert("la proxima se puede");
		}
	}*/	

/*
on if
pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace*/
	
	var distancia;
	var tiempo;
	var velocidad; 

	distancia = prompt("¿que distancia recorio?");
	tiempo = prompt("¿cuanto tardo?");

	distancia = parseFloat(distancia);
	tiempo = parseFloat(tiempo);

	velocidad = distancia / tiempo;

	alert(velocidad);

	if(distancia <= 60)
	{
		alert( "muy lento");
	}
	else{
		if(velocidad <= 80)
		{
			alert("lento");
		}
		else{
			if(velocidad <= 100)
			{
				alert("buen ritmo");
			}
			else{
				if(velocidad <= 120)
				{
					alert("ahi la ley");
				}
				else{
					alert("eso no se hace");
				}
			}
		}
	}

}//FIN DE LA FUNCIÓN