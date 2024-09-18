// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSLcu1xCEgC7IVSWU0I0ezlVDZ8B3M524",
  authDomain: "eyescreen-abd2f.firebaseapp.com",
  projectId: "eyescreen-abd2f",
  storageBucket: "eyescreen-abd2f.appspot.com",
  messagingSenderId: "266157271715",
  appId: "1:266157271715:web:902746f3c65c093530ad16",
  measurementId: "G-HBCF7P9KJR",
  databaseURL: "https://eyescreen-abd2f-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, database };
