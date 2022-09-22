// Angular.
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Servicios.
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';
import { ValidatorService } from '../../../shared/validators/validator.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
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

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [ Validators.required, Validators.pattern(this.validatorService.namePattern) ] ],
    email: ['', [ Validators.required, Validators.pattern(this.validatorService.emailPattern)], [ this.emailValidatorService ] ],
    username: ['', [ Validators.required, this.validatorService.invalidUsername ] ],
    password: ['', [ Validators.required, Validators.minLength(6) ] ],
    confirm: ['', [ Validators.required ] ],
  }, {
    validators: [ this.validatorService.equalFields('password', 'confirm') ]
  });

  constructor( 
    private formBuilder: FormBuilder,
    private emailValidatorService: EmailValidatorService,
    private validatorService: ValidatorService 
  ) { }

  invalidField(field: string): boolean | undefined {
    return this.miFormulario.get(field)?.invalid && this.miFormulario.get(field)?.touched;
  };

  formSubmit(): void {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  };
}