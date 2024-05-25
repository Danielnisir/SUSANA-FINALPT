// src/firebase.tsx
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp7ypmGtHGcM-jgI4hzQtnw0eiD50jEqI",
  authDomain: "fir-auth-1b819.firebaseapp.com",
  projectId: "fir-auth-1b819",
  storageBucket: "fir-auth-1b819.appspot.com",
  messagingSenderId: "695759152234",
  appId: "1:695759152234:web:8b8a92fb61616f7e5e5613",
  measurementId: "G-NJVW086GTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances

