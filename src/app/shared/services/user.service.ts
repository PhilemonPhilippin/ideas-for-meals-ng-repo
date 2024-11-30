import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  checkUser(): Observable<unknown> {
    const uri = 'https://localhost:7273/api/user/check';
    return this.http.get(uri);
  }
}
