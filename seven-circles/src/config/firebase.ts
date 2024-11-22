// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh3fNBAE9XVxxGFrfkRRMRUrpIfJvw3UI",
  authDomain: "seven-circles-93b30.firebaseapp.com",
  databaseURL: "https://seven-circles-93b30-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "seven-circles-93b30",
  storageBucket: "seven-circles-93b30.firebasestorage.app",
  messagingSenderId: "353008156799",
  appId: "1:353008156799:web:832c60c9affecdc3193f4a",
  measurementId: "G-VFE1B98X4F"
};

// Initialize Firebase
const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };