// Angular.
import { Component } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent {

  miFormulario: UntypedFormGroup = this.formBuilder.group({
    nombre: [ , [
      Validators.required,
      Validators.minLength(3)
    ] ],
    favoritos: this.formBuilder.array( [
      [ 'Doom' ],
      [ 'Outlast' ]
    ], Validators.required )
  });

  nuevoFavorito: UntypedFormControl = this.formBuilder.control('', Validators.required);

  get favoritosArr(): UntypedFormArray {
    return this.miFormulario.get('favoritos') as UntypedFormArray;
  };

  constructor( private formBuilder: UntypedFormBuilder ) { }

  add(): void {
    if (this.miFormulario.invalid) {
      return;
    }

    this.favoritosArr.push( this.formBuilder.control( this.nuevoFavorito.value, Validators.required ));
    this.nuevoFavorito.reset();
  };

  delete(index: number): void {
    this.favoritosArr.removeAt(index);
  };

  validarCampo( campo: string ): boolean | null {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  };

  saveData(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario);
  };
}
