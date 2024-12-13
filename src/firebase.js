import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsZ_jAWCxIQugjWntmvkFNNnGLYrBtNJA",
  authDomain: "budgetbee009.firebaseapp.com",
  projectId: "budgetbee009",
  storageBucket: "budgetbee009.firebasestorage.app",
  messagingSenderId: "384853605997",
  appId: "1:384853605997:web:babb46d6fa2039f9784964",
  measurementId: "G-J3FHP4HGLL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
