import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DietComponent } from './features/diet/diet.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
  { path: 'diet', component: DietComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },
];
