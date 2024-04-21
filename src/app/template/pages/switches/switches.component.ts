// Angular.
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
})
export class SwitchesComponent {

  public persona = { genero: '', notificaciones: false, terminos: false };

  @ViewChild('miFormulario') public miFormulario!: NgForm;


  public saveData(): void {
    console.log(this.miFormulario.value);

    this.miFormulario.reset({ genero: '', notificaciones: false, terminos: false });
  }
}
