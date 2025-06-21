// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmtwRSxa7Sua3hnRq0tJQGJQ2rTS0fKr0",
  authDomain: "class-10-99d7b.firebaseapp.com",
  projectId: "class-10-99d7b",
  storageBucket: "class-10-99d7b.firebasestorage.app",
  messagingSenderId: "441152329946",
  appId: "1:441152329946:web:f2e71dd390e3eaea18ede3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()