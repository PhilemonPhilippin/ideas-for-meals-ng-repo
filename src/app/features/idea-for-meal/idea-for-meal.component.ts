import { Component, OnInit } from '@angular/core';
import { IdeaForMeal } from '../../shared/models/idea-for-meal';
import { Observable } from 'rxjs';
import { IdeaForMealService } from '../../shared/services/idea-for-meal.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-idea-for-meal',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './idea-for-meal.component.html',
  styleUrl: './idea-for-meal.component.css',
})
export class IdeaForMealComponent implements OnInit {
  ideaForMeal$!: Observable<IdeaForMeal>;
  constructor(private ideaForMealService: IdeaForMealService) {}

  ngOnInit(): void {
    this.ideaForMeal$ = this.ideaForMealService.getIdeaForMeal();
  }
}
