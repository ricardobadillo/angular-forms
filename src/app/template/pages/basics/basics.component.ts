// Angular.
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements AfterViewInit {

  initialForm = { producto: '', precio: 0, existencia: 0 };

  @ViewChild('miFormulario') miFormulario!: NgForm;

  get invalidProductName(): boolean {
    return this.miFormulario?.controls.producto?.invalid
        && this.miFormulario?.controls.producto?.touched;
  }

  get invalidPrice(): boolean {
    return this.miFormulario?.controls.precio?.invalid
        && this.miFormulario?.controls.precio?.dirty;
  }

  get invalidExistence(): boolean {
    return this.miFormulario?.controls.existencia?.invalid
        && this.miFormulario?.controls.existencia?.dirty;
  }


  constructor() { }

  ngAfterViewInit(): void {
    /*
      ❗ Ver los valores del formulario de manera reactiva.
      this.miFormulario.valueChanges?.subscribe(console.log);
    */

    /*
      ❗ Ver el status del formulario de manera reactiva.
      this.miFormulario.statusChanges?.subscribe(console.log);
    */
  }

  saveData(): void {
    console.log('Posteo correcto');
    this.miFormulario.resetForm({ producto: '', precio: 0, existencia: 0 });
  }
}