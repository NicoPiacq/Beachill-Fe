import { Component, OnInit } from '@angular/core';
import { ReservationDto } from '../../../model/dtos/reservation';
import { ReservationService } from '../../../services/reservation.service';

@Component({
  selector: 'app-reservation-subscribed-page',
  templateUrl: './reservation-subscribed-page.component.html',
  styleUrl: './reservation-subscribed-page.component.css'
})
export class ReservationSubscribedPageComponent implements OnInit {

  reservationList: ReservationDto[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.getReservationList();
  }

  getReservationList() {
    this.reservationService.getReservationListByUser().subscribe({
      next: res => {this.reservationList = res; console.log(res)},
      error: error => console.error(error)
    });
  }

  printSportName(sport: string) {
    return sport[0].toUpperCase() + sport.substring(1).toLowerCase();
  }
}
