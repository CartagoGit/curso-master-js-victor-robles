'use strict'


//LOCALSTORAGE
window.addEventListener('load', () => {

    //Comprobar si el localStorage esta disponible
    if (typeof (Storage) != 'undefined') {
        console.log("LocalStorage disponible");
    } else {
        console.log("Incompatible con LocalStorage");
    }

    // GuardarDatos en el LocalStorage
    localStorage.setItem("titulo", "Curso de JS");

    //recuperar elemento
    document.querySelector("#storage").innerHTML = localStorage.getItem("titulo");


    // Guardar Objetos
    var usuario = {
        nombre: "Mario",
        email: "email@cualquiera.com",
        web: "unaweb.com"
    };
    //Hay que convertir el objeto JSON en formato string
    localStorage.setItem("usuario", JSON.stringify(usuario));
    //Ahora hay que volver a convertirlo a Json ya que ahora mismo es un string
    var usuario_json = JSON.parse(localStorage.getItem('usuario'));
    console.log(usuario_json);
    document.querySelector("#storage_json").innerHTML = usuario_json.nombre;

    //Eliminar elemento del localstorage
    localStorage.removeItem("usuario");

    //eliminar todo del localstorage
    localStorage.clear();


    //EJERCICIO 
    var formulario = document.querySelector("#form_pelis");
    var formulario_borrar = document.querySelector("#form_pelis_borrar");
    var in_pelicula = document.querySelector("#in_peliculas");
    var out_pelicula = document.querySelector("#out_peliculas");
    var ul_peliculas = document.querySelector("#ul_peliculas");
    formulario.addEventListener('submit', () => {

        var titulo = in_pelicula.value;
        // console.log(titulo);
        if (titulo.length > 0) {
            localStorage.setItem(titulo, titulo);
            recargarUl();

        } else {
            return false;
        }


        // console.log(elementos_storage);
        // .innerHTML = elementos_storage;
    });
    formulario_borrar.addEventListener('submit', () => {
        var titulo = out_pelicula.value;
        if (titulo.length > 0) {
            localStorage.removeItem(titulo, titulo);
            recargarUl();

        } else {
            return false;
        }
    });

    function recargarUl() {
        var ul = document.createElement('ul');
        for (var i in localStorage) {

            if (typeof localStorage[i] == 'string') {
                console.log(i, "localStorage: ", localStorage[i]);
                var li = document.createElement("li");

                li.append(localStorage[i]);
                console.log('li: ', li);
                ul.prepend(li);
            }
        }
        console.log('ul: ', ul);
        ul_peliculas.innerHTML = ul.innerHTML;
    }


});