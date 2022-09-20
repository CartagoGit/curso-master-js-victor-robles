import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';

@NgModule({
  declarations: [
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    CreateProjectComponent,
    ProjectDetailsComponent,
    EditProjectComponent,
  ],
  imports: [CommonModule, FormsModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
