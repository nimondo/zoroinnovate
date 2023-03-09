import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path:       '',
    component:  AppComponent,
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module')
      .then(mod => mod.AuthenticationModule)
  },
  { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
