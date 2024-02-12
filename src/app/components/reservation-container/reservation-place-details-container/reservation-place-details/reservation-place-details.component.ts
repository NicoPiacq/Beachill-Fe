import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ReservationPlaceDto } from '../../../../../model/dtos/reservations-place';
import { FieldDto } from '../../../../../model/dtos/field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../../../../../services/reservation.service';
import { ReservationSlotDto } from '../../../../../model/dtos/reservation-slot';
import { Time } from '@angular/common';
import { ReservationRequestDto } from '../../../../../model/dtos/reservation-request';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-reservation-place-details',
  templateUrl: './reservation-place-details.component.html',
  styleUrl: './reservation-place-details.component.css'
})
export class ReservationPlaceDetailsComponent implements OnInit {

  @Input("reservationPlaceDetailsProp") reservationDetails!: ReservationPlaceDto;
  @Input("fieldProp") fieldList: FieldDto[] = [];

  constructor(private formBuilder: FormBuilder, private reservationService: ReservationService, 
              private router: Router, private modalService: BsModalService) {}

  date!: any;
  fieldId!: number;
  slots: ReservationSlotDto[] = [];
  today!: string;
  modalRef!: BsModalRef;

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

  getReservationDetails(template: TemplateRef<any>) { 

    if(!this.date || !this.fieldId) {
      this.modalRef = this.modalService.show(template);
      return;
    }

    console.log(this.date);
    this.reservationService.getReservationDetails(this.fieldId, this.date).subscribe({
      next: details => {
        console.log(details);
        this.slots = details;
      },
      error: error => console.error(error)
    });
  }

  createNewReservation(fieldId: number, date: Date, start: Time, end: Time, template: TemplateRef<any>) {
    this.reservationRequest.fieldId = fieldId;
    this.reservationRequest.date = date;
    this.reservationRequest.start = start;
    this.reservationRequest.end = end;

    this.reservationService.createNewReservation(this.reservationRequest).subscribe({
      next: () => {
        this.modalRef = this.modalService.show(template, {
          ignoreBackdropClick: true,
          keyboard: false
        });
      },
      error: error => console.error(error)
    });
    setTimeout(() => {
      this.modalRef.hide();
      this.router.navigate(['/reservations']);
    }, 4000);
  }
}
