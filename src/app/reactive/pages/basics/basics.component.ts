// Angular.
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

type FieldName = 'existencia' | 'precio' | 'producto';



@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
})
export class BasicsComponent {

  miFormulario: FormGroup<{
    producto: FormControl<string>;
    precio: FormControl<number>;
    existencia: FormControl<number>;
  }>;

  invalidField(field: FieldName): boolean | null {
    return this.miFormulario?.controls[field].invalid
        && this.miFormulario?.controls[field].touched;
  }


  constructor(private formBuilder: FormBuilder) {
    this.miFormulario = this.formBuilder.group({
      producto: new FormControl('', { nonNullable: true,
        validators: [ Validators.minLength(3), Validators.required ]
      }),
      precio: new FormControl(0, { nonNullable: true,
        validators: [ Validators.min(0), Validators.required ]
      }),
      existencia: new FormControl(0, { nonNullable: true,
        validators: [ Validators.min(0), Validators.required ]
      })
    });
  }

  saveData(): void {
    console.log(this.miFormulario.value);

    this.miFormulario.reset();
  }
}
