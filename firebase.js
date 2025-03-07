// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVxnGV4LRqPPt2cB46rU6XMNfvYlngkxY",
  authDomain: "mark-down-47179.firebaseapp.com",
  projectId: "mark-down-47179",
  storageBucket: "mark-down-47179.firebasestorage.app",
  messagingSenderId: "917864750396",
  appId: "1:917864750396:web:81efc3331077c3b4d61239",
  measurementId: "G-YM3P5R1TMK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
