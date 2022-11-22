// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDKlZP6yYhBANL4ZwUxbegeisSCTS2ZaLk",
  authDomain: "react-chat-app-79dc2.firebaseapp.com",
  projectId: "react-chat-app-79dc2",
  storageBucket: "react-chat-app-79dc2.appspot.com",
  messagingSenderId: "142401823779",
  appId: "1:142401823779:web:fe81cabc41e1a469e9bd96",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
