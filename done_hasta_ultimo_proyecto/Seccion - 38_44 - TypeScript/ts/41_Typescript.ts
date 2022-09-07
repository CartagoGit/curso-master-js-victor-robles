//Para compilar, nos ponemos en la carpeta donde esta el archivo y escribimos: tsc archivo.ts


// 
// O si queremos compilar todos los archivos segun los guarde: 
// ponemos "tsc --init" en el proyecto para crear el archivo tsconfig.json
//Pulsamos control+shift+B y seleccionamos "tsc: watch - tsconfig.json"
// Podremos cambiar parametros del tsconfig.json para cambiar datos de la compilacion o de su visionado

//https://stackoverflow.com/questions/29996145/visual-studio-code-compile-on-save



console.log("Pero si cambio se actualiza el hola mundo?");

//string
let cadena: string = "unaWeb.com";
//number
let edad: number = 12;
//boolean
let true_false: boolean = true;
//any Cualquier valor
let cualquiera: any = "gola"
cualquiera = true;
//arrays
var lenguajes: Array<string> = ["PHP", "JS", "TS", "C#"]

let years: number[] = [12, 3, 4, 123, 123412, 2]

//varios tipos
let dosTipos: boolean | number = 12;

//Crear tipo de dato
type letras_o_numeros = string | number;
let algo: letras_o_numeros = "Esto puede ser solo lo que le he dicho";

console.log(cadena, 12, true_false, cualquiera, lenguajes, years, dosTipos, algo);

//funciones
//en este ejemplo recibe un numero y retorna un string
function getNumero(num: number = 1): string {
    return "El numero es: " + num;
}

console.log(getNumero());

//OBJETOS
// Clase (modelo del objeto)
class Camiseta {
    //Propiedades

    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;


    //CONSTRUCTORES
    //  SOLO UN CONSTRUCTOR
    constructor(color: string = "Azul", modelo: string = "Manga Corta", marca: string = "Adidas", talla: string = "M", precio: number = 30) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // constructor() {
    //     this.color = "";
    //     this.modelo = "";
    //     this.marca = "";
    //     this.talla = "";
    //     this.precio = 0;
    // }

    //Metodos
    public setColor(color: string) {
        this.color = color;

    }
    public getColor() {
        return this.color;
    }
}

var camiseta = new Camiseta();

camiseta.color = "Rojo";
camiseta.modelo = "Manga Larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 15;

camiseta.setColor("Azul");

var otra_camiseta = new Camiseta(undefined, undefined, undefined, undefined, 2);
console.log(camiseta.getColor(), otra_camiseta);



