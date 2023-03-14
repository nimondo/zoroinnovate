import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component'; 
import { AddContactComponent } from './add-contact/add-contact.component';
import { AuthGuardService } from '../services/auth-guard.service';



const routes: Routes = [
  { path: '', canActivate: [AuthGuardService],   component: ContactComponent, children: [
    // { path: '', component: PageComponent},
   
      ]},
  { path: 'add/:id', canActivate: [AuthGuardService],   component: AddContactComponent},
  { path: 'add', canActivate: [AuthGuardService],   component: AddContactComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }