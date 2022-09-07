
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Project } from "../models/project.model";
import { Global } from "./global.service";

@Injectable()
export class ProjectService {
    public url: string;
    public type: string;
    private headers: HttpHeaders;
    constructor(
        private _http: HttpClient
    ) {
        this.headers= new HttpHeaders().set("Content-Type","application/json");
        this.url = Global.url;
        this.type="project";
    }

    testService(){
        return 'Probando el servicio project de Angular';
    }

    saveProject(project:Project): Observable<any>{
        let params = JSON.stringify(project);
        return this._http.post(this.url+this.type+"/save", params, {headers: this.headers});
    }

    getProjects(){
        return this._http.get(this.url+this.type+"s/get", {headers: this.headers});
    }
}