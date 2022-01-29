// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from '@firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZiL_BjYhIXgksddxVYQVtKs5sQAV4WIg",
  authDomain: "todo-list-3fc41.firebaseapp.com",
  projectId: "todo-list-3fc41",
  storageBucket: "todo-list-3fc41.appspot.com",
  messagingSenderId: "370938920939",
  appId: "1:370938920939:web:f0788a91ba3b083f37e3ae",
  measurementId: "G-H287E70DJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const todoDb = getDatabase(app);
