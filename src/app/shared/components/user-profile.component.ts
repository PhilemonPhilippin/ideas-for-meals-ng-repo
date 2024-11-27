import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  template: ` @if(auth.user$ | async; as user) {
    <ul>
      <li>{{ user.name }}</li>
      <li>{{ user.email }}</li>
    </ul>
    }`,
  imports: [AsyncPipe],
  standalone: true,
})
export class UserProfileComponent {
  constructor(public auth: AuthService) {}
}
