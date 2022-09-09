import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: "./videojuego.component.html"
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;

    constructor() {
        this.titulo = "Componente de videojuegos";
        this.listado = "Listado de juegos populares"
    }

    ngOnInit() {
        // console.log("OnInit de videojuegos ejecutado");
    }

    ngDoCheck() {
        // console.log("DoCheck de videojuegos ejecutado");
    }
    ngOnDestroy(){
        // console.log("OnDestroy de videojuegos ejecutado");
    }

    setTitulo(titulo: string):void {
        this.titulo = titulo;
    }
}