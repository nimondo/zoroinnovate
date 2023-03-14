import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) {

    }

    ngOnInit() {
      this.authService.logout()
      this.openSnackBar('Deconnexion reussie', 'ok');
      this.router.navigate(['/']);
    }
    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 3000,
      });
    }
}
