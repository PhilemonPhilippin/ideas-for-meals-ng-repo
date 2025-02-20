import { Component, Input } from '@angular/core';
import { IdeaForMealService } from '../../../../shared/services/idea-for-meal.service';
import { Recipe } from '../../../../shared/models/recipe';

@Component({
  selector: 'app-recipe-download',
  standalone: true,
  imports: [],
  templateUrl: './recipe-download.component.html',
  styleUrl: './recipe-download.component.css',
})
export class RecipeDownloadComponent {
  constructor(private ideaForMealService: IdeaForMealService) {}
  @Input() recipeIdea!: Recipe;

  downloadRecipe(): void {
    this.ideaForMealService
      .downloadRecipe(this.recipeIdea)
      .subscribe((response: Blob) => {
        const url = window.URL.createObjectURL(response);
        const a = document.createElement('a');
        a.href = url;
        a.target = "_blank";
        a.download = 'recipe.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      });
  }
}
