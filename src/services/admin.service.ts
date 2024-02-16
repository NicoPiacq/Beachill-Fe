import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TournamentDto } from "../model/dtos/tournament";
import { TournamentAdminDto } from "../model/dtos/tournament-admin";

@Injectable({
    providedIn: 'root'
  })
export class AdminService {
    
    private URL = 'http://localhost:8080/api/admin';
    constructor(private http: HttpClient) { }

    getAllTournaments(): Observable<TournamentAdminDto[]> {
      return this.http.get<TournamentAdminDto[]>(`${this.URL}/tournament/all`);
    }

    getTournament(id: number): Observable<TournamentAdminDto> {
      return this.http.get<TournamentAdminDto>(`${this.URL}/tournament/${id}`);
    }
  
    createTournament(tournament: TournamentDto): Observable<void> {
        return this.http.post<void>(`${this.URL}/tournament`, tournament);
    }
  
    deleteTournament(id: number): Observable<any> {
        return this.http.delete(`${this.URL}/tournament/${id}`);
    }

    generateMatchTournament(id: number): Observable<any> {
      return this.http.post<void>(`${this.URL}/tournament/match/${id}`, null);
    }
    
    simulateMatchTournament(id: number): Observable<any> {
      return this.http.post<void>(`${this.URL}/tournament/random-group-phase/${id}`, null);
    }

    assignedSecondPhase(id: number): Observable<any>{
        return this.http.post<void>(`${this.URL}/tournament/group-phase-standing/${id}`, null);
    }

    generateDebugData(): Observable<any> {
      return this.http.post<void>(`${this.URL}/insert-script`, null);
    }

}