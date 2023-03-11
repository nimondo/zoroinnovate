import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component'; 
import { AuthGuardService } from '../services/auth-guard.service';



const routes: Routes = [
  { path: '', canActivate: [AuthGuardService],   component: ContactComponent, children: [
    // { path: '', component: PageComponent},
   
      ]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }