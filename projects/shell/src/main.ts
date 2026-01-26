import { initFederation } from '@angular-architects/native-federation';

const manifestUrl = window.location.port === '8080' 
  ? 'federation.manifest.nginx.json' 
  : 'federation.manifest.json';

initFederation(manifestUrl)
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
