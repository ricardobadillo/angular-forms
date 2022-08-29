// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes.
import { BasicsComponent } from './components/pages/basics/basics.component';
import { DynamicsComponent } from './components/pages/dynamics/dynamics.component';
import { SwitchesComponent } from './components/pages/switches/switches.component';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basics', component: BasicsComponent },
      { path: 'dynamics', component: DynamicsComponent },
      { path: 'switches', component: SwitchesComponent },
      { path: '**', component: BasicsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TemplateRoutingModule { }
