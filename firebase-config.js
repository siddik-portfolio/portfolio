// ১. ব্রাউজারের জন্য সরাসরি CDN লিঙ্ক ব্যবহার করুন
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ২. আপনার সঠিক কনফিগারেশন
const firebaseConfig = {
  apiKey: "AIzaSyCK7VU_TW0iTvLTznB9C7f7iCPJGQ0966E",
  authDomain: "smart-agri-5dd41.firebaseapp.com",
  databaseURL: "https://smart-agri-5dd41-default-rtdb.firebaseio.com",
  projectId: "smart-agri-5dd41",
  storageBucket: "smart-agri-5dd41.firebasestorage.app",
  messagingSenderId: "561593631144",
  appId: "1:561593631144:web:69f12331efadb133be5d9d",
  measurementId: "G-67ZM90R1GN"
};

// ৩. ফায়ারবেস ইনিশিয়ালাইজেশন
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ৪. অন্য ফাইল বা index.html এ ব্যবহারের জন্য এক্সপোর্ট করুন
export { auth, db };


