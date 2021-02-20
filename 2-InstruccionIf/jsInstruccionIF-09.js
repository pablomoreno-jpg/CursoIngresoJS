/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive.*/
function mostrar()
{
	/*var numero;

	numero = Math.random() * 100;
	
	numero = parseInt(numero);

	if( numero < 11)
	{
		alert(numero);
	}*/

/*con if
ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III*/

	var nombre;
	var peso;
	var altura; 
	var imc; 

	nombre = prompt("cual es tu nombre");
	peso = prompt("¿cuanto pesa?");
	altura = prompt("¿cuanto miede?");

	peso = parseFloat(peso);
	altuera = parseFloat(altura)

	imc = peso / Math.pow(altura,2);

	if(imc < 18.5 )
	{
		alert("bejo peso");		
	}
	else{
		if(imc >= 18.5 || imc < 25)
		{
			alert("peso normal");
		}
		else{
			if(imc >=25 || imc < 27 )
			{
				alert("sobrepeso");
			}

			if(imc > 27 || imc < 30)
			{
				alert("preobesiadad");
			}
			else{
				if(imc >= 30 || imc < 35)
				{	
					alert("obsidad tipo I");
				}
				else{
					if(imc >= 35 || imc < 40)
					{
						alert("obesidad tipo II");
					}
					else{
						alert("obesidad tipo III");
					}
				}	
			}
			
		}
	}

}//FIN DE LA FUNCIÓN