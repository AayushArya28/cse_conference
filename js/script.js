
function loadFooter() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footerContainer').innerHTML = data;
    })
    .catch(err => console.error('Error loading footer:', err));
}

loadFooter();


const div = document.getElementById("ham1");
const div2 = document.getElementById("straight");
div.addEventListener("click", () => {
    div2.classList.toggle("flexbox");
    div2.classList.toggle("hidden");

});