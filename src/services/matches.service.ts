import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MatchDto } from "../model/dtos/match";
import { StatusMatchResponseDto } from "../model/dtos/status-match-response";
import { MatchRequestDto } from "../model/dtos/match-request";
import { SetMatchDto } from "../model/dtos/set-match";

@Injectable({
    providedIn: 'root'
})
export class MatchesService {
    private URL = 'http://localhost:8080/api/match';
    constructor(private http: HttpClient) { }

    getMatchDetails(id: number): Observable<MatchDto> {
        return this.http.get<MatchDto>(`${this.URL}/${id}`);
    }

    getMatchesByTournament(id: number): Observable<MatchDto[]> {
        return this.http.get<MatchDto[]>(`${this.URL}/all/tournament/${id}`);
    }

    getMatchesByPlayer(): Observable<MatchDto[]> {
        return this.http.get<MatchDto[]>(`${this.URL}/player`);
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

    getMatchesByUserId(id: number): Observable<MatchDto[]> {
        return this.http.get<MatchDto[]>(`${this.URL}/user/${id}`);
    }

    getSetsData(id: number): Observable<SetMatchDto[]> {
        return this.http.get<SetMatchDto[]>(`${this.URL}/${id}/set`);
    }

    saveSetPoints(set: SetMatchDto): Observable<any> {
        return this.http.patch<any>(`${this.URL}/set`, set);
    }

    finishMatch(id: number): Observable<any> {
        return this.http.patch<any>(`${this.URL}/${id}`, {});
    }
}