/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo1 = parseInt(txtIdSueldo.value);
	var resultado;  

	var sueldo2; 

	sueldo2=sueldo1 % 10  ; 

	resultado= sueldo1 + sueldo2;

	txtIdResultado.value=resultado;
    
}
