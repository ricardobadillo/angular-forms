// Angular.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Componentes.
import { NestedSelectorComponent } from './components/nested-selector/nested-selector.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';



@NgModule({
  declarations: [
    NestedSelectorComponent,
    SidemenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidemenuComponent
  ]
})
export class SharedModule { }
