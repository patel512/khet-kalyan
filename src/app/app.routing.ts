import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [{
  path: 'login',
  children: [{
    path: '',
    loadChildren: './login/login.module#LoginModule'
  }]
},
{
  path: 'register',
  children: [{
    path: '',
    loadChildren: './register/register.module#RegisterModule'
  }]
}];
@NgModule({
  declarations: [ ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }
