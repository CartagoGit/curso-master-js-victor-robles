//EXPORT CLASS PARA PODER EXPORTARLO
// export no va a funcionar porque faltan modulos de angular, pero para saber como s hace

//Un decorador es un patron de diseño que nos permite hacer una copia de 
// una clase por unos parametros y modificarla para que haga una cosa u otra 
// segun esos parametros que les pasemos
//DECORADOR <----------------------------------
function estampar(logo:string){
    return function(target: Function){
        //aqui declaramos un nuevo tipo de prototipo que podemos ponerselo a las clases, un decorador, en este caso "estampacion"
        target.prototype.estampacion = function():void{
            console.log("Coche estampado con el logo de: "+logo);
        }
    }
}
@estampar('F1')
class Coche implements CocheBase{
    
    private color: string = "Oliva";
    private marca: string = "Renault";
    private modelo: string = "Clio";
    private puertas: number = 5;
    private year: number = 2002;

    constructor(){}

    public setColor(color : string){
        this.color = color;
    }
    public getColor():string{
        return this.color;
    }


}


//INTERFACE SE TIENEEN QUE CUMPLIR EN LA CLASE QUE LA IMPLEMENTA POR NARICES
interface CocheBase{
    setColor(color:string):any;
    getColor():any;
}

var coche = new Coche();
console.log(coche);

//USAR EL DECORADOR<----------------
// coche.estampacion();
//CLASE HIJA

class Deportivo extends Coche{
    public aleron : string = "Alto";
    public turbo: boolean = true;
    public caballos: number = 200;
    
    setTurbo(turbo:boolean){
        this.turbo = turbo;
    }
    getTurbo():boolean{
        return this.turbo;
    }


}
//Tambien hereda el constructor del padre en este caso el padre no tiene constructor definido, pero lo heredaria
var deportivo = new Deportivo();
console.log(deportivo);





