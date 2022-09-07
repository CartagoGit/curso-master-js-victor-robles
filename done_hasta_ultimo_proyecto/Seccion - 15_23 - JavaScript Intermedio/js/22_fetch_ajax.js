'use strict'

//FETCH Y AJAX
window.addEventListener('load', () => {

    var div_usuarios = document.querySelector("#usuarios");
    var div_usuario = document.querySelector("#usuario");
    var total_usuarios = 0;
    //ESTO ES UNA PROMESA, donde pasamos unos datos por url, en este caso una api rest siumulada desde dicha direccion

    getUsuarios()
        .then(datos => datos.json())
        .then(users => {
            // usuarios = users;
            // console.log(usuarios);
            listadoUsuarios(users.data);
        })
        .then(() => {
            do {
                // var indice_usuario = prompt('Elige el inidice del usuario a buscar');
                var indice_usuario = 2;
                console.log(indice_usuario, total_usuarios);
            } while (indice_usuario <= 0 || indice_usuario > total_usuarios);
            return getUsuario(indice_usuario);
        })
        .then(data => data.json())
        .then(usuario => {
            // console.log(usuario);
            mostrarUsuario(usuario);
            return getInfo();
        })
        .then(data => {
            console.log(JSON.parse(data));
        })
        .catch(error => {
            console.log(error);
        });
    //CADA THEN ESPERA QUE TERMINE LA PROMESA ANTERIOR ASYNCRONA

    //CATCH PARA CAPTURAR ERRORES DE LAS PROMESAS

    function getUsuarios() {
        return fetch("https://reqres.in/api/users");
    }
    function getUsuario(indice) {
        return fetch("https://reqres.in/api/users/" + indice);
    }

    //CREAR UNA PROMESA
    function getInfo() {

        var profesor = {
            nombre: 'Mario',
            apellidos: "Cabrero Volarich",
            ciudad: "Sevilla"
        };
        return new Promise((resolve, reject) => {
            var profesor_string = JSON.stringify(profesor);
            if (typeof profesor_string != 'string') return reject('error');

            return resolve(profesor_string);
        });
    }

    function listadoUsuarios(usuarios) {
        usuarios.map((users, i) => {
            let nombre = document.createElement('h2');

            nombre.innerHTML = i + 1 + " - " + users.first_name + " " + users.last_name;
            total_usuarios++;
            var clase_loading = document.querySelectorAll("#usuarios .loading");
            clase_loading.forEach((elemento_cargando) => {

                elemento_cargando.style.display = "none";
            });
            div_usuarios.appendChild(nombre);
        });
    }

    function mostrarUsuario(usuario) {
        console.log(usuario);
        let nombre = document.createElement('h3');
        let avatar = document.createElement('img');
        nombre.innerHTML = " - " + usuario.data.first_name;
        avatar.src = usuario.data.avatar;
        avatar.width = "100";

        var clase_loading = document.querySelectorAll("#usuario .loading");
        console.log(clase_loading);
        clase_loading.forEach((elemento_cargando) => {
            elemento_cargando.style.display = "none";
        });
        div_usuario.appendChild(nombre);
        div_usuario.appendChild(avatar);
    }


    //FECHAS Y MATEMATICAS

    //FECHAS
    var div_fecha = document.querySelector("#fecha");

    var fecha = new Date();
    var year = fecha.getFullYear();
    var month = 1 + fecha.getMonth();
    var day = fecha.getDate();
    var hour = fecha.getHours();
    var minutes = fecha.getMinutes();

    var texto_fecha = `
        <h4>El año es: ${year}</h4>
        <h4>EL mes es: ${month}</h4>
        <h4>El dia es: ${day}</h4>
        <h5>La hora es: ${hour}:${minutes}</h5>
    `
    div_fecha.innerHTML = texto_fecha;

    // FUNCIONES PARA OPERACIONES MATEMATICAS

    //Random y ceil para quitar decimales
    console.log(Math.ceil(Math.random()*10000));
});
