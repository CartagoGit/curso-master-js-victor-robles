import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  // HAREMOS UNA PRUEBA CON JQUERY EN ANGULAR EN ESTA SECCION
  constructor() {}

  ngOnInit(): void {
    $('.logo').on('click', (e) => {
      e.preventDefault();
      console.log("sd");
      $('header').css('background', 'green').css('height', '50px');
    });
  }
}
