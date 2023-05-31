import { initializeApp, credential as _credential } from 'firebase-admin';

// Initialize the SDK with your service account credentials
import serviceAccount from 'path/to/serviceAccountKey.json';
initializeApp({
  credential: _credential.cert(serviceAccount)
});
