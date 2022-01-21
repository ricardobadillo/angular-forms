import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [
    {
      name: 'Básicos',
      route: './template/basics'
    },
    {
      name: 'Dinámicos',
      route: './template/dynamics'
    },
    {
      name: 'Switches',
      route: './template/switches'
    },
  ]

  reactiveMenu: MenuItem[] = [
    {
      name: 'Básicos',
      route: './reactive/basics'
    },
    {
      name: 'Dinámicos',
      route: './reactive/dynamics'
    },
    {
      name: 'Switches',
      route: './reactive/switches'
    },
  ]
}
