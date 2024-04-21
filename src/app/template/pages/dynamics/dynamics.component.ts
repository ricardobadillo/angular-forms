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
})
export class DynamicsComponent {

  public enableForm = false;
  public nuevoFavorito = '';

  public persona: Persona = {
    nombre: '',
    favoritos: [
      { id: 1, nombre: 'Doom' },
      { id: 2, nombre: 'Outlast' }
    ]
  };

  @ViewChild('inputValue') public inputValue!: ElementRef;
  @ViewChild('miFormulario') public miFormulario!: NgForm;

  get invalidName(): boolean | null {
    return this.miFormulario?.controls.nombre?.errors
        && this.miFormulario?.controls.nombre?.touched;
  }

  public addFavorite(): void {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito
    };

    this.persona.favoritos.push({ ...nuevoFavorito });
    this.inputValue.nativeElement.value = '';
    this.enableForm = false;
  }

  public deleteFavorite(index: number): void {
    this.persona.favoritos.splice(index, 1);
  }

  public onKey(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.nuevoFavorito = inputElement.value;

    this.nuevoFavorito.length > 0 ? this.enableForm = true : this.enableForm = false;
  }

  public saveData(): void {
    console.log(this.persona);
  }
}
