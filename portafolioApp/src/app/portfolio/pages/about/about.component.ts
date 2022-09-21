import { Component, OnInit } from '@angular/core';
import { InfoObject } from '../../interfaces/info-object.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public title: string = 'Mario Cabrero Volarich';
  public subtitle: string = 'Desarrollador front-end';
  public github: InfoObject = {
    url: 'https://github.com/CartagoGit',
    text: 'GitHub',
    icon: '<i class="fa-brands fa-github"></i>',
  };
  public email: InfoObject = {
    address: 'cv2mario@gmail.com',
    text: 'email',
    icon: '<i class="fa-regular fa-envelope"></i>',
  };
  public linkedin: InfoObject = {
    address: 'https://www.linkedin.com/in/mario-cabrero-volarich/',
    text: 'LinkedIn',
    icon: '<i class="fa-brands fa-linkedin"></i>',
  };
  constructor() {}

  ngOnInit(): void {}
}
