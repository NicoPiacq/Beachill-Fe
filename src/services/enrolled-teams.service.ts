import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EnrolledTeamsDto } from "../model/dtos/enrolled-teams";
import { environment } from "./environment";

@Injectable({
    providedIn: 'root'
})

export class EnrolledTeamsService {
    private URL = environment.host + '/api/enrolled-team';
    constructor(private http: HttpClient) { }

    getEnrolledTeamsByTournament(id: number): Observable<EnrolledTeamsDto[]>{
        return this.http.get<EnrolledTeamsDto[]>(`${this.URL}/tournament/${id}`);
    }
}