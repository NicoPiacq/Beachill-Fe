import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { RegistrationDto } from '../../../model/dtos/registration';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register-user-form',
  templateUrl: './register-user-form.component.html',
  styleUrl: './register-user-form.component.css'
})
export class RegisterUserFormComponent implements OnInit{
  registrationForm!: FormGroup;
  registrationData: RegistrationDto = {
    name: '',
    surname: '',
    email: '',
    password: '',
    role: 'USER'
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
      this.registrationForm = this.formBuilder.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        repeatPassword: ['', Validators.required]
      }
    );
  }

  register() {
    if(this.registrationForm.valid) {
      this.registrationData = {...this.registrationForm.value};
      this.registrationData.role = 'USER';
      this.authService.register(this.registrationData).subscribe();
    }
  }

}
