// Angular.
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
})
export class DynamicsComponent {

  public nuevoFavorito: FormControl<string> = this.formBuilder.control('',
    { nonNullable: true, validators: [ Validators.required ] }
  );

  public miFormulario: FormGroup<{
    nombre: FormControl<string>;
    favoritos: FormArray<FormControl<string>>;
  }>;

  constructor(private formBuilder: FormBuilder) {
    this.miFormulario = this.formBuilder.group({
      nombre: new FormControl('', { nonNullable: true,
        validators: [ Validators.required, Validators.minLength(3) ]
      }),
      favoritos: new FormArray([
        new FormControl('Sonic', { nonNullable: true, validators: [ Validators.required ] }),
        new FormControl('Kirby', { nonNullable: true, validators: [ Validators.required ] })
      ], { validators: [ Validators.required ] })
    });
  }

  get favoritosArray(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  public addFormControl(): void {
    this.favoritosArray.push(this.formBuilder.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  };

  public deleteFormControl(index: number): void {
    this.favoritosArray.removeAt(index);
  };

  public getFormControl(index: number): FormControl {
    return this.favoritosArray.at(index) as FormControl;
  }

  public invalidField(): boolean | null {
    return this.miFormulario?.controls.nombre.invalid
        && this.miFormulario?.controls.nombre.touched;
  };

  public saveData(): void {
    console.log(this.miFormulario.value);

    this.miFormulario.reset();
  };
}
