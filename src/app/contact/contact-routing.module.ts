import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { ContactComponent } from './contact/contact.component'; 



const routes: Routes = [
  { path: '',  component: ContactComponent, children: [
    // { path: '', component: PageComponent},
   
      ]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }