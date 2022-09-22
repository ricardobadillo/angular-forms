// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes.
import { SelectorComponent } from './pages/selector/selector.component';



const routes: Routes = [
  { path: 'selector', component: SelectorComponent },
  { path: '**', component: SelectorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectorRoutingModule { }
