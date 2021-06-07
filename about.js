document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const navToggle = document.querySelector(".nav-toggle");
const categories = document.querySelector(".nav-categories");
navToggle.addEventListener("click", function () {
  categories.classList.toggle("show-categories");
});