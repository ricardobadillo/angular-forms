// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes.
import { RegisterComponent } from './pages/register/register.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '**', component: RegisterComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
})
export class AuthRoutingModule { }
