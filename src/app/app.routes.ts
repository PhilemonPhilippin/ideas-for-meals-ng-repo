import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DietComponent } from './features/diet/diet.component';

export const routes: Routes = [
  { path: 'diet', component: DietComponent },
  { path: '', component: HomeComponent },
];
