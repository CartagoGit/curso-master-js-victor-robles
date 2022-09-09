import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import {ZapatillaService} from "../services/zapatilla.service";

@Component({
    selector: "zapatillas",
    templateUrl: "./zapatillas.component.html",
    providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit {
    public titulo: string;
    public marcas: string[];
    public color: string;
    public colorPredominante: Array<any>;
    public totalNumPredominante: number;
    public zapatillas: Array<Zapatilla>

    public mi_marca: string;

    constructor(
        private _zapatillaService: ZapatillaService
    ) {
        this.color = 'Amarillo';
        this.titulo = "Componente de Zapatillas";
        this.marcas = new Array();
        


        // console.log("componente de zapatillas creado");
    }

    ngOnInit() {
        this.zapatillas = this._zapatillaService.getZapatillas();
        console.log(this._zapatillaService.getHolaMundo());
        // console.log(this.zapatillas);
        this.getMarcas();
        let coloresPredominantes = new Array();

        coloresPredominantes = this.getColorPredominante();
        // console.log(this.colorPredominante," - ",this.colorPredominante[1][0]);
        console.log('aqui',coloresPredominantes[0]);
        // 
        
        this.totalNumPredominante = coloresPredominantes[1][0];
        this.color = coloresPredominantes[0][0];
        this.colorPredominante = coloresPredominantes[0];
        console.log(this.color);

    }
    getMarca(){
        console.log(this.mi_marca);
    }
    addMarca(){
        if(this.marcas.indexOf(this.mi_marca) < 0){
            this.marcas.push(this.mi_marca);
        }
        
    }
    removeMarca(index:number){
        // delete this.marcas[index];
        this.marcas.splice(index, 1);
        console.log(this.marcas);

    }
    onBlur(){
        console.log("Hemos salido del elemento");
    }
    mostrarPalabra(){
        console.log("KeyupEnter: ",this.mi_marca)
    }
    getMarcas() {

        this.zapatillas.forEach(function (value: any, index: number) {
            //Meter solo los elementos que no sean repetidos->
            if (this.marcas.indexOf(value.marca) < 0) {
                this.marcas.push(value.marca);
            }
        }.bind(this));
        //<- bindeando si se usa una funcion de callback normal
        // Se puede hacer con una funcion de flecha o bindeando el metodo bind, sino This no lo reconoce

        // console.log(this.marcas.sort());
    }
    ordenarPorColor(a: any, b: any) {
        if (a.color > b.color) { //comparación lexicogŕafica
            return 1;
        } else if (a.color < b.color) {
            return -1;
        }
        return 0;
    }
    getColorPredominante() {

        //ORDENAR POR 
        // let zapaOrdenada = this.zapatillas.sort(this.ordenarPorColor);
        // console.log(zapaOrdenada);
        // let contador=0;
        // let aux=zapaOrdenada[0];
        // for (let i = 0; i < zapaOrdenada.length; i++) {
        //     if(aux == zapaOrdenada[i]){
        //         contador++;
        //     } else {
        //         console.log(contador + ",");
        //         contador=1;
        //         aux=zapaOrdenada[i];
        //     }

        // }
        // console.log(aux);


        //CONTADOR POR CADA PROPIEDAD
        var contadores = {};
        for (let i = 0; i < this.zapatillas.length; i++) {
            if (!contadores.hasOwnProperty(this.zapatillas[i].color)) {
                contadores[this.zapatillas[i].color] = 0;
            }
            contadores[this.zapatillas[i].color]++;
        }

        console.log("var contadores: ", contadores);

        var array_max = new Array();
        var array_colores_max = new Array();
        var con = 0;
        for (let color in contadores) {
            // console.log(contadores[color], array_max.length);
            if (con == 0) {
                array_max.push(contadores[color]);
                array_colores_max.push(color);
                // console.log("entra == 0");
            } else {
                // console.log("entra else, ",array_max);
                if (array_max[array_max.length - 1] == contadores[color]) {
                    array_max.push(contadores[color]);
                    array_colores_max.push(color);
                    // console.log("entra push, ",array_max);
                } else if (array_max[array_max.length - 1] < contadores[color]) {
                    array_colores_max = [];
                    array_max = [];
                    array_max.push(contadores[color]);
                    array_colores_max.push(color);
                    // console.log("entra igualar, ",color, array_max);
                }
            }
            con++;
        }
        console.log(array_max, array_colores_max);

        var maximos = new Array(array_colores_max, array_max);
        console.log(maximos);

        return maximos;
    }
}