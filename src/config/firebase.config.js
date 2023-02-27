import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const config = {
  apiKey: "AIzaSyDspkToMHBN04frvAFDUXuUHG2_VjAa7B0",
  authDomain: "fir-react-91015.firebaseapp.com",
  projectId: "fir-react-91015",
  storageBucket: "fir-react-91015.appspot.com",
  messagingSenderId: "239939639539",
  appId: "1:239939639539:web:70b472177da6babd733f86",
  measurementId: "G-JEBNSJZLDV"
};

const app = initializeApp(config);
const analytics = getAnalytics(app);