// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

$("#btnSuma").click(function () {
	var num1 = $("#in1").val();
	var num2 = $("#in2").val();

	var resultado = (parseInt(num1) + parseInt(num2) );

	$("#resultado").val(resultado);

});