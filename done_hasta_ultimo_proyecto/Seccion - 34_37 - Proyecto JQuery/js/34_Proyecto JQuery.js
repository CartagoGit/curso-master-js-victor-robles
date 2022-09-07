'use strict'

//Cargar tema del localstorage
var localTheme = localStorage.getItem("theme");
// console.log(localTheme);
var theme = $("#theme");
if (localTheme != null) {
    theme.attr("href", "./css/" + localTheme + ".css");
}

$(document).ready(function () {

    //Selector de tema 

    var all = $('#all');
    $("#to-green").click(function () {
        all.fadeTo(500, 0, () => {
            theme.attr("href", "./css/green.css");
            localStorage.setItem("theme", "green");
            all.fadeTo(500, 1);
        })
    });
    $("#to-red").click(function () {
        all.fadeTo(500, 0, () => {
            theme.attr("href", "./css/red.css");
            localStorage.setItem("theme", "red");
            all.fadeTo(500, 1);
        })
    });
    $("#to-blue").click(function () {
        all.fadeTo(500, 0, () => {
            theme.attr("href", "./css/blue.css");
            localStorage.setItem("theme", "blue");
            all.fadeTo(500, 1);
        })

    });

    //Subir scroll arriba de la web
    var upper = $('#upper');

    upper.click(function (event) {
        event.preventDefault()
        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });


    //Login Falso
    var formulario = $('#login form');
    var div_login = $('#login');
    var input_name = $('#input_name');
    var input_email = $('#input_email');
    var input_pass = $('#input_pass');
    var about_p = $('#about p');

    formulario.submit(function () {
        var valor_name = input_name.val();
        var valor_email = input_email.val();
        var valor_pass = input_pass.val();

        localStorage.setItem("name", valor_name);
        localStorage.setItem("email", valor_email);
        localStorage.setItem("password", valor_pass);


    });

    var localName = localStorage.getItem("name");
    var localEmail = localStorage.getItem("email");
    var localPass = localStorage.getItem("password");
    var usuario_almacenado = [localName, localEmail, localPass];
    // console.log(usuario_almacenado);
    //PUEBA COMPROBAR CUALES ELEMENTOS SON NULL
    var valores_que_incluyen_null = usuario_almacenado.filter(elemento => elemento == null);
    var valores_que_incluyen_undefined = usuario_almacenado.filter(elemento => elemento == "undefined");
    var valores_que_incluyen_vacio = usuario_almacenado.filter((elemento) => {

        if (elemento != null) {
            // console.log(elemento.trim());
            return elemento.trim() == "";
        }
    });
    // console.log(valores_que_incluyen_null.length, valores_que_incluyen_undefined.length, valores_que_incluyen_vacio.length);

    // if (usuario_almacenado.indexOf(null)==-1){
    if (valores_que_incluyen_null.length == 0
        && valores_que_incluyen_undefined.length == 0
        && valores_que_incluyen_vacio.length == 0) {
        // console.log("todo es distinto de null");
        about_p.html("Bienvenido, <strong>" + localName + "</strong> tu email es <strong>" + localEmail + "</strong> y aunque no debería exponer tu clave, te digo que tu clave es: <strong>" + localPass + "</strong>");
        about_p.append("<br/ ><br/ ><input type='button' id='logout' class='btn-default' value='Cerrar Sesión' />");
        $("#logout").click(function () {
            localStorage.removeItem("name");
            localStorage.removeItem("password");
            localStorage.removeItem("email");
            location.reload();
        });
        div_login.hide();
    }
    else {
        // console.log("Uno o todos los datos no estan almacenados");
        about_p.html("Identificate para poder ver tus datos");
        div_login.show();
    }

    $("form input[name='cnt_born']").datepicker({
        dateFormat: 'dd-mm-yy'
    });


});