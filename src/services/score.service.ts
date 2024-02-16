import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ScoreDto } from "../model/dtos/score-dto";
import { ScoreTypeDto } from "../model/dtos/score-type";
import { environment } from "./environment";

@Injectable({
    providedIn: 'root'
  })

export class ScoreService {
    private URL = environment.host + '/api/ranking';
    constructor(private http: HttpClient) { }

    getRankingByPlayerId(id: number | undefined): Observable<any> {
        return this.http.get<ScoreDto>(`${this.URL}/player/${id}`);
    }

    getRankingByScoreType(scoreType: string): Observable<ScoreDto[]> {
        return this.http.get<ScoreDto[]>(`${this.URL}?type=${scoreType}`);
    }
}