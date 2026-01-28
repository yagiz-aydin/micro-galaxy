import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'visit-terra',
    loadComponent: () => 
      loadRemoteModule('terra', './LandingPad').then(m => m.App)
  },
];
