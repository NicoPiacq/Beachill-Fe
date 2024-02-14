import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ReservationPlaceDto } from "../model/dtos/reservations-place";

@Injectable({
  providedIn: 'root'
})
export class ReservationPlacesService {
  private URL = 'http://localhost:8080/api/reservation-place';
    
  constructor(private http: HttpClient) { }
    
  getAllReservationPlaces(): Observable<ReservationPlaceDto[]> {
    return this.http.get<ReservationPlaceDto[]>(`${this.URL}`);
  }

  getReservationPlace(placeId: number): Observable<ReservationPlaceDto> {
    return this.http.get<ReservationPlaceDto>(`${this.URL}/${placeId}`);
  }

  getReservationPlacesByQuery(query: string): Observable<ReservationPlaceDto[]> {
    return this.http.get<ReservationPlaceDto[]>(`${this.URL}/search?toFind=${query}`);
  }

  addReservationPlace(place: ReservationPlaceDto): Observable<ReservationPlaceDto> {
    return this.http.post<ReservationPlaceDto>(`${this.URL}`, place);
  }

  updateReservationPlace(place: ReservationPlaceDto): Observable<ReservationPlaceDto> {
    return this.http.patch<ReservationPlaceDto>(`${this.URL}/${place.id}`, place);
  }

  deleteReservationPlace(id: number) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}