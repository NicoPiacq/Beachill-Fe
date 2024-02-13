import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TournamentTypeDto } from "../model/dtos/tournament-type";
import { TournamentLevel } from "../model/dtos/tournament-level";

@Injectable({
    providedIn: 'root'
  })

  export class TournamentsTypesService {
    private URL = 'http://localhost:8080/api/tournament-type';
    
    constructor(private http: HttpClient) { }

    getAllTournamentsTypes(): Observable<TournamentTypeDto[]> {
        return this.http.get<TournamentTypeDto[]>(`${this.URL}/all`);
    }

    getAllTournamentsLevels(): Observable<TournamentLevel[]> {
        return this.http.get<TournamentLevel[]>(`${this.URL}/levels`);
    }
  }