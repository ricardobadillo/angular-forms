// Angular.
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
})
export class FormGroupComponent {

  public miFormulario: FormGroup<{
    age: FormControl<number>;
    fullName: FormGroup<{ name: FormControl<string>; lastName: FormControl<string>; }>;
  }>;


  constructor(private formBuilder: FormBuilder) {
    this.miFormulario = this.formBuilder.group({
      age: new FormControl(0, { nonNullable: true,
        validators: [ Validators.min(0), Validators.required ]
      }),
      fullName: new FormGroup({
        name: new FormControl('', { nonNullable: true,
          validators: [ Validators.minLength(3), Validators.required ]
        }),
        lastName: new FormControl('', { nonNullable: true,
          validators: [ Validators.minLength(3), Validators.required ]
        }),
      })
    });
  }

  get invalidAge(): boolean {
    return this.miFormulario.controls.age.invalid
        && this.miFormulario.controls.age.touched;
  }

  get invalidName(): boolean | undefined {
    return this.miFormulario.get('fullName')?.get('name')?.invalid
        && this.miFormulario.get('fullName')?.get('name')?.touched;
  }

  get invalidLastName(): boolean | undefined {
    return this.miFormulario.get('fullName')?.get('lastName')?.invalid
        && this.miFormulario.get('fullName')?.get('lastName')?.touched;
  }

  public saveData(): void {
    const name = this.miFormulario.get('fullName')?.get('name')?.value;
    const lastName = this.miFormulario.get('fullName.lastName')?.value;

    console.log(`El nombre posteado es: ${name} ${lastName}`);

    this.miFormulario.reset();
  }
}
