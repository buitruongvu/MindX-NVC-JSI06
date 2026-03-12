// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

// import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkkCz4dSb-u7XccDR39L2t-j_nkysvmuM",
  authDomain: "coffee-management-a6547.firebaseapp.com",
  projectId: "coffee-management-a6547",
  storageBucket: "coffee-management-a6547.firebasestorage.app",
  messagingSenderId: "973381899646",
  appId: "1:973381899646:web:40809bed804c2f0829cf2f",
  measurementId: "G-65HEFGD4SB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
// const analytics = getAnalytics(app);

export { app, db, auth, createUserWithEmailAndPassword };
