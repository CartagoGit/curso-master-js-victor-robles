var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De Disco',
    velocidadMaxima: '60km',
    cambiaColor: function (nuevo_color) {
        // bicicleta.color = nuevo_color;

        this.color = nuevo_color;
        console.log(this);
    }
}

console.log(bicicleta);
bicicleta.cambiaColor("Azul");
console.log(bicicleta);
bicicleta.color="Marron";
console.log(bicicleta);
