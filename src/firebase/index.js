// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa8ZlJj0V1z6ucONtcdKsvaOrsG0WJHMs",
  authDomain: "sdte-com.firebaseapp.com",
  projectId: "sdte-com",
  storageBucket: "sdte-com.appspot.com",
  messagingSenderId: "84284820055",
  appId: "1:84284820055:web:5c95ae8142998d9299f112",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
