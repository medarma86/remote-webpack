import { Routes } from '@angular/router';
import { ProfileView } from './profile-view/profile-view';

export const PROFILE_FEATURE_ROUTES: Routes = [
  {
    path: '', 
    component: ProfileView,
    children: [
      {
        path: 'details',
        loadComponent: () => import('./profile-details/profile-details').then(m => m.ProfileDetails)
      }
    ]
  }
];