'use strict'

window.addEventListener('load', () => {
    //THIS<-------------------------
    var btn_this = document.querySelector("#prueba_this");
    btn_this.addEventListener('click', function () {
        //Al usar this, hago referencia al boton o al objeto del evento
        console.log(this);
        this.style.border = "10px solid black";
    });

    //LAS EXPRESIONES DE FLECHA NO FUNCIONAN CON THIS <----------------
    // var btn_json = document.querySelector("#prueba_json");
    // btn_json.addEventListener('click', () => {
    //     //Al usar this, hago referencia al boton o al objeto del evento
    //     console.log(this);
    //     this.style.border = "10px solid black";
    // });

    // JSON<------------------------------------

    var pelicula = {
        titulo: 'Batman vs Superman',
        year: 2017,
        pais: 'EEUU'
    };
    pelicula.year=2018;
    console.log(pelicula.year);

    var peliculas = [
        {titulo: "La verdad duele", year:2016, pais: "Francia"},pelicula
    ];

    console.log(peliculas);
    var caja_peliculas =document.querySelector("#peliculas");
    for (var index in peliculas){
        var p = document.createElement("p");
        p.append(peliculas[index].titulo + " - " + peliculas[index].year);
        caja_peliculas.append(p);
    }
});