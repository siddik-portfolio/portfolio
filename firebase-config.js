import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// আপনার স্ক্রিনশট থেকে সংগৃহীত সঠিক কনফিগারেশন
const firebaseConfig = {
  apiKey: "AIzaSyCK7VU_TW0iTvLTznB9C7f7iCPJGQ0966E", // নিশ্চিত করুন এই কি-টি ঠিক আছে
  authDomain: "smart-agri-5dd41.firebaseapp.com",
  projectId: "smart-agri-5dd41",
  storageBucket: "smart-agri-5dd41.firebasestorage.app",
  messagingSenderId: "561593631144",
  appId: "1:561593631144:web:69f12331efadb133be5d9d",
  measurementId: "G-67ZM90R1GN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

