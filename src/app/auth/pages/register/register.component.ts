// Angular.
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// Servicios.
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';
import { EqualFiedlsService } from '../../../shared/validators/equal-fields-validator.service';



@Component({
  selector: 'app-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
})
export class RegisterComponent {

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

  miFormulario: UntypedFormGroup = this.formBuilder.group({
    nombre: ['',
      [
        Validators.required,
        Validators.pattern(this.equalFieldsService.namePattern)
      ]
    ],
    email: ['',
      [
        Validators.required,
        Validators.pattern(this.equalFieldsService.emailPattern)
      ],
      [ this.emailValidatorService ]
    ],
    username: ['', [ Validators.required, this.equalFieldsService.invalidUsername ] ],
    password: ['', [ Validators.required, Validators.minLength(6) ] ],
    confirm: ['', [ Validators.required ] ],
  }, {
    // Se agrega aquí por ser una validación grupal.
    validators: [ this.equalFieldsService.equalFields('password', 'confirm') ]
  });

  constructor(
    private formBuilder: UntypedFormBuilder,
    private emailValidatorService: EmailValidatorService,
    private equalFieldsService: EqualFiedlsService
  ) { }

  invalidField(field: string): boolean | undefined {
    return this.miFormulario.get(field)?.invalid && this.miFormulario.get(field)?.touched;
  };

  formSubmit(): void {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  };
}
