// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module'), },
  { path: 'basics', loadChildren: () => import('./basics/basics.module'), },
  { path: 'reactive', loadChildren: ()=> import('./reactive/reactive.module'), },
  { path: 'selector', loadChildren: () => import('./selector/selector.module'), },
  { path: 'template', loadChildren: ()=> import('./template/template.module'), },
  { path: '**', redirectTo: 'template' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
