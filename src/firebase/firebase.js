// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMzR0AQ2lJAjBW3K_9wHKRu2ySJiiFaxY",
  authDomain: "forvim-6db77.firebaseapp.com",
  projectId: "forvim-6db77",
  storageBucket: "forvim-6db77.appspot.com",
  messagingSenderId: "885117486513",
  appId: "1:885117486513:web:2ca155c7c5fcf052056990",
  measurementId: "G-8KZNGP24FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth}