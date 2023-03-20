// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes.
import { FormControlComponent } from './pages/form-control/form-control.component';
import { FormGroupComponent } from './pages/form-group/form-group.component';



const routes: Routes = [
  { path: 'form-control', component: FormControlComponent },
  { path: 'form-group', component: FormGroupComponent },
  { path: '**', component: FormControlComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BasicsRoutingModule { }
