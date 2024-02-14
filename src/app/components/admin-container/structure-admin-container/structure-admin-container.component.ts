import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../model/dtos/user';
import { ReservationPlaceDto } from '../../../../model/dtos/reservations-place';
import { ReservationPlacesService } from '../../../../services/reservation-places.service';

@Component({
  selector: 'app-structure-admin-container',
  templateUrl: './structure-admin-container.component.html',
  styleUrl: '../admin-container.component.css'
})
export class StructureAdminContainerComponent implements OnInit {

  @Input('managerDataProp') managerData!: User;
  structures: ReservationPlaceDto[] = [];

  constructor(private reservationPlaceService: ReservationPlacesService) { }
  
  ngOnInit(): void {
    this.reservationPlaceService.getAllReservationPlaces().subscribe({
      next: places => {
        this.structures = places;
      },
      error: err => {

      }
    });
  }

  closeModal() {
    
  }
}
