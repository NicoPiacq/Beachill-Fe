import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from '../../../model/dtos/login';
import { AuthService } from '../../../services/auth.service';
import { map, take } from 'rxjs';

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

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  login() {
    if(this.loginForm.valid) {
      this.loginData = {...this.loginForm.value};
      this.authService.login(this.loginData).subscribe();
    }
  }

  logout() {
    this.authService.logout();
  }

  pippo() {
    console.log("CAZZO CHE PROBLEMA SE ESCO PIU' DI UNA VOLTA!");
  }

  checkUser() {
    return this.authService.authenticatedUser.pipe(
      take(1),
      map(user => {
        const hasLoggedIn = !!user;
        if(hasLoggedIn) {
          console.log("true");
          return true;
        }
        console.log("false");
        return false;
      })
    )
  }
}
