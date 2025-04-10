// ✅ Firebase configuration for Impact2025
const firebaseConfig = {
  apiKey: "AIzaSyDFIAn2N1KZr7BFizSKxWnN4TEMVlUoEPw",
  authDomain: "impact2025-contact.firebaseapp.com",
  projectId: "impact2025-contact",
  storageBucket: "impact2025-contact.firebasestorage.app",
  messagingSenderId: "782516212377",
  appId: "1:782516212377:web:f9ed80a932eb97daba5e08"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Google Apps Script Web App URL
const scriptURL = "https://script.google.com/macros/s/AKfycbzVs6iHBxCiiGe8TwhFu_jKV1Vjufz9k5myN93yJJqz-IxEOT9MBohOqKQ5t4HUVoJu/exec";

// Form submission logic
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Store in Firebase under 'contactForm'
  database.ref("contactForm").push({
    name,
    email,
    phone,
    subject,
    message,
    timestamp: new Date().toISOString()
  });

  // Send to Google Sheets
  fetch(scriptURL, {
    method: "POST",
    body: new URLSearchParams({ name, email, phone, subject, message }),
  })
    .then(() => alert("Message sent successfully!"))
    .catch((error) => alert("Error occurred. Try again."));

  // Reset form fields
  document.getElementById("contact-form").reset();
});
