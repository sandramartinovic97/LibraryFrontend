import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from './auth.model';

@Injectable()
export class AuthService {
    constructor(private httpClient: HttpClient) { }

    login(username: string, password: string) {
        return this.httpClient.post<AuthResponse>("http://localhost:8083/authenticate", { username: username, password: password });
    }
}
