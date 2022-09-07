'use strict'

$(document).ready(() => {
    console.log("JQUERY esta listo");

    //SELECTOR DE ID
    $("#rojo")
        .css("background", "red")
        .css("color", "white");
    $("#amarillo")
        .css("background", "blue")
        .css("color", "white");
    $("#verde")
        .css("background", "green");

    //SELECTORES DE CLASE
    var mi_clase = $(".zebra");
    console.log(mi_clase);
    console.log(mi_clase[1]);
    console.log(mi_clase.eq(1));
    //Pero lo que se meta por css() no lo graba en la clase, 
    // solo a los elementos seleccionados en el DOM

    $(".sin_borde").click(function () {
        console.log("Click dado a :", $(this));
        $(this).addClass('grande');
    })

    //SELECTORES DE ETIQUETA

    var parrafo = $('p');
    parrafo.css("cursor", "pointer");
    parrafo.click(function () {
        var that = $(this);
        if (that.hasClass('zebra')) {
            that.removeClass("zebra");
        } else {
            that.addClass('zebra');
        }

    });

    //SELECTORES DE ATRIBUTO
    $('[title="Google"]').css('background', "#ccc");
    $('[title="Facebook"]').css('background', "grey");

    //OTROS
    //Elegir dos selectores simultaneos
    $('p,a').addClass('margin-superior');
    var busqueda = $("#caja").find('.resaltado');
    console.log(busqueda);

    //Parent dos veces para salir de la ul primero, y luego a la caja y asi poder seleccionar los elementos del id caja
    var busqueda_parent = $("#elemento2").eq(0).parent().parent().find('.resaltado');

    console.log(busqueda_parent);
});