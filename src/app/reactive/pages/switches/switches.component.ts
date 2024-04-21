// Angular.
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup<{
    genero: FormControl<string>;
    notificaciones: FormControl<boolean>;
    terminos: FormControl<boolean>;
  }>;

  persona = { genero: 'F', notificaciones: true };


  constructor(private formBuilder: FormBuilder) {
    this.miFormulario = this.formBuilder.group({
      genero: new FormControl('M', { nonNullable: true, validators: [ Validators.required ] }),
      notificaciones: new FormControl(true, { nonNullable: true, validators: [ Validators.required ] }),
      terminos: new FormControl(false, { nonNullable: true, validators: [ Validators.requiredTrue ] })
    });
  }

  ngOnInit(): void {
    this.miFormulario.reset({ ...this.persona, terminos: false });
  };

  saveData(): void {
    const formValue = {... this.miFormulario.value };
    delete formValue.terminos;

    this.persona = formValue as { genero: string, notificaciones: boolean };

    console.log(this.persona);
  }
}
