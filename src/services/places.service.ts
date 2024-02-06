import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PlaceDto } from "../model/dtos/place";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

  export class PlacesService {
    private URL = 'http://localhost:8080/api/tournament-place';
    constructor(private http: HttpClient) { }

    getAllPlaces(): Observable<PlaceDto[]> {
        return this.http.get<PlaceDto[]>(`${this.URL}/all`);
    }
  }