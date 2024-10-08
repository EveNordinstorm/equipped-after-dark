import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.errorMessage = '';
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response.token) {
          this.authService.saveToken(response.token);
          this.authService.saveUserData(this.username);
          this.router.navigate(['/']);
        }
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  private handleError(error: any): void {
    if (error.status === 401) {
      this.errorMessage = 'Invalid username or password';
    } else {
      this.errorMessage = 'An unexpected error occurred. Please try again later.';
    }
  }
}

