'use strict'
//ME HE SALTADO LA EXPLICACION DE AND, OR, NEGACION, IF, ELSE, ELSE IF....
// VAMOS A VER UNA PRUEBA DE SWITCH QUE NO SE COMO SE HACEN EN JAVASCRIPT EN ESPECIFICO

var edad = 18;
var imprime = "";

switch (edad) {
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
        break;
    case 25:
        imprime = "Ya eres un adulto";
        break;
    case 40:
        imprime = "Crisis de los 40";
        break;
    case 75:
        imprime = "eres ya un anciano";
        break;
    default:
        imprime = "Tu edad es neutra"
        break;
}

console.log(imprime);


//BUCLES - PRUEBA CON DEBUGGER <-------------- Para para el debugger para ver que va pasando en cada paso del bucle

var numero = 100;
for(var i = 0; i<numero; i++){
    console.log(i);
    // debugger; <----------
}

//Paso del while que se como va, veamos el "do while"
// DO WHILE

var years=20;
do{
    console.log(years);
    // <------- EL BREAK CORTA LA EJECUCION DEL BUCLE
    if (years<10) break; 
    years--;
}while(years <30);


// ALERTA

// alert ("Esta es mi alerta")

// CONFIRMACION

// var resultado = confirm("¿Estas seguro de querer continuar?");
// console.log(resultado);

// INGRESAR DATOS
// El segundo valor es el valor por defecto si no se contesta nada
var datos_ventana = prompt("¿Que edad tienes?", 18);
//Siempre va a salir un string, asi que podemos modificarlo a otro tipo de datos
console.log(datos_ventana);