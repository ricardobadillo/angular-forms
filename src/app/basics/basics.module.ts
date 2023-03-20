// Angular.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes.
import { FormControlComponent } from './pages/form-control/form-control.component';

// Módulos.
import { BasicsRoutingModule } from './basics-routing.module';
import { FormGroupComponent } from './pages/form-group/form-group.component';



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
