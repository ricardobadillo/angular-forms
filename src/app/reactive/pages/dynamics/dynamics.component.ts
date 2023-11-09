// Angular.
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent {

  nuevoFavorito: FormControl<string> = this.formBuilder.control('', { nonNullable: true, validators: [ Validators.required ] });

  miFormulario: FormGroup<{
    nombre: FormControl<string>;
    favoritos: FormArray<FormControl<string>>;
  }>;

  get favoritosArray(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }


  constructor(private formBuilder: FormBuilder) {
    this.miFormulario = this.formBuilder.group({
      nombre: new FormControl('', { nonNullable: true, validators: [ Validators.required, Validators.minLength(3) ] }),
      favoritos: new FormArray([
        new FormControl('Metal Gear', { nonNullable: true, validators: [ Validators.required ] }),
        new FormControl('Death Stranding', { nonNullable: true, validators: [ Validators.required ] })
      ], Validators.required)
    });
  }

  addFormControl(): void {
    if (this.miFormulario.invalid) {
      return;
    }

    this.favoritosArray.push(this.formBuilder.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  };

  getFormControl(index: number): FormControl {
    return this.favoritosArray.at(index) as FormControl;
  }

  deleteFormControl(index: number): void {
    this.favoritosArray.removeAt(index);
  };

  invalidField(): boolean | null {

    return this.miFormulario?.controls.nombre.invalid
      && this.miFormulario?.controls.nombre.touched;
  };

  saveData(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario);
  };
}
