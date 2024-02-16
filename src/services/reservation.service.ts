import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SchedulePropDto } from "../model/dtos/schedule-prop";
import { ReservationSlotDto } from "../model/dtos/reservation-slot";
import { ReservationDto } from "../model/dtos/reservation";
import { ReservationRequestDto } from "../model/dtos/reservation-request";
import { environment } from "./environment";

@Injectable({
    providedIn: 'root'
})
export class ReservationService {
    private URL = environment.host + '/api/reservation';
    
    constructor(private http: HttpClient) { }

    getReservationDetails(fieldId: number, date: string): Observable<ReservationSlotDto[]> {

      const params = new HttpParams().set("fieldId", fieldId).set("date", date);

      return this.http.get<ReservationSlotDto[]>(`${this.URL}/reservation-details`, { params });
    }

    getReservationListByUser(): Observable<ReservationDto[]> {
      return this.http.get<ReservationDto[]>(`${this.URL}`);
    }

    createNewReservation(reservationRequest: ReservationRequestDto): Observable<any> {
      return this.http.post<any>(`${this.URL}`, reservationRequest);
    }

}