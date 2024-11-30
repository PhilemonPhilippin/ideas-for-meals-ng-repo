import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  template: ` @if(auth.user$ | async; as user) {
    <div class="user-profile mb-3">
      <ul>
        <li>Name : {{ user.name }}</li>
        <li>Email : {{ user.email }}</li>
      </ul>
    </div>
    }`,
  imports: [AsyncPipe],
  standalone: true,
})
export class UserProfileComponent {
  constructor(public auth: AuthService) {}
}
