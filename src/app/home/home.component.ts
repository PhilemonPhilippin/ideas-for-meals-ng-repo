import { Component } from '@angular/core';
import { FoodslistComponent } from '../features/foodslist/foodslist.component';
import { IdeaForMealComponent } from '../features/idea-for-meal/idea-for-meal.component';
import { DietComponent } from "../features/diet/diet.component";
import { UserProfileComponent } from "../shared/components/user-profile.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FoodslistComponent, IdeaForMealComponent, DietComponent, UserProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
