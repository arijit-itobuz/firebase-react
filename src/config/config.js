"use strict";
exports.__esModule = true;
exports.config = void 0;
exports.config = {
    firebase: {
        API_KEY: "".concat(process.env.REACT_APP_FIREBASE_API_KEY),
        AUTH_DOMAIN: "".concat(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
        PROJECT_ID: "".concat(process.env.REACT_APP_FIREBASE_PROJECT_ID),
        STORAGE_BUCKET: "".concat(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
        MESSAGING_SENDER_ID: "".concat(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
        APP_ID: "".concat(process.env.REACT_APP_FIREBASE_APP_ID),
        MEASUREMENT_ID: "".concat(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID)
    }
};
