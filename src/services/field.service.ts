import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FieldDto } from "../model/dtos/field";

@Injectable({
    providedIn: 'root'
})
export class FieldService {

    private URL = 'http://localhost:8080/api/field';
    
    constructor(private http: HttpClient) { }

    getFields(placeId: number): Observable<FieldDto[]> {
        return this.http.get<FieldDto[]>(`${this.URL}/${placeId}`);
    }

}