import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PlayerDto } from "../model/dtos/player";
import { Observable } from "rxjs";
import { TeamComponentDto } from "../model/dtos/team-component";
import { User } from "../model/dtos/user";
import { InvitePlayerRequestDto } from "../model/dtos/invite-player-request";

@Injectable({
    providedIn: 'root'
  })

  export class PlayersService {
    private URL = 'http://localhost:8080/api/player';
    private URL_TEAM = 'http://localhost:8080/api/team';
    constructor(private http: HttpClient) { }

    getAllPlayer(): Observable<PlayerDto[]> {
        return this.http.get<PlayerDto[]>(`${this.URL}/all`);
    }
  
    getAllPlayerByTeamId(id: number): Observable<TeamComponentDto[]> {
        return this.http.get<TeamComponentDto[]>(`${this.URL}/enrolled/${id}`);
    }

    getPlayersByQuery(query: string): Observable<User[]> {
      let params = new HttpParams().set('toFind', query);
      return this.http.get<User[]>(`${this.URL}/search`, { params });
    }

    invitePlayerToTeam(inviteData: InvitePlayerRequestDto): Observable<any> {
      return this.http.post<any>(`${this.URL_TEAM}/invite`, inviteData);
    }

    removePlayerFromTeam(teamId: number, playerId: number): Observable<any> {
      return this.http.delete<any>(`${this.URL_TEAM}/${teamId}/player/${playerId}`);
    }
  }