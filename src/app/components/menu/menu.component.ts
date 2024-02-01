import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from '../../../model/dtos/login';
import { AuthService } from '../../../services/auth.service';
import { map, take } from 'rxjs';
import { bootstrapApplication } from '@angular/platform-browser';

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
  loginModal: any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
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
    this.authService.logout();
    this.checkUser();
  }

  checkUser() {
    if(this.authService.authenticatedUser.value) {
      this.hasLoggedIn = true;
      return;
    }
    this.hasLoggedIn = false;
  }
}
