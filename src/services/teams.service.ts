import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TeamDto } from "../model/dtos/team";
import { ObjectEncodingOptions } from "fs";
import { TeamComponentDto } from "../model/dtos/team-component";
import { InvitationResponseDto } from "../model/dtos/invitation-response";

  @Injectable({
    providedIn: 'root'
  })

  export class TeamsService {
    
    private URL = 'http://localhost:8080/api/team';
    constructor(private http: HttpClient) { }


    getAllTeams(): Observable<TeamDto[]> {
      return this.http.get<TeamDto[]>(`${this.URL}/all`);
    }

    getTeam(id: number): Observable<TeamDto> {
      return this.http.get<TeamDto>(`${this.URL}/${id}`);
    }

    getTeamsByPlayer(id: number | undefined): Observable<TeamDto[]> {
      return this.http.get<TeamDto[]>(`${this.URL}/my-enrolled/${id}`);
    }

    getInvitationsByPlayer(): Observable<TeamComponentDto[]> {
      return this.http.get<TeamComponentDto[]>(`${this.URL}/invite`);
    }

    setInvitationStatus(response: InvitationResponseDto): Observable<any> {
      return this.http.patch<any>(`${this.URL}/invite`, response);
    }

    createTeam(teamData: TeamDto): Observable<any> {
      return this.http.post<any>(`${this.URL}`, teamData);
    }

    getTeamsByQuery(query: string): Observable<TeamDto[]> {
      let params = new HttpParams().set('toFind', query);
      return this.http.get<TeamDto[]>(`${this.URL}/search`, {params});
    }

  }