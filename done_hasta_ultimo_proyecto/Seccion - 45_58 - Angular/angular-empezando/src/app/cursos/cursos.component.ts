import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  public nombre: string;
  public apellidos: string;
  public followers: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      console.log(params);
      this.nombre= params.nombre;
      this.apellidos = params.apellidos;
      // Al ponerle el "+" delante le obligamos a que sea de tipeof number
      this.followers = +params.followers;
      //Ambos valen
      // this.nombre = params['nombre'];
      console.log(this.nombre, this.apellidos, this.followers);
    });
  }

  redirigir(){
    this._router.navigate(['/zapatillas']);
  }

}
