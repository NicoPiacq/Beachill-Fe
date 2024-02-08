import { Component, Input } from '@angular/core';
import { ReservationPlaceDto } from '../../../../model/dtos/reservations-place';

@Component({
  selector: 'app-reservation-places-list',
  templateUrl: './reservation-places-list.component.html',
  styleUrl: './reservation-places-list.component.css'
})
export class ReservationPlacesListComponent {
	@Input('reservationPlacesProp') reservationPlaces!:ReservationPlaceDto[];
}
