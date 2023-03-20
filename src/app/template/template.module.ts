// Angular.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Componentes.
import { BasicsComponent } from './pages/basics/basics.component';
import { DynamicsComponent } from './pages/dynamics/dynamics.component';
import { SwitchesComponent } from './pages/switches/switches.component';

// Directivas.
import { CustomMinDirective } from './directives/custom-min.directive';

// Módulos.
import { TemplateRoutingModule } from './template-routing.module';



@NgModule({
  declarations: [
    BasicsComponent,
    DynamicsComponent,
    SwitchesComponent,

    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    
    TemplateRoutingModule
  ]
})
export class TemplateModule { }