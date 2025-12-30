import { Routes } from '@angular/router';
import { ProfileView } from './profile/profile-view/profile-view';
import { Home } from './home/home';

// // 1. This is for the Host to consume (Jump straight to Profile)
// export const REMOTE_PROFILE_ROUTES: Routes = [
//   {
//     path: '', // No prefix here because Host adds '/profile'
//     component: ProfileView,
//     children: [
//       {
//         path: 'details',
//         loadComponent: () => import('./profile/profile-details/profile-details').then(m => m.ProfileDetails)
//       }
//     ]
//   }
// ];

// // 2. This is for the Remote when running standalone on 4201
// export const routes: Routes = [
//   {
//     path: '',
//     component: Home,
//     pathMatch: 'full'
//   },
//   {
//     path: 'profile',
//     children: REMOTE_PROFILE_ROUTES // Reuse the logic above
//   }
// ];

export const routes: Routes = [
  { path: '', component: Home },
  { 
    path: 'profile', 
    loadChildren: () => import('./profile/profile.routes').then(m => m.PROFILE_FEATURE_ROUTES) 
  }
];