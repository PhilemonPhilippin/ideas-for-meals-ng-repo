import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FoodGroup } from '../../../shared/models/food-group';
import { FoodGroupService } from '../../../shared/services/food-group.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AddFoodRequest } from '../../../shared/models/add-food-request';
import { DietService } from '../../../shared/services/diet.service';

@Component({
  selector: 'app-add-food',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './add-food.component.html',
  styleUrl: './add-food.component.css',
})
export class AddFoodComponent implements OnInit {
  @Output() onAdding = new EventEmitter();

  foodForm = new FormGroup({
    foodName: new FormControl(''),
    foodGroup: new FormControl(''),
  });

  foodGroups$!: Observable<FoodGroup[]>;

  constructor(
    private foodGroupService: FoodGroupService,
    private dietService: DietService
  ) {}

  onSubmit(): void {
    const foodRequest: AddFoodRequest = {
      name: this.foodForm.get('foodName')!.value as string,
      foodGroupId: this.foodForm.get('foodGroup')!.value as string,
    };
    this.dietService
      .addToDiet(foodRequest)
      .subscribe(() => this.onAdding.emit());
  }

  ngOnInit(): void {
    this.foodGroups$ = this.foodGroupService.getFoodGroups();
  }
}
