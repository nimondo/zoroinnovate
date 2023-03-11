import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute, RoutesRecognized, NavigationEnd } from '@angular/router';
import { pairwise, filter} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  signinForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) {

    }

    ngOnInit() {
      this.initForm();
     
    }
    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 3000,
      });
    }
  
    initForm() {
      this.signinForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{3,}/)]]
      });
    }
  
    onSubmit() {
      const email = this.signinForm.get('email')?.value;
      const password = this.signinForm.get('password')?.value;
      console.log(this.authService.signInUser(email, password))
    }
   

}
