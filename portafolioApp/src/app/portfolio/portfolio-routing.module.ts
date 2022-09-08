import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ProjectsComponent } from './pages/projects/projects.component';

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
