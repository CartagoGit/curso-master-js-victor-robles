'use strict'

// EJERCICIO 1

// programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
// PLUS: Si los numeros no son un numero nos vuelva a pedir los datos

// do {
//     var num1 = parseFloat(prompt("Cual es el primer numero?", 0));
//     var num2 = parseFloat(prompt("Cual es el segundo numero?", 10));
//     console.log(typeof num1, num1, typeof num2, num2);
// } while (isNaN(num1) || isNaN(num2));



// if (num1 < num2) {
//     console.log("el segundo numero es mayor que el primero");
// } else if (num1 > num2) {
//     console.log("El primer numero es mayor que el segundo");
// } else {
//     console.log("Los dos numeros son iguales");
// }


// EJERCICIO 2

// utilizar bucle que muestre una suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado

// var suma = 0;
// var contador = 0;

// do {
//     var numero = parseFloat(prompt("Introduce numeros hasta que metas uno negativo", 0));
//     if (isNaN(numero)) {
//         numero = 0;
//     }
//     else if(numero >=0){
//         suma = suma + numero;
//         // suma += numero;
//         contador ++;
//     }
//     console.log(suma, contador);
// } while ( numero >= 0)

// var media = suma/contador;

// console.log("LA SUMA DE TODOS LOS NUMEROS INTRODUCIDOS ES:"+suma, "LA MEDIA DE TODOS LOS NUMEROS INTRODUCIDOS ES: "+media);


// EJERCICIO 3

// hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario

//PASO DE HACERLOS HASTA QUE ENCUENTRE ALGUNO QUE NO SEPA HaCER


// EJERCICIO 4

// Mostrar todos los numeros impares que hay entre 2 numeros introducidos por el usuario


// var num1 = parseFloat(prompt("primer numero"));
// var num2 = parseFloat(prompt("segundo numero"));

// while (num1 < num2){
//     num1++;

//     if(num1%2 !=0){
//         console.log(num1+" es impar");
//     }
// }


// // EJERCICIO 5

// // Programa que muestre todos los numeros divisores introducidos por un prompt
// var num =parseFloat(prompt(""));

// for(var i=0; i< num; i++){
    
//     if(num%i== 0){
//         console.log("Divisor: "+i);
//     }

// }

// EJERCICIO 6

// programa que diga si un numero es par o ImageBitmapRenderingContext.
// Tiene que tener una ventana que pida numero
// Tiene que comprobar si el numero es validoy si no lo es pedirlo de nuevo


// EJERCICIO 7

// Tabla de multiplicar de un numero introducido por pantalla


// EJERCICIO 8

//Hacer una calculadora
