// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChcdXMr8an_dwoe9SYuI6TAUn26LfN9Gg",
  authDomain: "lost-needs-661e7.firebaseapp.com",
  projectId: "lost-needs-661e7",
  storageBucket: "lost-needs-661e7.firebasestorage.app",
  messagingSenderId: "297177618319",
  appId: "1:297177618319:web:e8a12d8575a4d7a2639dfa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
