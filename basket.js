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
