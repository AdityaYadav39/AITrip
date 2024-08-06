// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv8Hawz0_bY_mhowLMoa3bw-jXMxiBX6g",
  authDomain: "trip-planner-c524a.firebaseapp.com",
  projectId: "trip-planner-c524a",
  storageBucket: "trip-planner-c524a.appspot.com",
  messagingSenderId: "1049210973775",
  appId: "1:1049210973775:web:09bbca5faba5984ede043a",
  measurementId: "G-SQNLTJ3P4Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)
// const analytics = getAnalytics(app);



// rules for read-write
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /<some_path>/ {
//       allow read, write: if true;
//     }
//   }
// }