// Angular.
import { Component } from '@angular/core';



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

  templateMenu: MenuItem[] = [
    { name: 'Básicos', route: './template/basics' },
    { name: 'Dinámicos', route: './template/dynamics' },
    { name: 'Switches', route: './template/switches' }
  ];

  reactiveMenu: MenuItem[] = [
    { name: 'Básicos', route: './reactive/basics' },
    { name: 'Dinámicos', route: './reactive/dynamics' },
    { name: 'Switches', route: './reactive/switches' }
  ];

  authMenu: MenuItem[] = [
    { name: 'Registro de usuario', route: './auth/register' }
  ];

  selectorMenu: MenuItem[] = [
    { name: 'Ejemplo', route: './selector/selector' }
  ];
}
