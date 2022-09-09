import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importamos los componentes 
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sobre-mi',
    pathMatch: 'full'
  },
  {
    path: 'sobre-mi',
    component: AboutComponent,
    data: { routeIdx: 0 }
  },
  {
    path: 'proyectos',
    component: ProjectsComponent,
    data: { routeIdx: 1 }
  },
  {
    path: 'crear-proyecto',
    component: CreateComponent,
    data: { routeIdx: 2 }
  },
  {
    path: 'contacto',
    component: ContactComponent,
    data: { routeIdx: 3 }
  },
  {
    path: '**',
    component: ErrorComponent,
    data: { routeIdx: 4 }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
