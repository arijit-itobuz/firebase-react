export const config = {
  firebase: {
    API_KEY: String(process.env.REACT_APP_FIREBASE_API_KEY),
    AUTH_DOMAIN: String(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
    PROJECT_ID: String(process.env.REACT_APP_FIREBASE_PROJECT_ID),
    STORAGE_BUCKET: String(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
    MESSAGING_SENDER_ID: String(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
    APP_ID: String(process.env.REACT_APP_FIREBASE_APP_ID),
    MEASUREMENT_ID: String(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID),
  },
};
