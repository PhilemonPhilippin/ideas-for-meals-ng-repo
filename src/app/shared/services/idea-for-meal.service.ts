import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdeaForMeal } from '../models/idea-for-meal';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root',
})
export class IdeaForMealService {
  constructor(private http: HttpClient) {}

  getIdeaForMeal(): Observable<IdeaForMeal> {
    const uri = 'https://localhost:7273/api/ideasformeals';
    return this.http.get<IdeaForMeal>(uri);
  }

  getRecipe(
    carbohydrate: string,
    protein: string,
    vegetable: string
  ): Observable<Recipe> {
    const uri = 'https://localhost:7273/api/ideasformeals/recipe';
    return this.http.post<Recipe>(uri, [carbohydrate, protein, vegetable]);
  }

  downloadRecipe(recipe: Recipe): Observable<Blob> {
    const uri = 'https://localhost:7273/api/ideasformeals/recipe/pdf';
    return this.http.post(uri, recipe, { responseType: 'blob' });
  }
}
