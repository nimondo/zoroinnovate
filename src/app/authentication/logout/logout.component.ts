import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: SnackbarService) {

    }

    ngOnInit() {
      this.authService.logout()
      this.snackBar.openSnackBar('Deconnexion reussie', 'ok');
      this.router.navigate(['/']);
    }
}
