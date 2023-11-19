// Angular.
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Favorito {
  id: number;
  nombre: string;
};

interface Persona {
  favoritos: Favorito[];
  nombre: string;
};



@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent {

  enableForm = false;
  nuevoFavorito = '';

  persona: Persona = {
    nombre: '',
    favoritos: [
      { id: 1, nombre: 'Doom' },
      { id: 2, nombre: 'Outlast' }
    ]
  };

  get invalidName(): boolean | null {
    return this.miFormulario?.controls.nombre?.errors
        && this.miFormulario?.controls.nombre?.touched;
  }

  @ViewChild('inputValue') inputValue!: ElementRef;
  @ViewChild('miFormulario') miFormulario!: NgForm;


  constructor() { }

  onKey(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.nuevoFavorito = inputElement.value;

    this.nuevoFavorito.length > 0 ? this.enableForm = true : this.enableForm = false;
  }

  addFavorite(): void {

    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito
    };

    this.persona.favoritos.push({ ...nuevoFavorito });
    this.inputValue.nativeElement.value = '';
    this.enableForm = false;
  }

  deleteFavorite(index: number): void {
    this.persona.favoritos.splice(index, 1);
  }

  saveData(): void {
    console.log('Posteo correcto');
    console.log(this.miFormulario);
  }
}
