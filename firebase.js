import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzcWSAXQhbWFqboTIdKtutGV84nVY9PGc",
  authDomain: "ai-flash-cards-saas.firebaseapp.com",
  projectId: "ai-flash-cards-saas",
  storageBucket: "ai-flash-cards-saas.appspot.com",
  messagingSenderId: "970303899704",
  appId: "1:970303899704:web:adef76b4daa2dd56d83ecd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
