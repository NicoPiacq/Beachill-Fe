import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TeamDto } from "../model/dtos/team";

  @Injectable({
    providedIn: 'root'
  })

  export class TeamsService {
    private URL = 'http://localhost:8080/api/team';
    constructor(private http: HttpClient) { }

    getEnrolledTeamsByTournament(id: number): Observable<TeamDto[]>{
        return this.http.get<TeamDto[]>(`${this.URL}/all/tournament/${id}`);
    }
  }