// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-rQKaMnZvLA2Bl0HUvzzZWoy-2JaUhPU",
  authDomain: "binshopgrow.firebaseapp.com",
  projectId: "binshopgrow",
  storageBucket: "binshopgrow.firebasestorage.app",
  messagingSenderId: "960814700678",
  appId: "1:960814700678:web:aa2228822e9f115a8d9907",
  measurementId: "G-91CWZ2T04G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
