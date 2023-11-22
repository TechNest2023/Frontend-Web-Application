import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, NgStyle} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Router, RouterLink} from "@angular/router";
import {LoginService} from "../../services/auth/login.service";
import { FormBuilder } from '@angular/forms';
import {LoginRequest} from "../../services/auth/loginRequest";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDividerModule,
    NgIf,
    NgStyle,
    RouterLink,
  ],
})

export class LoginComponent {
  constructor(private formBuilder: FormBuilder , private router: Router, private loginService: LoginService) {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  logInForm = this.formBuilder.group({
    emailLogin: this.email,
    passwordLogin: this.password,
  })


  getErrorMessage() {

    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  hide = true;

  //userLoginOn: boolean = false;

  authenticatedUser(){
    const email = this.logInForm.get('emailLogin')?.value;
    const password = this.logInForm.get('passwordLogin')?.value;

    if (email && password) {
      const loginRequest: LoginRequest = {
        email,
        password
      };

      this.loginService.logIn(loginRequest).subscribe(
        (response) => {
          this.router.navigateByUrl('/home');
        },
        (error) => {
          alert("Invalid email or password");
        }
      );

      this.logInForm.reset();
    } else {
      alert("Invalid email or password");
    }
  }
}
