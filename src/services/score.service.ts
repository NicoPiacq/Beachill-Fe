import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ScoreDto } from "../model/dtos/score-dto";

@Injectable({
    providedIn: 'root'
  })

export class ScoreService {
    private URL = 'http://localhost:8080/api/ranking';
    constructor(private http: HttpClient) { }

    getRankingByPlayerId(id: number | undefined): Observable<any> {
        return this.http.get<ScoreDto>(`${this.URL}/player/${id}`);
    }
}