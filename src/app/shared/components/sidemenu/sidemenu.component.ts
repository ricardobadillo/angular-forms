// Angular.
import { Component } from '@angular/core';

// Modelos.
interface MenuItem {
  name: string;
  route: string;
}



@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {

  authMenu: MenuItem[] = [
    { name: 'Registro de usuario', route: './auth/register' }
  ];

  basicsMenu: MenuItem[] = [
    { name: 'Form Control', route: './basics/form-control' },
    { name: 'Form Group', route: './basics/form-group' },
  ];

  reactiveMenu: MenuItem[] = [
    { name: 'Básicos', route: './reactive/basics' },
    { name: 'Dinámicos', route: './reactive/dynamics' },
    { name: 'Switches', route: './reactive/switches' }
  ];

  selectorMenu: MenuItem[] = [
    { name: 'Ejemplo', route: './selector/selector' }
  ];

  templateMenu: MenuItem[] = [
    { name: 'Básicos', route: './template/basics' },
    { name: 'Dinámicos', route: './template/dynamics' },
    { name: 'Switches', route: './template/switches' }
  ];
}