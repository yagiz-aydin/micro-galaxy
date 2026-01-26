import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

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
    path: 'earth',
    loadComponent: () => 
      loadRemoteModule('earth', './LandingPad').then(m => m.App)
  },
  {
    path: 'mars',
    loadComponent: () => 
      loadRemoteModule('mars', './Component').then(m => m.App)
  },
];
