import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'visit-terra',
    loadComponent: () => 
      // Dinamik yükleme: Terra'teki LandingPad bileşenini Mars'ın içine çeker
      loadRemoteModule('terra', './LandingPad').then(m => m.App)
  },
  // Kendi yerel rotalarınız...
];
