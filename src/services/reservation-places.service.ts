import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ReservationPlaceDto } from "../model/dtos/reservations-place";

@Injectable({
    providedIn: 'root'
  })
  export class reservationPlacesService {
	private URL = 'http://localhost:8080/api/reservation-place';
    constructor(private http: HttpClient) { }
	getAllReservationPlaces(): Observable<ReservationPlaceDto[]> {
		return this.http.get<ReservationPlaceDto[]>(`${this.URL}`);
	}
  }