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

  saveData(): void {
    console.log('Posteo correcto');
    console.log(this.miFormulario.value);
    this.miFormulario.reset({ genero: '', notificaciones: false, terminos: false });
  }
}
