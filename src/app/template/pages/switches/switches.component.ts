// Angular.
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent {

  persona = { genero: '', notificaciones: false, terminos: false };

  @ViewChild('miFormulario') miFormulario!: NgForm;


  constructor() { }

  saveData() {
    console.log('Posteo correcto');
    this.miFormulario.reset({ genero: '', notificaciones: false, terminos: false });
  }
}
