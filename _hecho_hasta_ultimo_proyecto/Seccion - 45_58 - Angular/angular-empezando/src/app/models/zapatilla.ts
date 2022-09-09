export class Zapatilla {
    // public nombre: string;
    // public precio: number;
    // public marca: string;
    // public color: string;
    // public stock: boolean;

    // constructor(nombre, marca, color, precio, stock){
    //     this.nombre = nombre;
    //     this.marca = marca;
    //     this.color =color;
    //     this.precio = precio;
    //     this.stock = stock;

    // }

    //PODEMOS ABREVIARLO ASI:
    constructor(
        public nombre: string,
        public precio: number,
        public marca: string,
        public color: string,
        public stock: boolean
        ) { }

}