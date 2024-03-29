import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ReservationPlaceDto } from "../model/dtos/reservations-place";
import { environment } from "./environment";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

    private URL = environment.host + '/api/manager';
    
    constructor(private http: HttpClient) { }

    addReservationPlace(place: ReservationPlaceDto): Observable<ReservationPlaceDto> {
        return this.http.post<ReservationPlaceDto>(`${this.URL}/place`, place);
      }
    
    updateReservationPlace(place: ReservationPlaceDto): Observable<ReservationPlaceDto> {
        return this.http.patch<ReservationPlaceDto>(`${this.URL}/reservation-place/${place.id}`, place);
    }

    deleteReservationPlace(id: number) {
        return this.http.delete(`${this.URL}/reservation-place/${id}`);
    }
}