// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBCwt1cRFFmye-AYkXdfin-uNU0tR1SwzY",
  authDomain: "docsapp-8a423.firebaseapp.com",
  projectId: "docsapp-8a423",
  storageBucket: "docsapp-8a423.appspot.com",
  messagingSenderId: "367867209424",
  appId: "1:367867209424:web:66daf119b4b3aa2a4120d5",
  measurementId: "G-V781B64TYY"
  };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)