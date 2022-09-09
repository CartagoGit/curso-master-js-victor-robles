"use strict";
console.log("Pero si cambio se actualiza el hola mundo?");
var cadena = "unaWeb.com";
var edad = 12;
var true_false = true;
var cualquiera = "gola";
cualquiera = true;
var lenguajes = ["PHP", "JS", "TS", "C#"];
var years = [12, 3, 4, 123, 123412, 2];
var dosTipos = 12;
var algo = "Esto puede ser solo lo que le he dicho";
console.log(cadena, 12, true_false, cualquiera, lenguajes, years, dosTipos, algo);
function getNumero(num) {
    if (num === void 0) { num = 1; }
    return "El numero es: " + num;
}
console.log(getNumero());
var Camiseta = (function () {
    function Camiseta(color, modelo, marca, talla, precio) {
        if (color === void 0) { color = "Azul"; }
        if (modelo === void 0) { modelo = "Manga Corta"; }
        if (marca === void 0) { marca = "Adidas"; }
        if (talla === void 0) { talla = "M"; }
        if (precio === void 0) { precio = 30; }
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.color = "Rojo";
camiseta.modelo = "Manga Larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 15;
camiseta.setColor("Azul");
var otra_camiseta = new Camiseta(undefined, undefined, undefined, undefined, 2);
console.log(camiseta.getColor(), otra_camiseta);
