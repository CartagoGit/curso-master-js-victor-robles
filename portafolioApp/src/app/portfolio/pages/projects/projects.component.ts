import { Component, OnInit } from '@angular/core';
import { ProjectFromApi } from '../../interfaces/proyects.interface';
import { ProjectService } from '../../services/project.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  public projects: ProjectFromApi[] = [];
  public url!: string;
  constructor(private _ps: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
    this.url = environment.apiUrl;
  }

  getProjects() {
    this._ps.getProjects().subscribe({
      next: (res) => {
        if (res) this.projects = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getImageFromApi(project: ProjectFromApi) {
    if (project.file[0])
      return this.url + '/project/get-image/' + project.file[0].filename;
    else return '../../../../assets/img/no_image.jpg';
  }

  
}
