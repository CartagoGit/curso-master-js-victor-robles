import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public titulo:string = 'Aprendiendo Angular';
  public descripcion: string;
  public mostrar_videojuegos:boolean = true;
  public config: any;

  constructor(){
    this.config = Configuracion;
    this.titulo = Configuracion.titulo;
    this. descripcion = Configuracion.descripcion;
  }

  ocultarVideojuegos(){
    this.mostrar_videojuegos = !this.mostrar_videojuegos;
    
  }
}
