// Angular.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes.
import { RegisterComponent } from './pages/register/register.component';

// Módulos.
import { AuthRoutingModule } from './auth-routing.module';
import { CustomLabelDirective } from './directives/custom-label.directive';



@NgModule({
  declarations: [ RegisterComponent, CustomLabelDirective ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    AuthRoutingModule
  ]
})
export default class AuthModule { }
