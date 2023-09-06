// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0GUmksNYYgV4qbzDyg2DkIZWg6DZZjxc",
  authDomain: "active-module-397909.firebaseapp.com",
  projectId: "active-module-397909",
  storageBucket: "active-module-397909.appspot.com",
  messagingSenderId: "670731061839",
  appId: "1:670731061839:web:95ef672f7c006d590b383a",
  measurementId: "G-JHJ492NEGN"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);