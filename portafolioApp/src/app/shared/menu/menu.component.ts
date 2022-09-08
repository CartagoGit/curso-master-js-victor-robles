import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/MenuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      text: 'Sobre mí',
      route: '/',
    },
    {
      text: 'Proyectos',
      route: '/proyectos',
    },
    {
      text: 'Crear Proyecto',
      route: '/crear-proyecto',
    },
    {
      text: 'Contacto',
      route: '/contacto',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  isMidMenu(index: number): boolean {
    const middle = Math.floor(this.menuItems.length / 2);

    return middle === index;
  }
}
