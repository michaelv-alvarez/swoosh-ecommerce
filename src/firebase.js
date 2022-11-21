// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX0mPUNDF9AQR72p_bfPxgfy9jLmHCwPE",
  authDomain: "swoosh-e22c7.firebaseapp.com",
  projectId: "swoosh-e22c7",
  storageBucket: "swoosh-e22c7.appspot.com",
  messagingSenderId: "934373699552",
  appId: "1:934373699552:web:d2a60e5c2bda3de1b48585",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
