import { Component } from '@angular/core';
import { FoodslistComponent } from '../features/foodslist/foodslist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FoodslistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
