import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAA9E2lH7Mqfl5UyQBS-HeX6WNN5VkGl5c",
  authDomain: "invoice-app-c7d22.firebaseapp.com",
  projectId: "invoice-app-c7d22",
  storageBucket: "invoice-app-c7d22.appspot.com",
  messagingSenderId: "760583755649",
  appId: "1:760583755649:web:8244c48bbc3f510617fa80",
  measurementId: "G-Z17TX5X4CT"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore(app);