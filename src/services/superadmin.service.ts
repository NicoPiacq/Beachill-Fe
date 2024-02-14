import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../model/dtos/user";

@Injectable({
    providedIn: 'root'
  })
export class SuperadminService {

    private URL: string = 'http://localhost:8080/api/super-admin';

    constructor(private http: HttpClient) { }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.URL}/users`);
    }

    getUserById(id: number): Observable<User> {
        return this.http.get<User>(`${this.URL}/user/${id}`);
    }

}