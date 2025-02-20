import { Component } from '@angular/core';
import { IdeaForMealComponent } from '../features/idea-for-meal/idea-for-meal.component';
import { UserCheckComponent } from '../shared/components/user-check/user-check.component';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IdeaForMealComponent,
    AsyncPipe,
    UserCheckComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public auth: AuthService) {}
}
