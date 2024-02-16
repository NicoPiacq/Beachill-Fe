import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FieldDto } from "../model/dtos/field";
import { environment } from "./environment";

@Injectable({
    providedIn: 'root'
})
export class FieldService {

    private URL = environment.host + '/api/field';
    
    constructor(private http: HttpClient) { }

    getFields(placeId: number): Observable<FieldDto[]> {
        return this.http.get<FieldDto[]>(`${this.URL}/${placeId}`);
    }

}