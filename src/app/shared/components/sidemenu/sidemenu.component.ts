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

  public authMenu: Array<MenuItem> = [
    { name: 'Registro de usuario', route: './auth/register' },
  ];

  public basicsMenu: Array<MenuItem> = [
    { name: 'Form Control', route: './basics/form-control' },
    { name: 'Form Group', route: './basics/form-group' },
  ];

  public reactiveMenu: Array<MenuItem> = [
    { name: 'Básicos', route: './reactive/basics' },
    { name: 'Dinámicos', route: './reactive/dynamics' },
    { name: 'Switches', route: './reactive/switches' },
  ];

  public selectorMenu: Array<MenuItem> = [
    { name: 'Ejemplo', route: './selector/selector' },
  ];

  public templateMenu: Array<MenuItem> = [
    { name: 'Básicos', route: './template/basics' },
    { name: 'Dinámicos', route: './template/dynamics' },
    { name: 'Switches', route: './template/switches' },
  ];
}
