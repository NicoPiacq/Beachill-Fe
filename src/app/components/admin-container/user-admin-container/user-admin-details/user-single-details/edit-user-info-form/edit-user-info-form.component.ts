import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../../../../model/dtos/user';
import { SuperadminService } from '../../../../../../../services/superadmin.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-user-info-form',
  templateUrl: './edit-user-info-form.component.html',
  styleUrl: './edit-user-info-form.component.css'
})
export class EditUserInfoFormComponent implements OnInit{
  
  @Input("userProp") user!: User;
  editUserInfoForm!: FormGroup;
  roles: string[] = ["SUPERADMIN", "ADMIN", "MANAGER", "USER"];
  errorMessage: string = "";
  successMessage: string = "";

  constructor(private superAdminService: SuperadminService, private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.editUserInfoForm = this.formBuilder.group({
      id: [this.user.id],
      name: [this.user.name],
      surname: [this.user.surname],
      email: [this.user.email],
      registrationDate: [this.user.registrationDate],
      lastLogin: [this.user.lastLogin],
      role: [this.user.role]
    });
  }

  editUserInfo() {
    let editUserInfo = {...this.editUserInfoForm.value};
    console.log(editUserInfo);
    this.superAdminService.editUserInfo(editUserInfo).subscribe({
      next: () => {
        this.showSuccessMessage("Dettagli utente aggiornati con successo!\nL'utente dovrà ricollegarsi prima di vedere i cambiamenti!");
        setTimeout(() => { window.location.reload(); }, 2000);
      },
      error: (err) => {
        this.showErrorMessage("Errore durante l'aggiornamento dei dettagli utente!"+err);
      }
    });
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
