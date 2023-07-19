
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
    apiKey: "AIzaSyA5_W3KiEyAZUkerdJWYLMASKMLd1GUZks",
    authDomain: "sathwik-383917.firebaseapp.com",
    projectId: "sathwik-383917",
    storageBucket: "sathwik-383917.appspot.com",
    messagingSenderId: "431447521002",
    appId: "1:431447521002:web:892d042a7f061be2834993",
    measurementId: "G-HGX4NS9KCM"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);