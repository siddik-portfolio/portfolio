import { auth, db, googleProvider } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- Registration Logic ---
document.getElementById('btn-register-submit').addEventListener('click', async () => {
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const data = {
        fullName: document.getElementById('reg-fullname').value,
        userName: document.getElementById('reg-username').value,
        phone: document.getElementById('reg-phone').value,
        district: document.getElementById('reg-district').value,
        upazila: document.getElementById('reg-upazila').value,
        zip: document.getElementById('reg-zip').value
    };

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Firebase Firestore-e save kora
        await setDoc(doc(db, "users", user.uid), { uid: user.uid, email, ...data });
        alert("Success! Welcome to Smart Agri.");
        window.location.href = "Dashboard.html";
    } catch (e) { alert(e.message); }
});

// --- Login Logic ---
document.getElementById('btn-login-submit').addEventListener('click', async () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "Dashboard.html";
    } catch (e) { alert("Login failed: " + e.message); }
});

// --- Google Login ---
document.getElementById('btn-google').addEventListener('click', async () => {
    try {
        await signInWithPopup(auth, googleProvider);
        window.location.href = "Dashboard.html";
    } catch (e) { alert(e.message); }
});