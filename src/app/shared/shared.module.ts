// Angular.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Componentes.
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';



@NgModule({
  declarations: [ SidemenuComponent ],
  imports: [ CommonModule, RouterModule ],
  exports: [ SidemenuComponent ]
})
export class SharedModule { }
