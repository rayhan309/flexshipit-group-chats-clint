// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNOYuvjCAa6HyEXj7ttnNXB37enScOi_0",
  authDomain: "chats-ef634.firebaseapp.com",
  projectId: "chats-ef634",
  storageBucket: "chats-ef634.firebasestorage.app",
  messagingSenderId: "522354359682",
  appId: "1:522354359682:web:f75fc067647d09d75fe39b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);