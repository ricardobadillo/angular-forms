// Angular.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes.
import { SelectorComponent } from './pages/selector/selector.component';

// Módulos.
import { SelectorRoutingModule } from './selector-routing.module';



@NgModule({
  declarations: [ SelectorComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    SelectorRoutingModule
  ]
})
export class SelectorModule { }
