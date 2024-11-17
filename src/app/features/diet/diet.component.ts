import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Food } from '../../shared/models/food';
import { DietService } from '../../shared/services/diet.service';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css',
})
export class DietComponent implements OnInit {
  diet$!: Observable<Food[]>;
  selectedFoods: string[] = [];

  constructor(private dietService: DietService) {}

  toggleFood(event: Event): void {
    if (event.target) {
      let selectedCard: HTMLElement = event.currentTarget as HTMLElement;
      selectedCard.classList.toggle('selected-food');
      const id: string = selectedCard.getAttribute('data-food-id') as string;
      if (selectedCard.classList.contains('selected-food')) {
        this.selectedFoods.push(id);
      } else {
        const index: number = this.selectedFoods.indexOf(id);
        this.selectedFoods.splice(index, 1);
      }
    }
  }

  fetchDiet(): void {
    this.diet$ = this.dietService.getDiet();
  }

  removeFromDiet(): void {
    this.dietService
      .removeFromDiet(this.selectedFoods)
      .subscribe(() => this.fetchDiet());
  }

  ngOnInit(): void {
    this.fetchDiet();
  }
}
