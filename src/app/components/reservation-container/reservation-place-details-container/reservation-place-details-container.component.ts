import { Component, OnInit } from '@angular/core';
import { ReservationPlaceDto } from '../../../../model/dtos/reservations-place';
import { FieldDto } from '../../../../model/dtos/field';
import { ReservationPlacesService } from '../../../../services/reservation-places.service';
import { ActivatedRoute } from '@angular/router';
import { FieldService } from '../../../../services/field.service';

@Component({
  selector: 'app-reservation-place-details-container',
  templateUrl: './reservation-place-details-container.component.html',
  styleUrl: './reservation-place-details-container.component.css'
})
export class ReservationPlaceDetailsContainerComponent implements OnInit {

  place!: ReservationPlaceDto;
  fieldList!: FieldDto[];
  placeId!: number;

  constructor(private reservationPlaceService: ReservationPlacesService, private fieldService: FieldService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.placeId = this.activeRoute.snapshot.params['id'];
    this.loadPlaceDetails();
    this.loadFields();
  }

  loadFields() {
    this.fieldService.getFields(this.placeId).subscribe({
      next: field => {
        this.fieldList = field;
      },
      error: error => console.error(error)
    });
  }

  loadPlaceDetails() {
    this.reservationPlaceService.getReservationPlace(this.placeId).subscribe({
      next: place => {
        this.place = place;
      },
      error: error => console.error(error)
    });
  }


}
