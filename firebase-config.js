// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK7VU_TW0iTvLTznB9C7f7iCPJGQO966E",
  authDomain: "smart-agri-5dd41.firebaseapp.com",
  projectId: "smart-agri-5dd41",
  storageBucket: "smart-agri-5dd41.firebasestorage.app",
  messagingSenderId: "561593631144",
  appId: "1:561593631144:web:69f12331efadb133be5d9d",
  measurementId: "G-67ZM90R1GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
