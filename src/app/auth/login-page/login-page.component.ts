import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LOCAL_STORAGE } from 'src/app/enums/local-storage.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  constructor(private router: Router, private authService: AuthService) {}

  onLoginClick(): void {
    const { email, password } = this.form.value;
    this.authService.login(email, password).subscribe(user => {
      if (user && user.length) {
        localStorage.setItem(
          LOCAL_STORAGE.AUTH_TOKEN,
          btoa(JSON.stringify(user))
        );
        this.router.navigateByUrl('');
      } else {
        alert('Invalid credentials, please try again.');
      }
    });
  }
}
