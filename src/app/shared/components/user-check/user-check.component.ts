import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-check',
  standalone: true,
  imports: [],
  templateUrl: './user-check.component.html',
  styleUrl: './user-check.component.css',
})
export class UserCheckComponent implements OnInit {
  constructor(public auth: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(() => this.userService.checkUser().subscribe());
  }
}
