import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbbozl4QMn93prrg91Ykhz53_cR5dU8rs",
  authDomain: "itd112-lab01.firebaseapp.com",
  projectId: "itd112-lab01",
  storageBucket: "itd112-lab01.firebasestorage.app",
  messagingSenderId: "326250015167",
  appId: "1:326250015167:web:c42c121606be32e9f3590a",
  measurementId: "G-X3E08J9SP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firestore
const db = getFirestore(app);

export { db };
