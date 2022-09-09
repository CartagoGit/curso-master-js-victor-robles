'use strict'
//EVENTOS
//Un evento es una funcion que se ejectua cuando ocurre algo


// EVENTO LOAD AL CARGAR EL HTML
window.addEventListener('load', () => {
    // Y aqui iria todo si queremos poner el script en el HEAD que realmente es el sitio recomendable

    //EVENTOS DEL RATON
    //CLICK <-----------------
    var boton = document.querySelector("#boton01");

    function cambiarColor(btn = boton) {
        var bg = btn.style.background;
        console.log(btn, bg);
        if (bg.includes("green")) {
            btn.style.background = "red";
            btn.style.padding = "20px";
            btn.style.border = "solid 1px black";
        } else {
            btn.style.background = "green";
            btn.style.padding = "30px";
            btn.style.border = "none";
        }

    }

    var boton2 = document.querySelector("#boton02");
    //Capturando eventos desde js y sin manchar el html
    boton2.addEventListener('click', () => {
        cambiarColor(boton2);
    });

    //MOUSE OVER <------------------------
    //Al pasar el raton por encima
    boton.addEventListener('mouseover', () => {
        boton.style.background = "grey";
    });

    //MOUSE OUT<------------------------
    //Al sacar el raton de encima

    boton.addEventListener('mouseout', () => {
        boton.style.background = "yellow";
    });

    // var num1 = -100;
    // var num2 = 1;
    // while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
    //     console.log(num1);
    //     num1++;
    // };

    // EVENTOS TECLADO <-------------------

    //FOCUS<------------------------
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', () => {
        console.log("El foco esta en el input");
    });
    // BLUR<------------------------
    //lo mismo pero al salir del foco
    input.addEventListener('blur', () => {
        console.log("Estas fuera del input");
    });

    // KEYDOWN<------------------------
    // cuando empiezas a presionar la tecla
    input.addEventListener('keydown', (event) => {
        console.log("Acabas de pulsar: ", event.key, "- El caracter es: ", String.fromCharCode(event.keyCode));
    });

    // KEYPRESS<------------------------
    //cuando esta pulsada
    input.addEventListener('keypress', (event) => {
        console.log("Estas pulsando: ", event.key, "- El caracter es: ", String.fromCharCode(event.keyCode));
    });
    // KEYUP<------------------------
    //Cuando sueltas la tecla
    input.addEventListener('keyup', (event) => {
        console.log("Estas soltando: ", event.key, "- El caracter es: ", String.fromCharCode(event.keyCode));
    });


    //TIMERS <--------------------------
    ////////////////////////
    var contador = 0;
    var contador_total = 0;
    var boton01Color = document.querySelector("button");
    //var tiempo = setInterval(loQueHaceElIntervalo, 1000);
    var tiempo;
    function loQueHaceElIntervalo() {
        contador++;
        contador_total++;
        console.log("Set Interval ejecutado ", contador, " veces en esta ocasion");
        console.log("Set Interval ejecutado ", contador_total, " veces en toda esta sesion");

        if (boton01Color.style.background.includes("green")) {
            boton01Color.style.background = "blue";
        } else {
            boton01Color.style.background = "green";
        }
    }
    //Lo mismo que el de interval pero solo lo hace una vez una vez pasado el tiempo
    // var tiempo02 = setTimeout(()=>{});

    var intervaloFuncionando = false;
    //Pâra para el intervalo
    boton01Color.addEventListener("click", () => {
        if (intervaloFuncionando) {
            clearInterval(tiempo);
            intervaloFuncionando = false;
            console.log("has parado el intervalo en bucle");
            contador = 0;
        } else {
            tiempo = setInterval(loQueHaceElIntervalo, 1000);
            console.log("has iniciado el intervalo en bucle");
            intervaloFuncionando = true;
        }

    });

    // console.log(isNaN(3,4));
    // do{
    //     console.log("no sale del bucle");
    // }while(isNaN(3,5));


    //EJERCICIOS <---------------------

    var formulario = document.querySelector("#formulario");
    var dashed = document.querySelector(".dashed");
    dashed.style.display = "none";
    formulario.addEventListener('submit', () => {
        console.log("Evento submit calculado");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);
        console.log("Nombre: ", nombre, " - Apellidos: ", apellidos, " - Edad: ", edad);
        console.log(edad, isNaN(edad), (edad >= 0));
        var datoInvalido = false;
        if (nombre.trim() == null || nombre.trim().length == 0) {
            console.log("El nombre no es valido");
            var span = document.querySelector("#error_nombre");
            span.style.display = "block";
            span.style.color = "red";
            dashed.style.display = "none";
            datoInvalido = true;
        } else {
            document.querySelector("#error_nombre").style.display = "none";
        }
        if (apellidos.trim() == null || apellidos.trim().length == 0) {
            console.log("Los apellidos no son validos");
            var span = document.querySelector("#error_apellidos");
            span.style.display = "block";
            span.style.color = "red";
            dashed.style.display = "none";
            datoInvalido = true;
        }
        else {
            document.querySelector("#error_apellidos").style.display = "none";
        }
        if (edad == null || edad <= 0 || isNaN(edad)) {
            console.log("La edad no es valida");
            var span = document.querySelector("#error_edad");
            span.style.display = "block";
            span.style.color = "red";
            dashed.style.display = "none";
            datoInvalido = true;
        } else {
            document.querySelector("#error_edad").style.display = "none"
        }
        if (datoInvalido) return false;
        dashed.style.display = "block";
        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");
        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;
        // var parrafo = document.createElement("p");
        // parrafo.append(nombre);
        // parrafo.append(apellidos);
        // parrafo.append(edad);
        // dashed.append(parrafo);
        // return false;
    });


    


});




