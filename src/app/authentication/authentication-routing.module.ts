import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';  
import { SignupComponent } from './signup/signup.component';  
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from '../services/auth-guard.service';



const routes: Routes = [
  { path: '',  component: LoginComponent},
  { path: 'signup',  component: SignupComponent},
  { path: 'logout',  component: LogoutComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }