import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../../services/auth.service';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrl: './change-password-form.component.css'
})
export class ChangePasswordFormComponent {
  editUserPassForm!: FormGroup;

  @Input('userIdProp') userId: number | undefined;

  errorMessage: string = "";
  successMessage: string = "";

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.editUserPassForm = this.formBuilder.group({
      id: [this.userId],
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
  }

  editUserPassword() {
    let editUserInfo = {...this.editUserPassForm.value};
    if(this.editUserPassForm.invalid) {
      this.showErrorMessage("Compila tutti i campi!");
      return;
    }

    if(editUserInfo.newPassword !== editUserInfo.repeatPassword) {
      this.showErrorMessage("Le password non coincidono!");
      return;
    }

    /* this.authService.editUserPassword(editUserInfo).subscribe({
      next: () => {
        this.showSuccessMessage("Password aggiornata con successo!\nEffettuerai il logout per applicare correttamente le modifiche!");
        setTimeout(() => { 
          window.location.reload(); 
        }, 2000);
      },
      error: () => {
        this.showErrorMessage("Errore durante il cambiamento della password!\nSicuro di aver inserito la vecchia password correttamente?");
      }
    }); */
  }

  showErrorMessage(message: string) {
    this.errorMessage = message;
    setTimeout(() => { this.errorMessage = ''; }, 5000)
  }

  showSuccessMessage(message: string) {
    this.successMessage = message;
    setTimeout(() => { this.successMessage = ''; }, 5000);
  }
}
