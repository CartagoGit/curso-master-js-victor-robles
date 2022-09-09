import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { Project } from "../../models/project.model"
import { ProjectService } from "../../services/project.service"
import { UploadService } from "../../services/uploadFile.service"
import { Global } from "../../services/global.service"

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['../../../assets/scss/components.scss'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public subtitle2: string;
  public project: Project;
  public filesToUpload: Array<File>;
  public file_name: string;
  public project_saved: string;
  public thereIsFile: boolean;
  public img_preview: string;
  public name_saved: string;


  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = "Crear Proyecto";
    this.subtitle = "Envía el diseño que deseas crear"
    this.subtitle2 = "sin compromiso"
    this.project = new Project();
    this.file_name = "Obligatorio - Ninguna imagen cargada";
    this.img_preview = "../../../assets/img/no_photo.png";
    this.thereIsFile = false;

  }

  ngOnInit(): void {
  }

  onSubmit(form) {

    // console.log(new Date());
    this.project.date = new Date();
    // this._projectService.getProjects().subscribe(
    //   response =>{
    //     console.log(response);
    //   },error=>{
    //     console.log("Ha habido un error al cargar los proyectos: ",error);
    //   }
    // );

    //Guardar los datos
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if (response.project) {
          console.log("ID: ", response.project._id);
          //Aqui es donde voy a subir la imagen
          this._uploadService.makeFileRequest(
            Global.url + "project/" + response.project._id + "/file/upload",
            [],
            this.filesToUpload,
            "file")
            .then((result: any) => {
              this.name_saved = this.project.name;
              form.reset();
              this.file_name = "Obligatorio - Ninguna imagen cargada";
              this.thereIsFile = false;
              this.project_saved = "success";
              this.img_preview = "../../../assets/img/no_photo.png";
            }
            );
        }
        else {
          this.project_saved = "failed";
        }
      },
      error => {
        this.project_saved = "failed";
        console.log("Ha habido un error al salvar el proyecto: ", error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;

    if (this.filesToUpload.length > 0) {
      if (this.filesToUpload[0].size > 2000000) {
        this.file_name = "Obligatorio - El peso de la imagen debe ser inferior a 2mb";
        this.thereIsFile = false;
        this.img_preview = "../../../assets/img/no_photo.png";
        return;
      }
      var reader = new FileReader();
      reader.onload = (event: any) => { this.img_preview = event.target.result; }
      reader.readAsDataURL(this.filesToUpload[0]);
      this.file_name = this.filesToUpload[0].name;
      this.thereIsFile = true;
    } else {
      this.file_name = "Obligatorio - Ninguna imagen cargada";
      this.thereIsFile = false;
      this.img_preview = "../../../assets/img/no_photo.png";
    }

  }

}
