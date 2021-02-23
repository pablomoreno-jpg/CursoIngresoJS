/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var genero;

	genero = prompt("ingrese un sexo");

	while(genero != "f" && genero != "m")
	{
		alert("genero no valido");
		genero = prompt("ingrese un genero");
	}

	txtIdSexo.value = genero

}//FIN DE LA FUNCIÓN