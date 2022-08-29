// Angular.
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';



@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [
      Validators.required,
      Validators.minLength(3)
    ]],
    favoritos: this.fb.array( [
      [ 'Doom' ],
      [ 'Outlast' ]
    ], Validators.required )
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder ) { }

  add() {
    if (this.miFormulario.invalid) {
      return;
    }

    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ));
    this.nuevoFavorito.reset();
  }

  delete(index: number) {
    this.favoritosArr.removeAt(index);
  }

  validarCampo( campo: string ) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  saveData() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    
    console.log(this.miFormulario);
  }
}
