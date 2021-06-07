document.querySelector(".second").addEventListener("click", godelivery);
function godelivery() {
  window.location.href = "delivery.html";
}

document.querySelector(".third").addEventListener("click", goconfirm);
function goconfirm() {
  window.location.href = "confirm.html";
}

//------------------- displaying cart -------------
document.querySelector(".first").addEventListener("click", displayShop);
function displayShop() {
  window.location.href = "basket.html";
}

//------------- navigation
const navToggle = document.querySelector(".nav-toggle");
const categories = document.querySelector(".nav-categories");
navToggle.addEventListener("click", function () {
  categories.classList.toggle("show-categories");
});

document.querySelector("#logonav").addEventListener("click", function () {
  window.location.href = "index.html";
});
