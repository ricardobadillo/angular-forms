// Angular.
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  
  initialForm = { producto: '', precio: 0, existencia: 0 };
  
  constructor() { }

  invalidProductName(): boolean {
    return this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched;
  };

  invalidPrice(): boolean {
    return this.miFormulario?.controls.precio?.touched && this.miFormulario?.controls.precio.value < 0;
  };

  saveData(): void {
    console.log('Posteo correcto');
    this.miFormulario.resetForm({ precio: 0, existencia: 0 });
  };
}
