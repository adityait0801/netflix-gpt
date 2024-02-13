// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm4NaW2o6EcWQ0v4VXrDgDZjHDyZWjeDI",
  authDomain: "netflixgpt0801.firebaseapp.com",
  projectId: "netflixgpt0801",
  storageBucket: "netflixgpt0801.appspot.com",
  messagingSenderId: "535203599239",
  appId: "1:535203599239:web:dd6f9de7e511c10a64b922",
  measurementId: "G-E3SXH99WET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();