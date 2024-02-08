import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SchedulePropDto } from "../model/dtos/schedule-prop";

@Injectable({
    providedIn: 'root'
})
export class ReservationService {
    private URL = 'http://localhost:8080/api/reservation';
    
    constructor(private http: HttpClient) { }

    getReservationDetails(fieldId: number, date: string): Observable<SchedulePropDto> {

      const params = new HttpParams().set("fieldId", fieldId).set("date", date);

      return this.http.get<SchedulePropDto>(`${this.URL}/schedule-prop`, { params });
    }

}