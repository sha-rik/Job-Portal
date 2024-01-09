// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATPTICD1JlwiYtRyM278PwfJYn71AuVQA",
  authDomain: "job-on-board-ba89c.firebaseapp.com",
  projectId: "job-on-board-ba89c", 
  storageBucket: "job-on-board-ba89c.appspot.com",
  messagingSenderId: "389388134571",
  appId: "1:389388134571:web:1e0fdd3761fed22396efee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// it helps to initialize firestore

export {db};