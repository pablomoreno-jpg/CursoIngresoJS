/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()
{
	var nota;

	nota = Math.random() * 10; 

	nota = parseInt(nota);

	alert(nota);

	if(nota >= 9)
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
	}	

}//FIN DE LA FUNCIÓN