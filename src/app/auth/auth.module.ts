// Angular.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes.
import { RegisterComponent } from './pages/register/register.component';

// Módulos.
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    AuthRoutingModule
  ]
})
export class AuthModule { }
