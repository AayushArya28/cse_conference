const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent default page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const webhookURL = "https://webhook.site/5ee07df0-f677-4527-bb51-7a775535d2a0";

  try {
    const response = await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        message
      })
    });

    if (response.ok) {
      alert("Form submitted successfully!");
    } else {
      alert("Form submission failed!");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong.");
  }
});
