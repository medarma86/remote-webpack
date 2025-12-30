import { Routes } from '@angular/router';
import { ProfileView } from './profile-view/profile-view';
import { ProfileDetails } from './profile-details/profile-details';

export const PROFILE_FEATURE_ROUTES: Routes = [
  // {
  //   path: '', 
  //   component: ProfileView,
  //   children: [
  //     {
  //       path: 'details',
  //       loadComponent: () => import('./profile-details/profile-details').then(m => m.ProfileDetails)
  //     }
  //   ]
  // }
  { path: '', component: ProfileView },
  { path: 'details', component: ProfileDetails }
];