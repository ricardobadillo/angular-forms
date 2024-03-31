// Angular.
import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

// RXJS.
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements AfterViewInit, OnDestroy {

  statusChangesSubscription?: Subscription;
  valuesChangesSubscription?: Subscription;

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
    //❗ Ver el status del formulario de manera reactiva.
    this.statusChangesSubscription = this.miFormulario.statusChanges?.subscribe(console.log);

    // ❗ Ver los valores del formulario de manera reactiva.
    this.valuesChangesSubscription = this.miFormulario.valueChanges?.subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.statusChangesSubscription?.unsubscribe();
    this.valuesChangesSubscription?.unsubscribe();
  }

  saveData(): void {
    console.log('Posteo correcto');
    console.log(this.miFormulario.value);
    this.miFormulario.resetForm({ producto: '', precio: 0, existencia: 0 });
  }
}
