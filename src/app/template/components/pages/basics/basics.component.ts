import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  
  initialForm = {
    producto: '',
    precio: 0,
    existencia: 0
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  nombreProductoValido(): boolean {
    return this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched;
  }

  precioInvalido(): boolean {
    return this.miFormulario?.controls.precio?.touched && this.miFormulario?.controls.precio.value < 0;
  }

  saveData() {
    console.log('Posteo correcto');
    this.miFormulario.resetForm({
      precio: 0,
      existencia: 0
    });
  }

}
