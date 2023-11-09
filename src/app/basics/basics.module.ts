// Angular.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes.
import { FormControlComponent } from './pages/form-control/form-control.component';
import { FormGroupComponent } from './pages/form-group/form-group.component';

// Módulos.
import { BasicsRoutingModule } from './basics-routing.module';



@NgModule({
  declarations: [
    FormControlComponent,
    FormGroupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    BasicsRoutingModule
  ]
})
export class BasicsModule { }