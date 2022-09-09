'use strict'

//Funciones <----------------------
//una funcion es una agrupacion reutilizable de un conjunto de instrucciones

function calculadora() {
    return "Hola soy la calculadora!!"
}

console.log(calculadora());


//RECIBIR PARAMETROS <----------------------
function multiplicarPorDos(num) {
    return num * 2;
}

console.log(multiplicarPorDos(3));

//PARAMETROS OPCIONALES <----------------------

function dividirDosNum(num1, num2 = 2) {
    return num1 / num2;
}

console.log(dividirDosNum(6));
console.log(dividirDosNum(6, 4));


// FUNCIONES DENTRO DE OTRAS <----------------------

function mostrarSuma() {
    console.log(suma(2, 3));
}

function suma(num1, num2) {
    return num1 + num2;
}

mostrarSuma();

//REST y SPREAD <----------------------

//Al poner los puntos suspensivos delante guarda en un array el numero indefinido de parametros
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("naranja", "manzana", "Sandia", "Pera", "Melon", "Coco");


//si pongo los 3 puntos delante  me hace un spreed y me pone cada elemento del array como parametro individual
var frutas = ['naranja', 'manzana'];
listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");


//Si lo pongo sin nada en el primer y en el segundo ejemplo:

//En este caso se guardaria en la variable resto de frutas unicamente el valor Sandia, despreciando el resto
function listadoFrutas2(fruta1, fruta2, resto_de_frutas) {
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas2("naranja", "manzana", "Sandia", "Pera", "Melon", "Coco");

//y en este caso se guardaria fruta 1, como un array de naranja y manzana y en fruta 2, la sandia, y en fruta 3 solo la pera
// ya que no se ha hecho un spread al enviar la variable frutas 2 y no se ha hecho un rest en la funcion en la variable resto_de_frutas
var frutas2 = ['naranja', 'manzana'];
listadoFrutas2(frutas2, "Sandia", "Pera", "Melon", "Coco");


// FUNCIONES ANONIMAS Y CALLBACKS <----------------------
// Funcion que no tiene nombre y se puede guardar dentro de una variable
// Un callback es una funcion que se ejecuta dentro de otra

var pelicula = function (nombre) {
    return "La pelicula es: " + nombre;
}

console.log(pelicula("eyes wide shoot"));

//CAll back
function sumame(num1, num2, sumaYmuestra, sumaporDos) {
    var sumar = num1 + num2;
    sumaYmuestra(sumar);
    sumaporDos(sumar);
    return sumar;
}

sumame(5, 7, function (dato) {
    console.log("LA suma es: ", dato);
}, function (dato) {
    console.log("LA suma por dos es: ", (dato * 2));
});

// FUNCION DE FLECHA <----------------------
// es lo mismo que una funcion de callback, solo quitando "function" y añadiendo unas flechas
// es lo mismo pero de una forma mucho mas limpia

sumame(5, 7, dato => {
    console.log("LA suma es: ", dato);
}, dato => {
    console.log("LA suma por dos es: ", (dato * 2));
});


// ambito de variables <----------------------
// PAsando 
 
// METODOS para procesar texto: <----------------------
var cualquiera =2;
cualquiera = cualquiera.toString();
// cualquiera.toLowerCase();
// cualquiera.toUpperCase();
// contaria el numero de cifras, letras o el numero de componentes de un array
console.log(cualquiera.length ); 
//Concatenar
var cualquieraUnido = cualquiera+"loque sea";
console.log(cualquieraUnido);
cualquieraUnido = cualquieraUnido.concat(" "+cualquiera);
console.log(cualquieraUnido);

// METODOS DE BUSQUEDAS EN STRINGS <----------------------

//palabra dentro de un string
var textoBus = "un texto cualquiera para Comprobarlo";
// buscar el numero de la correspondencia
var busqueda = textoBus.indexOf("pararar");
//esto es lo mismo que la anterior
busqueda = textoBus.search("curs");
// Buscar la ultima correspondencia 
busqueda = textoBus.indexOf("pararar");
//Este devuelve un array con la coincidencia
busqueda = textoBus.match("a");
//Si queremos sacar todas las coincidendias hay que ponerlo entre barras para hacer una expresion regular y el barra g para que busque en general 
busqueda = textoBus.match(/a/g);
//Para sacar los caracteres que hay desde el numero de un caracter del array el numero de caracteres posterior por ejemplo:
busqueda = textoBus.substr(10,4);
//sacar la letra de la posicion
busqueda = textoBus.charAt(10);
// Comprobar si el string comienza con... devuelve true o false
busqueda = textoBus.startsWith("un text");
//Comprueba si el texto se encuentra en algun lugar del string...devuelve true o false
busqueda = textoBus.includes("para Com");

//Si sale -1 es que no existe
console.log(busqueda);

// METODOS DE REMPLAZO EN STRINGS <----------------------
var textoRem = " un texto cualqueira PAra comprobar Si funciona   ";
//Rempalzar algo por otro
var remplazo = textoRem.replace("cualqueira", "cualquiera");
//Separar string desde un caracter
remplazo = textoRem.slice(10);
remplazo = textoRem.slice(10,13);
// recortar para cortar string y contenerlo en un array
remplazo = textoRem.split(" ");
// recortar los espacios por delante y por detras
remplazo = textoRem.trim();
console.log(remplazo);

// USO DE PLANTILLAS <----------------------
// sustituir valores de un string sin necesdiad de concatenar


var nom = prompt("Mete TU nombre");
var ape = prompt("Mete TUs apellidos");

var nom_ape = "Mi nombre es: "+nom+". <br/> Y mis apellidos son: "+ape;
// hacer lo mismo con una plantilla
var nom_ape_plant =`
    <h1>Hola Que tal</h1>
    <h3>Mi nombre es: ${nom}</h3>
    <h3>Mis apellidos son: ${ape}</h3>
`;

document.write(nom_ape_plant);