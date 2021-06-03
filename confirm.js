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
