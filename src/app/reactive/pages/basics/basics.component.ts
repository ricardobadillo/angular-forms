// Angular.
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

type FormField = 'existencia' | 'precio' | 'producto';



@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
})
export class BasicsComponent {

  miFormulario: FormGroup<{
    producto: FormControl<string>,
    precio: FormControl<number>,
    existencia: FormControl<number>
  }>;

  get invalidProductName(): boolean {
    return this.miFormulario.controls.producto.invalid
        && this.miFormulario.controls.producto.touched;
  }

  get invalidPrice(): boolean {
    return this.miFormulario.controls.precio.invalid
        && this.miFormulario.controls.precio.touched;
  }

  get invalidExistence(): boolean {
    return this.miFormulario.controls.existencia.invalid
        && this.miFormulario.controls.existencia.touched;
  }

  invalidField(field: FormField): boolean | null {
    return this.miFormulario?.controls[field].invalid
        && this.miFormulario?.controls[field].touched;
  }


  constructor(private formBuilder: FormBuilder) {
    this.miFormulario = this.formBuilder.group({
      producto: new FormControl('', { nonNullable: true, validators: [ Validators.minLength(3), Validators.required ] }),
      precio: new FormControl(0, { nonNullable: true, validators: [ Validators.min(0), Validators.required ] }),
      existencia: new FormControl(0, { nonNullable: true, validators: [ Validators.min(0), Validators.required ] })
    });
  }

  saveData(): void {
    console.log('Posteo correcto');
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
