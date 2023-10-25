// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3uZcLyHAC4ob45wmco-jthNsCdhGm1lY",
  authDomain: "kish-a8fec.firebaseapp.com",
  projectId: "kish-a8fec",
  storageBucket: "kish-a8fec.appspot.com",
  messagingSenderId: "1080794053837",
  appId: "1:1080794053837:web:05e5de4aa156d9d80e3d84",
  measurementId: "G-YSPE6F6WQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }