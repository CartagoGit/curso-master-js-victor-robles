import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './../interfaces/proyects.interface';
import { environment } from 'src/environments/environment';

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
    // let params = JSON.stringify(project);
    let params = project;
    console.log(params);
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    // });
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');

    return this._http.post<Project>(this._urlApi + '/project/save_project', params, {
      headers,
    });
  }
}
