import { Injectable } from "@angular/core";
import { Zapatilla } from '../models/zapatilla'

@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>
    constructor() {
        this.zapatillas = [
            new Zapatilla('Classic', 80, "Reebok", "Blanco", true),
            new Zapatilla('Runner MD', 50, "Nike", "Negro", true),
            new Zapatilla('Runner MD', 50, "Nike", "Blanco", false),
            new Zapatilla('Yezzy', 180, "Adidas", "Azul", true),
            new Zapatilla('Air', 250, "Jordan", "Rojo", true),
            new Zapatilla('Air', 250, "Jordan", "Rojo", true),
            new Zapatilla('Air', 250, "Jordan", "Rojo", true),
            new Zapatilla('Runner MD', 50, "Nike", "Negro", true),
            new Zapatilla('Runner MD', 50, "Nike", "Negro", true),
            new Zapatilla('Runner MD', 50, "Nike", "Negro", true)
        ];
    }
    getHolaMundo(){
        return "Hola Mundo desde el servicio";
    }
    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }
}