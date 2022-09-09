'use strict'
$(document).ready(function () {
    //AJAX <---------------
    //Load
    var datos = $('#datos_ajax');
    var datos02 = $('#datos_ajax02');


    datos.load("https://reqres.in/");


    //Get y Post
    $.get('https://reqres.in/api/users', { page: 2 }, function (response) {
        // console.log(response);
        response.data.forEach(element => {
            datos02.append("<p>" + element.first_name + " " + element.last_name + "</p>");
        });
    });


    $('#form_post').submit(function (event) {
        event.preventDefault();
        var usuario = {
            name: $("input[name='name'").val(),
            web: $("input[name='web'").val(),
            jorl: "Pero meto lo que quiera?"
        }
        console.log(usuario);
        //     $.post($(this).attr("action"), usuario, function (response) {
        //         console.log(response);
        //     }).done(function(){
        //         console.log("usuario añadido correctamente")
        //     });
        //PETICIONES CON $.ajax
        $.ajax({
            type: "POST",
            url: $(this).attr("action"),
            data: usuario,
            dataType: "json",
            // contentType: "application/json",
            beforeSend: function () {
                console.log("Enviando usuario");
            },
            success: function (response) {
                console.log(response);
            },
            error: function (e) {
                console.log("Ha ocurrido un error: ", e);
            },
            timeout: 2000
        });
        return false;

    });



});