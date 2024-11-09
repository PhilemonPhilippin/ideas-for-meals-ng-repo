import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getFoods(): Observable<Food[]> {
    const uri = 'https://localhost:7273/api/foods';
    return this.http.get<Food[]>(uri);
  }
}
