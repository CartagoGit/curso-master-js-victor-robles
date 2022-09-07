//Para adaptar el codigo a usos mas estrictos de buena practica
'use strict'


//VARIABLES
// una variable es un contenedor de informacion

var pais = "España";
var continente = "Europa";
var antiguedad = 2019;
var pais_y_continente = pais + " - " + continente;
var pais = "Mexico";
var continente = "Latinoamérica";



console.log(pais, continente, antiguedad, pais_y_continente);

//Ejemplo con let y var
let prueba = "hola";
console.log(prueba);


//prueba con var
var numero =40;
console.log(numero);
if(true){
    var numero=50;
    console.log(numero);
}
console.log(numero);

// prueba con let

var texto ="Curso Js";
console.log(texto);
if(true){
    let texto="Curso JavaScript";
    console.log(texto);
}
console.log(texto);


//Ejemplo constantes // una variable que no puede cambiar

var web = "http://unaWebCualquiera.com";
const ip = "192.99.2.2";
web = "http:_/juajua"
// const ip= "188.1.2.3"; Con esto falla porque una constante no puede cambiar
console.log(web,ip);


//OPERADORES
var num1 = 7;
var num2 = 8;
var suma = num1+num2;
var resta = num1-num2;
var multi= num1*num2;
var divis =num1/num2;
var resto = num1%num2;
console.log(suma+" | " +resta+" | " +multi+"| " +divis+" | "+resto );


//TIPOS DE DATOS

var num_ent = 44;
var cadena_texto = "Esto es una 'cadena' de texto";
var booleano = "true"; 
var numero_falso = "33";
var numero_de_verdad = Number(numero_falso);
var numero_con_decimales = parseFloat(43.5);
var numero_entero= parseInt(43.5);
// parseInt();  convertir a numero entero
// parseFloat(); convertir a decimal
var otro_numero_falso = String(44);
console.log(num_ent, cadena_texto, booleano, numero_falso, numero_de_verdad,otro_numero_falso);


//TYPEOF typeof en minusculas se usa para saber el tipo de dato
console.log(typeof  numero_con_decimales,numero_con_decimales, typeof numero_entero,numero_entero);
