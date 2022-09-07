import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//importamos las rutas
import { AppRoutingModule, } from './app-routing.module';
// routing, appRoutingProviders
import { AppComponent } from './app.component';
//Para Peticiones ajax en el back-end
import { HttpClientModule } from "@angular/common/http"

import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ExternoComponent } from './externo/externo.component';

//Pipe
import {CalculadoraPipe} from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    NavComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // routing
    HttpClientModule
  ],
  providers: [],
  // appRoutingProviders
  bootstrap: [AppComponent]
})
export class AppModule { }
