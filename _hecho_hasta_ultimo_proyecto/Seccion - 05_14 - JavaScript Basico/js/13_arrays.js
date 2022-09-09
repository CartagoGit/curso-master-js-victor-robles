'use strict'


//ARRAYS O ARREGLOS O MATRICES

// se pueden definir de las siguientes formas
var nombres = ["Mario", "Victor", "Pepe", "Maria"];

var lenguajes = new Array("Javascript", "php", "go", "c#");

console.log(nombres, lenguajes);

console.log(nombres[2]);

console.log(lenguajes.length);
// Creando una lista directamente en el html con for.
document.write("<h3>Lenguajes</h3>");
document.write("<ul>");
for (var i = 0; i < lenguajes.length; i++) {
    document.write("<li>" + lenguajes[i] + "</li>")
}
document.write("</ul>");

//creando una lista directamente en el html con foreach
document.write("<h3>Nombres</h3>");
document.write("<ul>");
//indice y data son opcionales, pero puedo ponerlos para ver que mas estoy recorriendo
nombres.forEach((elemento, index, data) => {
    document.write("<li>" + index + " " + elemento + "</li>");
    console.log(index, data);
});
document.write("</ul>");

//Array de arrays o multidimensionales <--------------------
var categorias = new Array("Accion", "Terro", "Comedia");
var peliculas = new Array("La vida es bella", "American history X", "12 Monos ", "Cuaolquier otra pelicula");
var cine = new Array(categorias, peliculas);

console.log(cine);
console.log(cine[0][2]);

//para añadir un elemento a un array en javascript <------------------------
console.log(peliculas);
peliculas.push("Batman");
console.log(peliculas);

//Para eliminar un elemento <------------------------
//saca el ultimo elemento;
peliculas.pop();
console.log(peliculas);

var indice = peliculas.indexOf("La vida es bella");
//con slice eliminamos el numero en el indice del array y el numero de elementos que queremos elminar
peliculas.splice(indice, 1);
console.log(peliculas);

//Unir el array en un string separado por comas
var peliculas_string = peliculas.join();
console.log(peliculas_string);

//CONVERTIR UN STRIN EN UN ARRAY <------------------
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);


//ORDENAR <------------------------------
peliculas.sort();
console.log(peliculas);
//Cambiar el orden
peliculas.reverse();
console.log(peliculas);

//RECORRER ARREGLOS CON FOR IN <------------------------

document.write("<ul>");
for (let indice in lenguajes) {
    document.write("<li>" + indice + " " + lenguajes [indice] + "</li>");
}
document.write("</ul>");


//BUSQUEDAS EN UN ARRAY <------------------------
var buscar_en_array = lenguajes.find(lenguaje => lenguaje == "php");

console.log(buscar_en_array);

var buscar_indice = lenguajes.findIndex(dat => dat == "php");

console.log(buscar_indice);

//con array de numeros comrpobar si existe el valor, true o false
var precios = [10,20,60,54, 12];
var buscar_precio = precios.some(dat => dat >=80);
console.log(buscar_precio);

//EJERCICIOS DE ARRAYS <------------------------

// 1. Pida 6 numeros por pantall y los meta en un array
// 2. Mostrar los elementos del array en el cuerpo de la pagina y en la consola
// 3. Ordenar el array ordenado y mostrarlo
// 4. Invertir su orden y mostrarlo
// 5. Mostrar el numero de elementos del array
// 6. Busqueda de un valor introducido por el usuario y que nos diga si esta en el array y nos diga su indice

// Pasando de perder tiempo haciendo algo que ya se hacer.