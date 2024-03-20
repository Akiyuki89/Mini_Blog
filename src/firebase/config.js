import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYIASkz5hTqJ0DHVf0br_exaHuy9UncM8",
  authDomain: "mini-blog-7f3a5.firebaseapp.com",
  projectId: "mini-blog-7f3a5",
  storageBucket: "mini-blog-7f3a5.appspot.com",
  messagingSenderId: "588847232373",
  appId: "1:588847232373:web:557325ec007e11d8decf3c",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
