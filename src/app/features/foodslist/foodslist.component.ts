import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FoodService } from '../../shared/services/food.service';
import { Observable } from 'rxjs';
import { Food } from '../../shared/models/food';

@Component({
  selector: 'app-foodslist',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './foodslist.component.html',
  styleUrl: './foodslist.component.css',
})
export class FoodslistComponent implements OnInit {
  foods$!: Observable<Food[]>;

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foods$ = this.foodService.getFoods();
  }
}
