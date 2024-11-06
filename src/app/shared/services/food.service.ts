import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getFoods(): Observable<string[]> {
    const uri = 'https://localhost:7273/api/foods';
    return this.http.get<string[]>(uri);
  }
}
