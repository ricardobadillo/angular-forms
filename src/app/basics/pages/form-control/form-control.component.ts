// Angular.
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
})
export class FormControlComponent {

  // El nombre del error es el nombre del validador.
  public ageField = new FormControl(0, { validators: [ Validators.min(0) ] });
  public agreeField = new FormControl('De acuerdo');
  public categoryField = new FormControl('categoria-3');
  public genderField = new FormControl('M');
  public nameField = new FormControl('Ricardo');

  public categorias = [
    { id: 'categoria-1', name: 'Categoría 1' },
    { id: 'categoria-2', name: 'Categoría 2' },
    { id: 'categoria-3', name: 'Categoría 3' },
    { id: 'categoria-4', name: 'Categoría 4' },
    { id: 'categoria-5', name: 'Categoría 5' },
  ];
}
