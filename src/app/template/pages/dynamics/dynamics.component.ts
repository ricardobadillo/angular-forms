// Angular.
import { Component, ViewChild } from '@angular/core';
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

  nuevoFavorito!: string;

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

  @ViewChild('miFormulario') miFormulario!: NgForm;


  constructor() { }

  addFavorite(): void {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito
    };

    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoFavorito = '';
  }

  deleteFavorite(index: number): void {
    this.persona.favoritos.splice(index, 1);
  }

  saveData(): void {
    console.log('Posteo correcto');
  }
}