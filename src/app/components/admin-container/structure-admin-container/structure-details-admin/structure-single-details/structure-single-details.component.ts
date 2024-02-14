import { Component, Input } from '@angular/core';
import { ReservationPlaceDto } from '../../../../../../model/dtos/reservations-place';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReservationPlacesService } from '../../../../../../services/reservation-places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structure-single-details',
  templateUrl: './structure-single-details.component.html',
  styleUrl: './structure-single-details.component.css'
})
export class StructureSingleDetailsComponent {
  @Input('structureProp') structure!: ReservationPlaceDto;

  constructor(private modalService: BsModalService, private reservationPlaceService: ReservationPlacesService, private router: Router) { }
  messageBox: string = "";
  hideButton: boolean = false;

  modalRef!: BsModalRef;

  openModal(template: any) {
    this.modalRef = this.modalService.show(template);
  }

  openModalDelete(template: any) {
    this.modalRef = this.modalService.show(template);
    this.messageBox = "Sei sicuro di voler eliminare la struttura?";
  }

  closeModal() {
    this.modalRef.hide();
  }

  deleteStructure() {
    this.hideButton = true;
    this.messageBox = "Struttura eliminata correttamente";
    this.reservationPlaceService.deleteReservationPlace(this.structure.id).subscribe();
    setTimeout(() => {
      this.modalRef.hide();
      this.router.navigate(['/admin']);
    }, 4000);
  }
}
