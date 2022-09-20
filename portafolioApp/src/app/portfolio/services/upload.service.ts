import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../interfaces/proyects.interface';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  private _urlApi: string = environment.apiUrl;

  constructor() {}

  makeFilesRequest(
    id: string,
    params: string[],
    files: Project['file'],
    name: string
  ) {
    const url = this._urlApi + '/project/' + id + '/file/upload';
    return new Promise<Response>((resolve, reject) => {
      let formData: FormData = new FormData();
      let xhr = new XMLHttpRequest();
      if (files) {
        for (let i = 0; i < files.length; i++) {
          formData.append(name, files[i], files[i].name);
        }
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }
}
