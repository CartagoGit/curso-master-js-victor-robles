import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AboutComponent,
      },
      {
        path: 'proyectos',
        component: ProjectsComponent,
      },
      {
        path: 'crear-proyecto',
        component: CreateProjectComponent,
      },
      {
        path: 'contacto',
        component: ContactComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
