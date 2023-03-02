import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { config } from '../src/config/config';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: config.firebase.API_KEY,
  authDomain: config.firebase.AUTH_DOMAIN,
  projectId: config.firebase.PROJECT_ID,
  storageBucket: config.firebase.STORAGE_BUCKET,
  messagingSenderId: config.firebase.MESSAGING_SENDER_ID,
  appId: config.firebase.APP_ID,
  measurementId: config.firebase.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
