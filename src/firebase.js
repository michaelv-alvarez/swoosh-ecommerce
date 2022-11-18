// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHpAunWtdY6q6iZViRBSvMq5t3r4K56Kk",
  authDomain: "swoosh-ecommerce.firebaseapp.com",
  projectId: "swoosh-ecommerce",
  storageBucket: "swoosh-ecommerce.appspot.com",
  messagingSenderId: "244008879908",
  appId: "1:244008879908:web:08d0f92338772695ec95b1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
