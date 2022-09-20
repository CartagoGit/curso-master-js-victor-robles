import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';

import { Project, ProjectFromApi } from '../../interfaces/proyects.interface';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  @ViewChild('langControl') inputLangControl!: ElementRef<HTMLInputElement>;
  @ViewChild('inputFile') inputFile!: ElementRef<HTMLInputElement>;
  public title: string = 'Crear Proyecto';
  public inputLang: string = '';
  public project!: Project;
  public lastProject!: ProjectFromApi | Project;
  public status!: string;
  public imageSource: string | ArrayBuffer | null | undefined;
  public isImage: boolean = true;
  public areThereLastProject: boolean = false;
  public imageTitleInput: string = 'Imagen del proyecto';
  public textInputSubmit: string = 'Guardar';
  // public filesToUpload!: File[];
  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.project = {
      name: '',
      description: '',
      category: '',
      year: new Date().getFullYear(),
      langs: [],
      file: undefined,
    };
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    this.areThereLastProject = false;
    // GUARDAR LOS DATOS
    this._projectService.saveProject(this.project).subscribe({
      next: (resp: Project) => {
        if (resp._id) {
          //SUBIR IMAGEN
          if (!this.project.file) {
            Swal.fire(
              'Exito',
              'El proyecto se ha guardado correctamente en la base de datos sin imagen',
              'success'
            );
            form.reset();
            this.project.langs = [];
            this.project.file = undefined;
            this.inputFile.nativeElement.value = '';
            this.areThereLastProject = true;
            this.lastProject = resp;
          } else {
            this.uploadWithImage(resp, form);
          }
        } else
          Swal.fire('Hubo un problema al guardar el proyecto', '', 'error');
      },
      error: (err) => {
        console.log(err);
        Swal.fire('Hubo un problema al guardar el proyecto', '', 'error');
      },
    });
  }

  addLang() {
    if (this.inputLang === '' || !this.inputLang) {
      this.inputLangControl.nativeElement.focus();
      return;
    }
    this.project.langs.push(this.inputLang);
    this.inputLang = '';
    this.inputLangControl.nativeElement.focus();
  }

  removeLang(i: number): void {
    this.project.langs.splice(i, 1);
  }

  fileChangeEvent({ target }: any) {
    if (!this.isImageValid(target.value)) {
      target.value = '';
      this.isImage = false;
      return;
    }
    this.isImage = true;
    this.project.file = <Array<File>>target.files;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      return (this.imageSource = fileReader.result);
    };

    fileReader.readAsDataURL(this.project.file[0]);
  }

  isImageValid(fileName: string) {
    return (
      fileName.indexOf('jpg') > -1 ||
      fileName.indexOf('png') > -1 ||
      fileName.indexOf('bmp') > -1 ||
      fileName.indexOf('gif') > -1 ||
      fileName.indexOf('svg') > -1 ||
      fileName.indexOf('jpeg') > -1
    );
  }

  uploadWithImage(resp: Project | ProjectFromApi, form: NgForm): boolean {
    let isError: boolean = false;
    this._uploadService
      .makeFilesRequest(resp._id!, [], this.project.file!, 'file')
      .then(
        (result: Response) => {
          Swal.fire(
            'Exito',
            'El proyecto se ha guardado correctamente en la base de datos',
            'success'
          );
          form.reset();
          this.project.file = undefined;
          this.imageSource = null;
          this.inputFile.nativeElement.value = '';
          this.areThereLastProject = true;
          this.lastProject = resp;
          isError = false;
        },
        (error) => {
          Swal.fire(
            'Fallo',
            'La Imagen del proyecto no se guardo correctamente, pruebe cambiando el formato o con otra imagen',
            'error'
          );
          console.log(error);
          isError= true;
          // throw new Error();
        }
      );
      return isError;
  }
}
