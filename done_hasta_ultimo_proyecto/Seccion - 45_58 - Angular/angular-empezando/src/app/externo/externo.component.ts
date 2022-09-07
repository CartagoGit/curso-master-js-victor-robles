import { Component, OnInit } from '@angular/core';
import { PeticionesService } from "../services/peticiones.service";

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.scss'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public userId: number;
  public user: any;
  public users: any;
  public fecha: any;
  public usuario_guardado: any;

  public new_user: any;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    // this.user = "";
    this.new_user ={
      "name":"",
      "job":""
    }
  }

  ngOnInit(): void {
    this.fecha = new Date();
    this.cargarUsuarios();
    
  }
  onSubmit(form:any){
    this._peticionesService.addUser(this.new_user).subscribe(
      response =>{
        console.log(response);
        this.usuario_guardado=response;
        form.reset();
      }, 
      error=>{console.log(error);}

    );
  }

  cargarUsuario() {
    // let div_usuario = document.getElementById("#div-user");
    // let div_aux = div_usuario;
    // div_usuario.innerHTML = "Cargando usuario...";
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
        // div_usuario = div_aux;

        // console.log(this.user);
      },
      error => {

        console.log(<any>error);
      }
    );
  }
  cargarUsuarios() {
    this._peticionesService.getUsers().subscribe(
      result => {
        this.users = result.data;
        // console.log(this.users);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
