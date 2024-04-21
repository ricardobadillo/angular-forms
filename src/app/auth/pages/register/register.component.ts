// Angular.
import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, UntypedFormBuilder, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';

// Servicios.
import { EmailValidator } from '../../../shared/validators/email-validator';
import { EqualFiedls } from '../../../shared/validators/equal-fields-validator';

// Validators.
import { cantBeMe, emailPattern, namePattern } from 'src/app/shared/validators/validators';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  miFormulario: FormGroup<{
    nombre: FormControl<string>;
    email: FormControl<string>;
    username: FormControl<string>;
    password: FormControl<string>;
    confirm: FormControl<string>;
  }>

  get emailMessageError(): string {

    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.required) {
      return 'El email es obligatorio';

    } else if (errors?.pattern) {
      return 'No tiene formato de email';

    } else if (errors?.emailExiste) {
      return 'El email ya existe';
    }

    return '';
  };

  constructor(
    private formBuilder: UntypedFormBuilder,
    private emailValidator: EmailValidator,
    private equalFields: EqualFiedls
  ) {
    this.miFormulario = this.formBuilder.group({
      nombre: new FormControl('', { nonNullable: true,
        validators: [ Validators.required, Validators.pattern(namePattern), cantBeMe ]
      }),
      email: new FormControl('', { nonNullable: true,
        validators: [ Validators.required, Validators.pattern(emailPattern) ],
        asyncValidators: [ this.emailValidator.validate ]
      }),
      username: new FormControl('', { nonNullable: true,
        validators: [ Validators.required ]
      }),
      password: new FormControl('', { nonNullable: true,
        validators: [ Validators.required, Validators.minLength(6) ]
      }),
      confirm: new FormControl('', { nonNullable: true,
        validators: [ Validators.required ],
      }),
    }, { validators: this.equalFields.equalFields('password', 'confirm') } as FormControlOptions);
  }

  invalidField(field: string): boolean | undefined {
    return this.miFormulario.get(field)?.invalid && this.miFormulario.get(field)?.touched;
  };

  formSubmit(): void {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  };
}
