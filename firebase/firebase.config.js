"use strict";
exports.__esModule = true;
exports.auth = exports.analytics = void 0;
var app_1 = require("firebase/app");
var analytics_1 = require("firebase/analytics");
var config_1 = require("../src/config/config");
var auth_1 = require("firebase/auth");
var firebaseConfig = {
    apiKey: config_1.config.firebase.API_KEY,
    authDomain: config_1.config.firebase.AUTH_DOMAIN,
    projectId: config_1.config.firebase.PROJECT_ID,
    storageBucket: config_1.config.firebase.STORAGE_BUCKET,
    messagingSenderId: config_1.config.firebase.MESSAGING_SENDER_ID,
    appId: config_1.config.firebase.APP_ID,
    measurementId: config_1.config.firebase.MEASUREMENT_ID
};
var app = (0, app_1.initializeApp)(firebaseConfig);
exports.analytics = (0, analytics_1.getAnalytics)(app);
exports.auth = (0, auth_1.getAuth)(app);
