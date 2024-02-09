import { Component, Input, OnInit } from '@angular/core';
import { ReservationPlaceDto } from '../../../../../model/dtos/reservations-place';
import { FieldDto } from '../../../../../model/dtos/field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../../../../../services/reservation.service';
import { SchedulePropDto } from '../../../../../model/dtos/schedule-prop';
import { ReservationSlotDto } from '../../../../../model/dtos/reservation-slot';

@Component({
  selector: 'app-reservation-place-details',
  templateUrl: './reservation-place-details.component.html',
  styleUrl: './reservation-place-details.component.css'
})
export class ReservationPlaceDetailsComponent implements OnInit {

  @Input("reservationPlaceDetailsProp") reservationDetails!: ReservationPlaceDto;
  @Input("fieldProp") fieldList!: FieldDto[];

  constructor(private formBuilder: FormBuilder, private reservationService: ReservationService) {}

  date!: any;
  slots!: ReservationSlotDto[];
  showAvailableSlots: boolean = false;

  ngOnInit(): void {
    
  }

  /* buildFullForm(){
    this.reservationForm = this.formBuilder.group({
      tournamentName: ['', Validators.required],
      startDate: [''],
      endDate: [''],
      tournamentTypeName: [''],
      place: [''],
    });
  } */

  getReservationDetails(fieldId: number) {

    if(!this.date) {
      alert("Inserisci una data");
      return;
    }

    if(new Date(this.date).getTime() <= Date.now()) {
      alert("Inserisci una data valida");
      return;
    }
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
}
