import { Injectable } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/native-federation';

@Injectable({
  providedIn: 'root'
})
export class FederationService {
  loadRemoteModule(remoteName: string, exposedModule: string) {
    return loadRemoteModule(remoteName, exposedModule);
  }
}
