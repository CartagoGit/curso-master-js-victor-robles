import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {

    //dato | calculadora: otroDato
    //param1              param2
    transform(value01: any, value02: any) {
        let operaciones = `
        Primer número: ${value01} - Segundo número: ${value02} -
        Suma: ${value01 + value02} -
        Resta: ${value01 - value02} -
        Multiplicacion: ${value01 * value02} -
        Division: ${value01/value02}
        `;

        return operaciones;
    }

}