import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MatchDto } from "../model/dtos/match";
import { StatusMatchResponseDto } from "../model/dtos/status-match-response";
import { MatchRequestDto } from "../model/dtos/match-request";

@Injectable({
    providedIn: 'root'
})
export class MatchesService {
    private URL = 'http://localhost:8080/api/match';
    constructor(private http: HttpClient) { }

    getMatchesByTournament(id: number): Observable<MatchDto[]> {
        return this.http.get<MatchDto[]>(`${this.URL}/all/tournament/${id}`);
    }

    getMatchesByPlayer(): Observable<MatchDto[]> {
        return this.http.get<MatchDto[]>(`${this.URL}`);
    }

    getAllMatchesByTeam(id: number): Observable<MatchDto[]> {
        return this.http.get<MatchDto[]>(`${this.URL}/team/${id}`);
    }

    getMatchInvitesByPlayer(): Observable<MatchDto[]> {
        return this.http.get<MatchDto[]>(`${this.URL}/invites`);
    }

    setInvitationResponse(invite: StatusMatchResponseDto): Observable<any> {
        return this.http.post<any>(`${this.URL}/invites`, invite);
    }

    sendInvitation(matchData: MatchRequestDto): Observable<any> {
        return this.http.post<any>(`${this.URL}`, matchData);
    }
}