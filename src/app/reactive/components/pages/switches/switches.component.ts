import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    terminos: [ false, Validators.requiredTrue ]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      terminos: false
    });

    // this.miFormulario.get('terminos')?.valueChanges.subscribe( newValue => {
    //   console.log(newValue);
    // });

    this.miFormulario.valueChanges.subscribe( form => {
      // console.log(form);
      delete form.condiciones;
      this.persona = form; 
    })
  }

  saveData() {

    const formValue = {... this.miFormulario.value };
    delete formValue.terminos;

    this.persona = formValue;
  }

}
