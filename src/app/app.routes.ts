import { Routes } from '@angular/router';
import { ProfileView } from './profile-view/profile-view';
import { App } from './app';
import { Home } from './home/home';

export const routes: Routes = [
 {
    path: '', // Matches localhost:4201 exactly
    pathMatch: 'full',
    component: Home 
  },
  { path: 'profile', component: ProfileView } // Works when opened directly at :4201/profile
];
