$(document).ready(function () {
    

$(".menu").click(function (e) { 
    e.preventDefault();
    
    $(".cont_oculto").removeClass("ocultar");
});



$(".cerrar").click(function (e) { 
    e.preventDefault();
    $(".cont_oculto").addClass("ocultar");
    
});

$("#fondo1").hide();
$("header").hide();


$("header").fadeIn(2000);
$("#fondo1").fadeIn(2000);




});