// Angular.
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  miFormulario: UntypedFormGroup = this.formBuilder.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    terminos: [ false, Validators.requiredTrue ]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  };

  constructor( private formBuilder: UntypedFormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      terminos: false
    });

    this.miFormulario.valueChanges.subscribe(form => {
      console.log(form);
      delete form.condiciones;
      this.persona = form; 
    })
  };

  saveData(): void {
    const formValue = {... this.miFormulario.value };
    delete formValue.terminos;

    this.persona = formValue;
  }
}
