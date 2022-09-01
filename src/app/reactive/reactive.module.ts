// Angular.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes.
import { BasicsComponent } from './components/pages/basics/basics.component';
import { DynamicsComponent } from './components/pages/dynamics/dynamics.component';
import { SwitchesComponent } from './components/pages/switches/switches.component';

// Módulos.
import { ReactiveRoutingModule } from './reactive-routing.module';



@NgModule({
  declarations: [
    BasicsComponent,
    DynamicsComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
