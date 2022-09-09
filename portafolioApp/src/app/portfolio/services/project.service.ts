import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './../interfaces/proyects.interface';
import { environment } from 'src/environments/environment';

const getHeaders = (): HttpHeaders => {
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  });
  // headers.set('Content-Type', 'application/json');
  // headers.set('Access-Control-Allow-Origin', '*');
  // headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  return headers;
};

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private _urlApi = environment.apiUrl;
  constructor(private _http: HttpClient) {}

  testService() {
    return 'Probando el servicio de angular';
  }

  saveProject(project: Project): Observable<Project> {
    let params = JSON.stringify(project);

    // let params = project; <--- TAMBIEN FUNCIONA, PARA QUE RECONOZCA EL PARSEO NECESITA QUE EL HEADER ACEPTE (y comprobarlo) el application/json
    let headers: HttpHeaders = getHeaders();
    // console.log(headers);

    return this._http.post<Project>(
      this._urlApi + '/project/save_project',
      params,
      {
        headers,
      }
    );
  }
}
