// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8KHH7SIb2ImXODqyhQZXBmkCgdGfEGaY",
  authDomain: "netflix-reactjs-65c69.firebaseapp.com",
  projectId: "netflix-reactjs-65c69",
  storageBucket: "netflix-reactjs-65c69.appspot.com",
  messagingSenderId: "446296587346",
  appId: "1:446296587346:web:3e6aee32b4d30999a4f38b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =getFirestore(app);