import { Component, Input } from '@angular/core';
import { IdeaForMealService } from '../../../shared/services/idea-for-meal.service';
import { Recipe } from '../../../shared/models/recipe';
import { IdeaForMeal } from '../../../shared/models/idea-for-meal';

@Component({
  selector: 'app-recipe-idea',
  standalone: true,
  imports: [],
  templateUrl: './recipe-idea.component.html',
  styleUrl: './recipe-idea.component.css',
})
export class RecipeIdeaComponent {
  constructor(private ideaForMealService: IdeaForMealService) {}
  recipeIdea!: Recipe;
  @Input() ideaForMeal!: IdeaForMeal;
  clicked = false;

  getRecipeIdea(): void {
    this.clicked = true;
    this.ideaForMealService
      .getRecipe(
        this.ideaForMeal.carbohydrate,
        this.ideaForMeal.protein,
        this.ideaForMeal.vegetable
      )
      .subscribe((response) => {
        this.recipeIdea = response;
        this.clicked = false;
      });
  }
}
