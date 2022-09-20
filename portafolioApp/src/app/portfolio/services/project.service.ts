import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project, ProjectFromApi } from './../interfaces/proyects.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private _urlApi: string = environment.apiUrl;
  constructor(private _http: HttpClient) {}

  testService() {
    return 'Probando el servicio de angular';
  }

  private _getHeaders = (): HttpHeaders => {
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    });
    // headers.set('Content-Type', 'application/json');
    // headers.set('Access-Control-Allow-Origin', '*');
    // headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    return headers;
  };

  saveProject(project: Project): Observable<Project> {
    const params: string = JSON.stringify(project);

    // let params = project; <--- TAMBIEN FUNCIONA, PARA QUE RECONOZCA EL PARSEO NECESITA QUE EL HEADER ACEPTE (y comprobarlo) el application/json
    const headers: HttpHeaders = this._getHeaders();
     return this._http.post<Project>(
      this._urlApi + '/project/save_project',
      params,
      {
        headers,
      }
    );
  }

  getProjects(): Observable<ProjectFromApi[]> {
    const headers: HttpHeaders = this._getHeaders();
    return this._http.get<ProjectFromApi[]>(this._urlApi + '/projects/get', {
      headers,
    });
  }

  getProject(id: string): Observable<ProjectFromApi> {
    const headers: HttpHeaders = this._getHeaders();
    return this._http.get<ProjectFromApi>(this._urlApi + '/project/get/' + id, {
      headers,
    });
  }

  
}
