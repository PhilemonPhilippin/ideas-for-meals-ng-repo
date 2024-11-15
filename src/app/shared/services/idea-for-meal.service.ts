import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdeaForMeal } from '../models/idea-for-meal';

@Injectable({
  providedIn: 'root',
})
export class IdeaForMealService {
  constructor(private http: HttpClient) {}

  getIdeaForMeal(): Observable<IdeaForMeal> {
    const uri = 'https://localhost:7273/api/ideasformeals';
    return this.http.get<IdeaForMeal>(uri);
  }
}
