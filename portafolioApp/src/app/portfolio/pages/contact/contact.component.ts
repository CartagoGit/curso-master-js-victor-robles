import { Component, OnInit } from '@angular/core';
import { ImageSlider } from '../../interfaces/contact';
import { InfoObject } from '../../interfaces/info-object.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public imagesSlider: ImageSlider[] = [
    {
      src: '../../../../assets/img/images-slider/github.jpg',
      title: 'Github',
      description:
        'Mis repositorios con mis proyectos publicos, tests, pruebas, ejemplos, etc',
      link: 'https://github.com/CartagoGit',
    },
    {
      src: '../../../../assets/img/images-slider/linkedin.jpg',
      title: 'LinkedIn',
      description: 'Mi información laboral, cursos, experencia, etc',
      link: 'https://www.linkedin.com/in/mario-cabrero-volarich/',
    },
    {
      src: '../../../../assets/img/images-slider/email.jpg',
      title: 'Email',
      description: 'Contactame en mi email: cv2mario@gmail.com',
      link: 'cv2mario@gmail.com',
    },
  ];

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

  // HAREMOS UNA PRUEBA CON JQUERY EN ANGULAR EN ESTA SECCION
  constructor() {}

  ngOnInit(): void {
    // $('.logo').on('click', (e) => {
    //   e.preventDefault();
    //   console.log('sd');
    //   $('header').css('background', 'green').css('height', '50px');
    // });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    ($('.galeria') as any).bxSlider({
      mode: 'horizontal',
      captions: true,
      slideWidth: 600,
      slideHeight: 200,
      auto: true,
      autoHover: true,
      autoDirection: 'next',
      pager: true,
      pagerType: 'full',
      controls: true,
      infiniteLoop: true,
      randomStart: true,
      autoDelay: 5000,
      pause: 5000,
      speed: 500,
      touchEnabled: false,
    });
  }
}
