import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from '../../../model/dtos/login';
import { AuthService } from '../../../services/auth.service';
import { RegistrationDto } from '../../../model/dtos/registration';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


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
  modalRef!: BsModalRef;
  errorMessage: string = '';
  successMessage: string = '';
  registrationDisabled: boolean = false;

  registrationForm!: FormGroup;
  registrationData: RegistrationDto = {
    name: '',
    surname: '',
    email: '',
    password: '',
    role: 'USER'
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private modalService: BsModalService) {}

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

  openModal(template: TemplateRef<any>) {
    this.errorMessage = '';
    this.modalRef = this.modalService.show(template);
  }

  openModalWithMessage(template: TemplateRef<any>, message: string) {
    this.showMessageSuccess(message);
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
    this.errorMessage = '';
  }

  login() {
    if(this.loginForm.valid) {
      this.loginData = {...this.loginForm.value};
      this.authService.login(this.loginData).subscribe({
        next: () => {
          this.checkUser();
          this.modalRef.hide();
          this.registrationForm.reset();
          this.loginForm.reset();
        },
        error: err => {
          this.showMessageError(err);
        }
      });
    }
  }

  logout() {
    this.authService.logout();
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
    this.registrationDisabled = true;
    if(this.registrationForm.valid) {
      this.registrationData = {...this.registrationForm.value};
      this.registrationData.role = 'USER';
      this.authService.register(this.registrationData).subscribe({
        next: () => {
          this.showMessageSuccess('Utente creato con successo! WOHOO!');
          setTimeout(() => {
            this.modalRef.hide();
            this.registrationForm.reset();
            this.loginForm.reset();
            this.checkUser();
          }, 4000);
        },
        error: err => { 
          this.registrationDisabled = false;
          this.showMessageError(err); 
        }
      });
    }
  }

  showMessageError(message: string) {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = '';
    }, 5000);
  }

  showMessageSuccess(message: string) {
    this.successMessage = message;
    setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }
}
