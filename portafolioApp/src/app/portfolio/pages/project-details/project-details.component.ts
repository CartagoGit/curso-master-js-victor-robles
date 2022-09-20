import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProjectFromApi } from '../../interfaces/proyects.interface';
import { ProjectService } from '../../services/project.service';

@Component({
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  private _url: string = environment.apiUrl;
  public project!: ProjectFromApi | undefined;
  constructor(
    private _ps: ProjectService,
    private _router: Router,
    private _actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._actRoute.params.subscribe((params) => {
      const id = params['id'];
      this.getProject(id);
    });
  }

  getProject(id: string): void {
    this._ps.getProject(id).subscribe({
      next: (res: ProjectFromApi) => {
        this.project = res;
      },
      error: (err: Error) => {
        console.log('Hubo un error al cargar el proyecto: ' + err);
      },
    });
  }

  getImageFromApi(project: ProjectFromApi | undefined) {
    if (project && project.file[0])
      return this._url + '/project/get-image/' + project.file[0].filename;
    else return '../../../../assets/img/no_image.jpg';
  }
}
