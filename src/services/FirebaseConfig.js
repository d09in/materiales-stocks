
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCsIn7agWPxAPxH9cT6ZZx0JKpCPHZk4pk",
  authDomain: "solar-idea-411619.firebaseapp.com",
  projectId: "solar-idea-411619",
  storageBucket: "solar-idea-411619.appspot.com",
  messagingSenderId: "246634024434",
  appId: "1:246634024434:web:9d5b06bd5ed6ae031b2f6b",
  measurementId: "G-2KG743KEPQ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // 
export { db };