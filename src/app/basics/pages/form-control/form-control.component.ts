// Angular.
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent {

  // El nombre del error es del nombre del validador.
  ageField = new FormControl(0, [ Validators.min(0) ]);

  nameField = new FormControl('Ricardo');
  categoryField = new FormControl('categoria-3');

  categorias = [
    { id: 'categoria-1', name: 'Categoría 1' },
    { id: 'categoria-2', name: 'Categoría 2' },
    { id: 'categoria-3', name: 'Categoría 3' },
    { id: 'categoria-4', name: 'Categoría 4' },
    { id: 'categoria-5', name: 'Categoría 5' },
  ];

  agreeField = new FormControl('De acuerdo');
  genderField = new FormControl('M');

  /*
    Orden de las validaciones en un form control.

    otherField = new FormControl(null, sync, async);
  */

  constructor() { }
}
