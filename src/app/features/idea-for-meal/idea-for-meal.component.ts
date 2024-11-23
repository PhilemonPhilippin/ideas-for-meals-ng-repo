import { Component, OnInit } from '@angular/core';
import { IdeaForMeal } from '../../shared/models/idea-for-meal';
import { IdeaForMealService } from '../../shared/services/idea-for-meal.service';

@Component({
  selector: 'app-idea-for-meal',
  standalone: true,
  imports: [],
  templateUrl: './idea-for-meal.component.html',
  styleUrl: './idea-for-meal.component.css',
})
export class IdeaForMealComponent implements OnInit {
  ideaForMeal!: IdeaForMeal;
  lockedFoods: string[] = [];

  constructor(private ideaForMealService: IdeaForMealService) {}

  toggleFood(event: Event): void {
    if (event.target) {
      let selectedRow: HTMLElement = event.currentTarget as HTMLElement;
      selectedRow.classList.toggle('selected-food');
      const group: string = selectedRow.getAttribute(
        'data-food-group'
      ) as string;
      if (selectedRow.classList.contains('selected-food')) {
        this.lockedFoods.push(group);
      } else {
        const index: number = this.lockedFoods.indexOf(group);
        this.lockedFoods.splice(index, 1);
      }
    }
  }

  generateNewIdea(): void {
    this.ideaForMealService.getIdeaForMeal().subscribe((idea) => {
      if (this.lockedFoods.includes('carbohydrate') === false) {
        this.ideaForMeal.carbohydrate = idea.carbohydrate;
      }
      if (this.lockedFoods.includes('protein') === false) {
        this.ideaForMeal.protein = idea.protein;
      }
      if (this.lockedFoods.includes('vegetable') === false) {
        this.ideaForMeal.vegetable = idea.vegetable;
      }
      if (this.lockedFoods.includes('fruit') === false) {
        this.ideaForMeal.fruit = idea.fruit;
      }
    });
  }

  ngOnInit(): void {
    this.ideaForMealService.getIdeaForMeal().subscribe((idea) => {
      this.ideaForMeal = idea;
    });
  }
}
