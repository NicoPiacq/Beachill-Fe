import { Component } from '@angular/core';
import { ReservationPlaceDto } from '../../../model/dtos/reservations-place';
import { ReservationPlacesService } from '../../../services/reservation-places.service';

@Component({
  selector: 'app-reservation-container',
  templateUrl: './reservation-container.component.html',
  styleUrl: './reservation-container.component.css'
})
export class ReservationContainerComponent {
	reservationPlaces!: ReservationPlaceDto[];

	constructor(private reservationPlacesService: ReservationPlacesService){}
	ngOnInit(){
		this.fetchAllReservationPlaces();
	}

	fetchAllReservationPlaces(){
		this.reservationPlacesService.getAllReservationPlaces().subscribe({
			next: rp => {
				this.reservationPlaces = rp;
				console.log(this.reservationPlaces);
			},
			error: (error) => {
				console.error('Errore nel recupero delle strutture:', error);
			}
		});
	}
}
