import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { UserAuthenticatedDto } from "../model/dtos/user-authenticated";
import { RegistrationDto } from "../model/dtos/registration";
import { LoginDto } from "../model/dtos/login";
import { BehaviorSubject, catchError, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private router: Router) {}

    private URL = 'http://localhost:8080/api/user';
    private tokenExpirationTimer!: any;
    authenticatedUser = new BehaviorSubject<UserAuthenticatedDto | null>(null);

    register(userData: RegistrationDto) {
        return this.http.post<UserAuthenticatedDto>(`${this.URL}/register`, userData).pipe(
            catchError(this.handleError),
            tap(resData => {
                this.handleAuthentication(resData);
                alert("UTENTE CREATO CON SUCCESSO! WOHOO!");
            })
        );
    }

    login(userData: LoginDto) {
        console.log(userData);
        return this.http.post<UserAuthenticatedDto>(`${this.URL}/login`, userData).pipe(
            catchError(this.handleError),
            tap(resData => {
                this.handleAuthentication(resData);
                alert("HO FATTO L'ACCESSO CORRETTAMENTE!");
            })
        );
    }

    autoLogin() {
        let user: UserAuthenticatedDto;
        const userDataString = localStorage.getItem("userData");

        if (userDataString !== null) {
            user = JSON.parse(userDataString);
        } else {
            return;
        }

        if(user.token) {
            this.authenticatedUser.next(user);
            const expirationDate = new Date(user.expirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDate);
        }
    }

    handleAuthentication(userData: UserAuthenticatedDto) {
        userData.expirationDate = userData.expirationDate + new Date().getTime();
        this.authenticatedUser.next(userData);
        localStorage.setItem('userData', JSON.stringify(userData));
        this.autoLogout(userData.expirationDate);
    }

    logout() {
        this.authenticatedUser.next(null);
        this.router.navigate(['/']);
        localStorage.removeItem('userData');
    }

    autoLogout(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() =>
            this.logout(), expirationDuration);
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'Errore sconosciuto!';
        if (!errorRes.error || !errorRes.error.error) {
          return throwError(() => errorMessage);
        }
        switch (errorRes.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = 'Questa email già esiste';
            break;
          case 'EMAIL_NOT_FOUND':
            errorMessage = 'Questa email non esiste';
            break;
        }
        return throwError(() => errorMessage);
      }

}