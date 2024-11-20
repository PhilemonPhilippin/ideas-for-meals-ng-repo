import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodGroup } from '../models/food-group';

@Injectable({
  providedIn: 'root',
})
export class FoodGroupService {
  constructor(private http: HttpClient) {}

  getFoodGroups(): Observable<FoodGroup[]> {
    const uri = 'https://localhost:7273/api/foodgroups';
    return this.http.get<FoodGroup[]>(uri);
  }
}
