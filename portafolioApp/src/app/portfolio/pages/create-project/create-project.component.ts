import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Project } from '../../interfaces/proyects.interface';
import { ProjectService } from '../../services/project.service';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  @ViewChild('langControl') inputLangControl!: ElementRef<HTMLInputElement>;
  public title: string = 'Crear Proyecto';
  public inputLang: string = '1';
  public project!: Project;
  constructor(private _projectService: ProjectService) {
    this.project = {
      name: '1',
      description: '1',
      category: '1',
      year: new Date().getFullYear(),
      langs: [],
    };
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    this._projectService.saveProject(this.project).subscribe({
      next: (resp: Project) => {
        if (resp._id) {
          Swal.fire(
            'Exito',
            'El proyecto se ha guardado correctamente en la base de datos',
            'success'
          );

          form.reset();
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
}
