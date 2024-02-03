import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PlayerDto } from "../model/dtos/player";
import { Observable } from "rxjs";
import { TeamComponentDto } from "../model/dtos/team-component";

@Injectable({
    providedIn: 'root'
  })

  export class PlayersService {
    private URL = 'http://localhost:8080/api/player';
    constructor(private http: HttpClient) { }

    getAllPlayer(): Observable<PlayerDto[]> {
        return this.http.get<PlayerDto[]>(`${this.URL}/all`);
    }
  
    getAllPlayerByTeamId(id: number): Observable<TeamComponentDto[]> {
        return this.http.get<TeamComponentDto[]>(`${this.URL}/enrolled/${id}`);
    }
  }