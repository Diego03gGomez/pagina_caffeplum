$(document).ready(function () {
    

$(".menu").click(function (e) { 
    e.preventDefault();
    
    $(".cont_oculto").removeClass("ocultar");
});



$(".cerrar").click(function (e) { 
    e.preventDefault();
    $(".cont_oculto").addClass("ocultar");
    
});




});