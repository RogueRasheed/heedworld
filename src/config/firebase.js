import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7r6uuqKd1mGtLa3UkFktQoELnr_evo_k",
  authDomain: "heedworld-205e3.firebaseapp.com",
  projectId: "heedworld-205e3",
  storageBucket: "heedworld-205e3.firebasestorage.app",
  messagingSenderId: "949893389317",
  appId: "1:949893389317:web:8966e3083ac0382987d06c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);