// Angular.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Componentes.
import { BasicsComponent } from './components/pages/basics/basics.component';
import { DynamicsComponent } from './components/pages/dynamics/dynamics.component';
import { SwitchesComponent } from './components/pages/switches/switches.component';

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
