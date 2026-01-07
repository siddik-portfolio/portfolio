// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_vUM-9p4xs9J-Z2f7tpcx1n6QDV0kyuM",
  authDomain: "mart-agri-project.firebaseapp.com",
  projectId: "mart-agri-project",
  storageBucket: "mart-agri-project.firebasestorage.app",
  messagingSenderId: "1006121956730",
  appId: "1:1006121956730:web:34c311c883b81eb3ff12c3",
  measurementId: "G-F0BG21C9RL"
};

// Initialize
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();