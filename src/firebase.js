import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCWhQ4WDoASyfxi8RtRntKl7aNCVtwGgQ",
  authDomain: "firechat-f0267.firebaseapp.com",
  projectId: "firechat-f0267",
  storageBucket: "firechat-f0267.appspot.com",
  messagingSenderId: "983949056882",
  appId: "1:983949056882:web:664d5fbbde25b4a33a9beb",
  measurementId: "G-6KYZ9BHPZV",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
