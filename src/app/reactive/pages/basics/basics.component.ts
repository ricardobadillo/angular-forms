// Angular.
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent {

  miFormulario: FormGroup<{
    producto: FormControl<string | null>,
    precio: FormControl<number | null>,
    existencia: FormControl<number | null>
  }>;


  constructor(private formBuilder: FormBuilder) {
    this.miFormulario = this.formBuilder.group({
      producto: new FormControl('', { validators: [ Validators.minLength(3), Validators.required ] }),
      precio: new FormControl(0, { validators: [ Validators.min(0), Validators.required ] }),
      existencia: new FormControl(0, { validators: [ Validators.min(0), Validators.required ] })
    });
  }

  validateField(field: string): boolean | null {
    const values = this.miFormulario.getRawValue();

    return null;
    // return this.miFormulario.getRawValue().[campo].errors && this.miFormulario.getRawValue().[campo].touched;
  }

  saveData(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    const values = this.miFormulario.getRawValue();

    this.miFormulario.reset();
  }
}
