import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';

@NgModule({
  declarations: [
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    CreateProjectComponent,
  ],
  imports: [CommonModule, FormsModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
