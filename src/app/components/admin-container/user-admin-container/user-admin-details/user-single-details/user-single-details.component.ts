import { Component, Input } from '@angular/core';
import { User } from '../../../../../../model/dtos/user';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReservationPlacesService } from '../../../../../../services/reservation-places.service';
import { SuperadminService } from '../../../../../../services/superadmin.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../../services/auth.service';

@Component({
  selector: 'app-user-single-details',
  templateUrl: './user-single-details.component.html',
  styleUrl: './user-single-details.component.css'
})
export class UserSingleDetailsComponent {
  
  @Input("userProp") user!: User;

  constructor(private modalService: BsModalService, private superAdminService: SuperadminService, private router: Router,
              private authService: AuthService) { }
  
  messageBox: string = "";
  hideButton: boolean = false;

  modalRef!: BsModalRef;

  openModal(template: any) {
    this.modalRef = this.modalService.show(template);
  }

  openModalDelete(template: any) {
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, keyboard: false });
    
    if(this.user.id === this.authService.authenticatedUser.value?.user.id) {
      this.messageBox = "Non puoi eliminare te stesso!";
      this.hideButton = true;
      setTimeout(() => {
        this.modalRef.hide();
      }, 4000);
      return;
    }
    this.hideButton = false;
    this.messageBox = "Sei sicuro di voler eliminare questo utente? L'azione è irreversibile!";
  }

  closeModal() {
    this.modalRef.hide();
    this.hideButton = false;
  }

  deleteStructure() {
    this.hideButton = true;
    this.messageBox = "Utente eliminato correttamente";
    this.superAdminService.deleteUserById(this.user.id).subscribe();
    setTimeout(() => {
      this.modalRef.hide();
      this.router.navigate(['/admin']);
    }, 4000);
  }

}
