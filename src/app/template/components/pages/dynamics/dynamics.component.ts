import { Component } from '@angular/core';


interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css']
})
export class DynamicsComponent {

  nuevoFavorito: string = '';

  persona: Persona = {
    nombre: 'Ricardo',
    favoritos: [
      { id: 1, nombre: 'Doom' },
      { id: 2, nombre: 'Outlast' }
    ]
  }

  saveData() {
    console.log('');
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
