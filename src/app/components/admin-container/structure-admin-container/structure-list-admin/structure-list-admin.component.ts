import { Component, Input } from '@angular/core';
import { ReservationPlaceDto } from '../../../../../model/dtos/reservations-place';
import { ReservationPlacesService } from '../../../../../services/reservation-places.service';

@Component({
  selector: 'app-structure-list-admin',
  templateUrl: './structure-list-admin.component.html',
  styleUrl: './structure-list-admin.component.css'
})
export class StructureListAdminComponent {

  structureNameToFind: string = "";

  constructor(private reservationPlaceService: ReservationPlacesService) { }

  @Input('structuresProp') structures: ReservationPlaceDto[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;

  delayedSearch() {
    setTimeout(() => {
      this.searchPlaces();
    }, 2000);
  }

  private searchPlaces() {
    this.reservationPlaceService.getReservationPlacesByQuery(this.structureNameToFind).subscribe({
      next: data => {
        this.structures = data;
      }
    });
  }
}
