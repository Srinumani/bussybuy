// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4LNKaDM5z05nZu_p4ZBVX-RvCbR73sjk",
  authDomain: "buybussyone.firebaseapp.com",
  projectId: "buybussyone",
  storageBucket: "buybussyone.appspot.com",
  messagingSenderId: "343703007218",
  appId: "1:343703007218:web:2b1e18ee9986c4735dc56b",
  measurementId: "G-9MZKQ23EY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getAuth(app);