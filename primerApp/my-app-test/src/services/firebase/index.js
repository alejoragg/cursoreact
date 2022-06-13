import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDORWGvPYavDSQclzJ3AKp73vIeod6qsrU",
  authDomain: "react-6cc63.firebaseapp.com",
  projectId: "react-6cc63",
  storageBucket: "react-6cc63.appspot.com",
  messagingSenderId: "977769446440",
  appId: "1:977769446440:web:3738ad90ab27f62478491d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)