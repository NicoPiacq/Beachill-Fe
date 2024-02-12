import { Component, Input, OnInit } from '@angular/core';
import { ReservationPlaceDto } from '../../../../../model/dtos/reservations-place';
import { FieldDto } from '../../../../../model/dtos/field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../../../../../services/reservation.service';
import { ReservationSlotDto } from '../../../../../model/dtos/reservation-slot';
import { Time } from '@angular/common';
import { ReservationRequestDto } from '../../../../../model/dtos/reservation-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-place-details',
  templateUrl: './reservation-place-details.component.html',
  styleUrl: './reservation-place-details.component.css'
})
export class ReservationPlaceDetailsComponent implements OnInit {

  @Input("reservationPlaceDetailsProp") reservationDetails!: ReservationPlaceDto;
  @Input("fieldProp") fieldList!: FieldDto[];

  constructor(private formBuilder: FormBuilder, private reservationService: ReservationService, private router: Router) {}

  date!: any;
  slots!: ReservationSlotDto[];
  showAvailableSlots: boolean = false;
  today!: string;

  reservationRequest: ReservationRequestDto = {
    fieldId: -1,
    date: new Date(),
    start: {
      hours: 0,
      minutes: 0
    },
    end: {
      hours: 0,
      minutes: 0
    }
  }

  ngOnInit(): void {
    this.today = new Date().toISOString().substring(0, 10);
  }

  getReservationDetails(fieldId: number) {

    if(!this.date) {
      alert("Inserisci una data");
      return;
    }

    /*if(new Date(this.date).getTime() < todayDate.getTime) {
      alert("Inserisci una data valida");
      return;
    }*/
    console.log(this.date);
    this.reservationService.getReservationDetails(fieldId, this.date).subscribe({
      next: details => {
        console.log(details);
        this.slots = details;
        this.showAvailableSlots = true;
      },
      error: error => console.error(error)
    });
  }

  createNewReservation(fieldId: number, date: Date, start: Time, end: Time) {
    this.reservationRequest.fieldId = fieldId;
    this.reservationRequest.date = date;
    this.reservationRequest.start = start;
    this.reservationRequest.end = end;

    this.reservationService.createNewReservation(this.reservationRequest).subscribe();
    this.router.navigate(['/reservations']);
  }
}
