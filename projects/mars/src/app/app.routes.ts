import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'visit-earth',
    loadComponent: () => 
      // Dinamik yükleme: Earth'teki LandingPad bileşenini Mars'ın içine çeker
      loadRemoteModule('earth', './LandingPad').then(m => m.App)
  },
  // Kendi yerel rotalarınız...
];
