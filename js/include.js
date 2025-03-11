// Function to load HTML components dynamically
function loadComponent(url, containerId) {
  fetch(url)
      .then(response => response.text())
      .then(html => document.getElementById(containerId).innerHTML = html)
      .catch(error => console.error(`Error loading ${url}:`, error));
}

// Load common sections dynamically
loadComponent("nav.html", "navContainer");
loadComponent("photobanner.html", "photobannerContainer");
loadComponent("main-content-right.html", "main-content-right-container");

// Load Footer (Preserving from Old Script)
function loadFooter() {
  fetch('footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('footerContainer').innerHTML = data;
      })
      .catch(err => console.error('Error loading footer:', err));
}

loadFooter();

// Event Listeners for Navigation Toggle
setTimeout(() => {
  const ham = document.getElementById("mobile-menu");
  const ham1 = document.getElementById("ham-nav-1");

  if (ham && ham1) {
      ham.addEventListener("click", function () {
          ham1.classList.toggle("flexbox");
          ham1.classList.toggle("hidden");
      });

      const cross = document.getElementById("close");
      if (cross) {
          cross.addEventListener("click", function () {
              ham1.classList.toggle("flexbox");
              ham1.classList.toggle("hidden");
          });
      }
  }

}, 500);
