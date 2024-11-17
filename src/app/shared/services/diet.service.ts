import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DietService {
  constructor(private http: HttpClient) {}

  getDiet(): Observable<Food[]> {
    const uri = 'https://localhost:7273/api/diet';
    return this.http.get<Food[]>(uri);
  }

  removeFromDiet(foods: string[]): Observable<unknown> {
    const uri = 'https://localhost:7273/api/diet/out';
    return this.http.put(uri, foods);
  }
}
