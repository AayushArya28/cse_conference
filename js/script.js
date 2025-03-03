function loadFooter() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footerContainer').innerHTML = data;
    })
    .catch(err => console.error('Error loading footer:', err));
}

loadFooter();

document.addEventListener("DOMContentLoaded", function() {
    const ham = document.getElementById("mobile-menu");
    const ham1 = document.getElementById("ham-nav-1");
    if (ham && ham1) {
        ham.addEventListener("click", function(e) {
            ham1.classList.toggle("flexbox");
            ham1.classList.toggle("hidden");
        });
    }

    const cross = document.getElementById("close");
    if (cross && ham1) {
        cross.addEventListener("click", function(e) {
            ham1.classList.toggle("flexbox");
            ham1.classList.toggle("hidden");
        });
    }

    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }

    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });

    setInterval(function() {
        plusSlides(1);
    }, 2000); // Change image every 2 seconds
});