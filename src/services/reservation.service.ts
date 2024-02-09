import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SchedulePropDto } from "../model/dtos/schedule-prop";
import { ReservationSlotDto } from "../model/dtos/reservation-slot";

@Injectable({
    providedIn: 'root'
})
export class ReservationService {
    private URL = 'http://localhost:8080/api/reservation';
    
    constructor(private http: HttpClient) { }

    getReservationDetails(fieldId: number, date: string): Observable<ReservationSlotDto[]> {

      const params = new HttpParams().set("fieldId", fieldId).set("date", date);

      return this.http.get<ReservationSlotDto[]>(`${this.URL}/reservation-details`, { params });
    }

}