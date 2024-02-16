import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TournamentDto } from "../model/dtos/tournament";
import { environment } from "./environment";



@Injectable({
    providedIn: 'root'
  })

export class TournamentsService {
    private URL = environment.host + '/api/tournament';
    constructor(private http: HttpClient) { }

    getAllTournaments(): Observable<TournamentDto[]> {
        return this.http.get<TournamentDto[]>(`${this.URL}/all`);
    }

    getTournament(id: number): Observable<TournamentDto> {
      return this.http.get<TournamentDto>(`${this.URL}/${id}`);
    }

}