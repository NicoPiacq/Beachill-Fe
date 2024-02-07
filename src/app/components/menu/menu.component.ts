import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from '../../../model/dtos/login';
import { AuthService } from '../../../services/auth.service';
import { map, take } from 'rxjs';
import { bootstrapApplication } from '@angular/platform-browser';
import { RegistrationDto } from '../../../model/dtos/registration';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  
  loginForm!: FormGroup;
  loginData: LoginDto = {
    email: '',
    password: ''
  }
  hasLoggedIn: boolean = false;
  isAdmin: boolean = false;

  registrationForm!: FormGroup;
  registrationData: RegistrationDto = {
    name: '',
    surname: '',
    email: '',
    password: '',
    role: 'USER'
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
      this.registrationForm = this.formBuilder.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        repeatPassword: ['', Validators.required]
      }
    );
      this.checkUser();
  }

  login() {
    if(this.loginForm.valid) {
      this.loginData = {...this.loginForm.value};
      this.authService.login(this.loginData).subscribe({
        next: _ => this.checkUser()
      });
    }
  }

  logout() {
    this.checkUser();
    this.router.navigate(['/']);
  }

  checkUser() {
    if(this.authService.authenticatedUser.value) {
      this.hasLoggedIn = true;
      return;
    }
    this.hasLoggedIn = false;
  }

  checkRoleAdmin() {
    const role = this.authService.authenticatedUser.value?.user.role;
    if(role === 'ADMIN' || role === 'SUPERADMIN') {
      return true;
    }
    return false;
  }

  getUserData() {
    return this.authService.authenticatedUser.value;
  }

  register() {
    if(this.registrationForm.valid) {
      this.registrationData = {...this.registrationForm.value};
      this.registrationData.role = 'USER';
      this.authService.register(this.registrationData).subscribe();
    }
  }
}
