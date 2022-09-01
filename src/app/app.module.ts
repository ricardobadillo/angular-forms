// Angular.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Componentes.
import { AppComponent } from './app.component';

// Módulos.
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }