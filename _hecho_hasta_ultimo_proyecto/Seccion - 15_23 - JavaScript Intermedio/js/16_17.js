'use strict'

//DOM - DOCUMENT OBJECT MODEL
var caja = document.getElementById('micaja');
console.log(caja);
caja.innerHTML = "Joder se cambia";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.fontSize = "20px";
caja.style.color = "white";
//para añadir una clase al html
caja.className = caja.className + " hola";

//Otra forma de seleccionar un elemento, con query selector que es similar a jquery

var caja2 = document.querySelector("#caja2");
console.log(caja2);
// var prueba = document.querySelector(".prueba");
// console.log(prueba);

// CONSEGUIR ELEMENTOS POR SUS ETIQUETAS
var todosLosDivs = document.getElementsByTagName("div");
todosLosDivs[1].innerHTML = "Tambien lo puedo cambiar asi";
console.log(todosLosDivs);
todosLosDivs = [...todosLosDivs];
console.log(todosLosDivs);

todosLosDivs.forEach((valor, indice) => {
    console.log(indice);
    console.log(valor.innerHTML);
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(valor.innerHTML);
    parrafo.prepend(texto);
    console.log(parrafo.innerHTML);
    document.querySelector("#miseccion").append(parrafo);
});

// CONSEGUIR ELEMENTOS POR SU CLASE
var todasLasClases = document.getElementsByClassName("prueba");
var todasLasClasesArray = [...todasLasClases];
console.log(todasLasClases, todasLasClasesArray);

//cambiassr color a todos los elementos de una clase

var todasLasCajas = document.getElementsByClassName("caja");
console.log(todasLasCajas);
todasLasCajas[0].className = todasLasCajas[0].className + " azul";
todasLasCajas[2].className = todasLasCajas[2].className + " azul";

for (var indice in todasLasCajas) {
    console.log("Indice: ", indice);
    console.log(todasLasCajas[indice]);
    console.log(todasLasCajas[indice].className);
    if (todasLasCajas[indice].className == undefined) {
        console.log("AQUI ROMPE EL BUCLE");
        break;
    }
    else if (todasLasCajas[indice].className.includes("azul")) {
        console.log("Aqui cambia el color a azul");
        todasLasCajas[indice].style.background = "blue";
    }

}
//Seleccionaria la primera
console.log(document.querySelector("div.azul"));
//SEleccionaria todos
console.log(document.querySelectorAll("div.azul"));


////////////////////////////////////////
// BOM -BROWSER OBJECT MODEL
function getBom() {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(window.screen.height);
    console.log(window.screen.width);
    console.log(window.location);
    console.log(window.location.href);
}

getBom();


//con este metodo redireccionariamos la pagina a otra pagina
function redirect(url){
    windows.location.href =url;
}

//Con este abririamos otra ventana
function abrirVentana(url){
    window.open(url,"",""); 
    // o con propiedades
    window.open(url,"","width=400, height=300");
}
