import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PlaceDto } from "../model/dtos/place";
import { Observable } from "rxjs";
import { environment } from "./environment";

@Injectable({
    providedIn: 'root'
  })

  export class PlacesService {
    private URL = environment.host + '/api/tournament-place';
    constructor(private http: HttpClient) { }

    getAllPlaces(): Observable<PlaceDto[]> {
        return this.http.get<PlaceDto[]>(`${this.URL}/all`);
    }
  }