import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Project, ProjectFromApi } from '../../interfaces/proyects.interface';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { CreateProjectComponent } from '../create-project/create-project.component';

@Component({
  // templateUrl: './edit-project.component.html',
  templateUrl: '../create-project/create-project.component.html',
})
export class EditProjectComponent
  extends CreateProjectComponent
  implements OnInit
{
  public projectFromApi!: ProjectFromApi;
  public override title: string = 'Editar Proyecto';
  public override imageTitleInput = '¿Cambiar imagen del proyecto?';
  public override textInputSubmit: string = 'Actualizar proyecto';
  private _url: string = environment.apiUrl;
  constructor(
    private _actRoute: ActivatedRoute,
    private _us: UploadService,
    private _router: Router,
    private _ps: ProjectService
  ) {
    super(_ps, _us);
  }

  override ngOnInit(): void {
    this._actRoute.params.subscribe((params) => {
      const id = params['id'];
      this.getProject(id);
    });
  }

  getProject(id: string): void {
    this._ps.getProject(id).subscribe({
      next: (res) => {
        this.projectFromApi = res;
        this.project = { ...this.projectFromApi, file: undefined };
        this.imageSource = this.getImageFromApi(this.projectFromApi);
        console.log(this.inputFile.nativeElement.value);
        console.log(this.projectFromApi.file[0].filename);
        this.inputFile.nativeElement.name =
          this.projectFromApi.file[0].filename;
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
    if (project && project.file[0])
      return this._url + '/project/get-image/' + project.file[0].filename;
    else return '../../../../assets/img/no_image.jpg';
  }
  override onSubmit(form: NgForm): void {
    Swal.showLoading();
    this._ps.updateProject(this.project).subscribe({
      next: (res) => {
        if (res._id) {
          if (!this.project.file) {
            Swal.fire(
              'Exito',
              'El proyecto se ha guardado correctamente en la base de datos sin nueva imagen',
              'success'
            );
            this._router.navigate(['/detalles-proyecto/', res._id]);
          } else {
            const isError = this.uploadWithImage(res, form);
            if (!isError)
              this._router.navigate(['/detalles-proyecto/', res._id]);
            else
              Swal.fire(
                'Hubo un problema al guardar la imagen del proyecto',
                'error'
              );
          }
        } else {
          Swal.fire(
            'Hubo un problema al guardar el proyecto. No se recibio una id',
            '',
            'error'
          );
        }
      },
      error: (err) => {
        console.log(err);
        Swal.fire('Hubo un problema al guardar el proyecto', '', 'error');
      },
      complete: () => {
        Swal.hideLoading();
      },
    });
  }
}
