const form = document.querySelector("form");

form.addEventListener("submit", userSubmitted);

function userSubmitted(evt) {
  evt.preventDefault();
  console.log(form.elements.fullname.value);
  console.log(form.elements.email.value);
  console.log(form.elements.com_content.value);

  const payload = {
    fullname: form.elements.fullname.value,
    email: form.elements.email.value,
    com_content: form.elements.com_content.value,
  };
  document.querySelector("input[type=submit]").disabled = true;

  fetch("https://kea2021-8b3d.restdb.io/rest/byu-exam-project", {
    method: "POST",
    headers: {
      "x-apikey": "606d5edcf553500431007504",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
      document.querySelector("input[type=submit]").disabled = false;
      form.elements.fullname.value = "";
      form.elements.email.value = "";
      form.elements.com_content.value = "";
      document.querySelector(".hidden-msg").classList.remove("hidden");
    })
    .catch((err) => {
      console.error(err);
    });
}

const navToggle = document.querySelector(".nav-toggle");
const categories = document.querySelector(".nav-categories");
navToggle.addEventListener("click", function () {
  categories.classList.toggle("show-categories");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
