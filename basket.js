//------------------------ quantity buttons------------------
function inc() {
  let number = document.querySelector('[name="number"]');
  number.value = parseInt(number.value) + 1;
  console.log(number);
}

function dec() {
  let number = document.querySelector('[name="number"]');
  if (parseInt(number.value) > 0) {
    number.value = parseInt(number.value) - 1;
  }
}
document.querySelector(".first").addEventListener("click", gobasket);
function gobasket() {
  window.location.href = "basket.html";
}
document.querySelector(".second").addEventListener("click", godelivery);
function godelivery() {
  window.location.href = "delivery.html";
}

document.querySelector(".third").addEventListener("click", goconfirm);
function goconfirm() {
  window.location.href = "confirm.html";
}
//  ----------------nav
// const navToggle = document.querySelector(".nav-toggle");
// const categories = document.querySelector(".nav-categories");
// navToggle.addEventListener("click", function () {
//   categories.classList.toggle("show-categories");
// });
