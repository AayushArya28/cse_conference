// firebase-contact.js

// Import required Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFIAn2N1KZr7BFizSKxWnN4TEMVlUoEPw",
  authDomain: "impact2025-contact.firebaseapp.com",
  projectId: "impact2025-contact",
  storageBucket: "impact2025-contact.firebasestorage.app",
  messagingSenderId: "782516212377",
  appId: "1:782516212377:web:f9ed80a932eb97daba5e08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form submission logic
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    try {
      await addDoc(collection(db, "contactFormSubmissions"), {
        name,
        email,
        phone,
        subject,
        message,
        timestamp: serverTimestamp()
      });

      // Show success message
      document.getElementById('success-message').style.display = 'block';
      form.reset();
      document.getElementById('success-message').scrollIntoView({ behavior: 'smooth' });

    } catch (error) {
      alert("Error submitting form: " + error.message);
      console.error("Error writing document: ", error);
    }
  });
});
