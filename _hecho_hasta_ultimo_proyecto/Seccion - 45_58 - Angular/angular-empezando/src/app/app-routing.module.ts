
//Importar modulos del ruter

import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { HomeComponent } from './home/home.component';
import {ZapatillasComponent} from "./zapatillas/zapatillas.component";
import {VideojuegoComponent} from "./videojuego/videojuego.component";
import {CursosComponent} from "./cursos/cursos.component";
import {ExternoComponent} from "./externo/externo.component";
import {ContactoComponent} from "./contacto/contacto.component"

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'zapatillas', component: ZapatillasComponent},
  {path: 'videojuegos', component: VideojuegoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/:nombre/:apellidos/:followers', component: CursosComponent},
  {path: 'externo', component: ExternoComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent},
];

//exportar el modulo del router
// export const appRoutingProviders: any[] = [];
// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
