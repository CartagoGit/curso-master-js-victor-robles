import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ProjectFromApi } from '../../interfaces/proyects.interface';
import { ProjectService } from '../../services/project.service';

@Component({
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  private _url: string = environment.apiUrl;
  private _urlImage!: string;
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
        this._urlImage =
          this._url + '/project/get-image/' + this.project.file[0].filename;
        console.log(1);
      },
      error: (err: Error) => {
        console.warn(
          'Hubo un error al cargar el proyecto con id: "' +
            id +
            '". Posiblemente no exista un proyecto con esa id en la base de datos',
          err
        );
        this._router.navigate(['/proyectos']);
      },
    });
  }

  getImageFromApi(project: ProjectFromApi | undefined) {
    if (project && project.file[0]) return this._urlImage;
    else return '../../../../assets/img/no_image.jpg';
  }

  deleteProject() {
    Swal.fire({
      title: '¿Estas seguro que quieres borrar el proyecto?',
      text: 'Si borras el proyecto no habra vuelta atras',
      icon: 'error',
      showDenyButton: true,
    }).then((result) => {
      if (!this.project) return;
      if (result.isConfirmed) {
        Swal.showLoading();
        this._ps.deleteProject(this.project._id as string).subscribe({
          next: (res) => {
            Swal.hideLoading();
            Swal.fire(
              'Eliminado',
              'El proyecto se elimino correctamente de la base de datos',
              'success'
            );
            this._router.navigate(['/proyectos']);

            console.log(res);
          },
          error: (err) => {
            Swal.hideLoading();
            console.log('Hubo un error al eliminar el proyecto: ' + err);
            Swal.fire(
              'Error al eliminar',
              'Hubo un error al eliminar el proyecto: ' + err,
              'error'
            );
          },
        });
      }
    });
  }
}
