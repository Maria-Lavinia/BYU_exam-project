var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const navToggle = document.querySelector(".nav-toggle");
const categories = document.querySelector(".nav-categories");
navToggle.addEventListener("click", function () {
  categories.classList.toggle("show-categories");
});

/*newsletter*/
const searchParams = new URLSearchParams(window.location.search);

fetch("https://kea21s-5d8f.restdb.io/rest/newsletter", {
  method: "GET",
  headers: {
    "x-apikey": "606d5ed3f553500431007503",
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
const form = document.querySelector("#theform");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const payload = {
    email: form.elements.email.value,
    username: form.elements.name.value,
  };
  document.querySelector("input[type=submit]").disabled = true;
  console.log(payload);
  fetch(`https://kea21s-5d8f.restdb.io/rest/newsletter`, {
    method: "POST",
    headers: {
      "x-apikey": "606d5ed3f553500431007503",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
  document.querySelector("input[type=submit]").disabled = false;
  form.elements.email.value = "";
  form.elements.name.value = "";
}
