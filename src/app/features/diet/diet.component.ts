import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private dietService: DietService) {}

  ngOnInit(): void {
    this.diet$ = this.dietService.getDiet();
  }
}
