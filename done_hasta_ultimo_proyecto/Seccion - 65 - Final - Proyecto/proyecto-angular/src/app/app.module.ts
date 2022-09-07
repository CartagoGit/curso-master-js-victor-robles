import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//ANIMACIONES PARA EL ROUTER OUTLET
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//PARA PODER REALIZAR PETICIONES AJAX A LA BASE DE DATOS
import { HttpClientModule} from "@angular/common/http";
//PARA PODER TRABAJAR CON EL TWO WAY DATA-BINDING [()] bidireaccional
import {FormsModule} from "@angular/forms"

//ROUTES
import { AppRoutingModule } from './app-routing.module';

//COMPONENTES
import { AppComponent } from './app.component';
//COMPONENTES PERSONALES
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    TopNavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
