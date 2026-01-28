import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { inject } from '@angular/core';
import { UserService } from './services/user.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'mercure',
    loadComponent: () => 
      loadRemoteModule('mercure', './Component').then(m => m.App)
  },
  {
    path: 'venus',
    loadComponent: () => 
      loadRemoteModule('venus', './Component').then(m => m.App)
  },
  {
    path: 'terra',
    loadComponent: () => 
      loadRemoteModule('terra', './LandingPad').then(m => m.App)
  },
  {
    path: 'mars',
    loadComponent: () => 
      loadRemoteModule('mars', './Component').then(m => m.App)
  },
  {
    path: 'profile',
    loadComponent: () => 
      loadRemoteModule('profile', './Component').then(m => m.App),
    resolve: {
      user: () => inject(UserService).getUser()
    }
  },
];
