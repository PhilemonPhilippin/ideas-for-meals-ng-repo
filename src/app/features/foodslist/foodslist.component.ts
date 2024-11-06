import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FoodService } from '../../shared/services/food.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foodslist',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './foodslist.component.html',
  styleUrl: './foodslist.component.css',
})
export class FoodslistComponent {
  foods$!: Observable<string[]>;

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foods$ = this.foodService.getFoods();
  }
}
