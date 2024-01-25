import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TournamentDto } from "../model/dtos/tournament";



@Injectable({
    providedIn: 'root'
  })

export class TournamentsService {
    private URL = 'http://localhost:8080/api/tournament';
    constructor(private http: HttpClient) { }

    getAllTournaments(): Observable<TournamentDto[]> {
        return this.http.get<TournamentDto[]>(`${this.URL}/all`);
      }

}