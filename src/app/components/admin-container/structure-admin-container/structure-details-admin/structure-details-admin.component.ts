import { Component } from '@angular/core';
import { ReservationPlacesService } from '../../../../../services/reservation-places.service';
import { ActivatedRoute } from '@angular/router';
import { ReservationPlaceDto } from '../../../../../model/dtos/reservations-place';

@Component({
  selector: 'app-structure-details-admin',
  templateUrl: './structure-details-admin.component.html',
  styleUrl: './structure-details-admin.component.css'
})
export class StructureDetailsAdminComponent {
  structureId: number = 0;
  structureData!: ReservationPlaceDto;

  constructor(private reservationPlaceService: ReservationPlacesService, private activeRoute: ActivatedRoute) {
    this.structureId = this.activeRoute.snapshot.params['id'];
    this.getStructureData();
  }

  getStructureData() {
    this.reservationPlaceService.getReservationPlace(this.structureId).subscribe({
      next: data => {
        this.structureData = data;
      },
      error: err => {

      }
    });
  }
}
