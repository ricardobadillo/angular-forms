// Angular.
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



interface Favorito {
  id: number;
  nombre: string;
}

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  nuevoFavorito: string = '';

  persona: Persona = {
    nombre: '',
    favoritos: [
      { id: 1, nombre: 'Doom' },
      { id: 2, nombre: 'Outlast' }
    ]
  }

  saveData() {
    console.log(this.persona);
  }

  add() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito
    }

    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoFavorito = '';
  }

  delete(index: number) {
    this.persona.favoritos.splice(index, 1);
  }
}
