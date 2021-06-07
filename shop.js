// window.addEventListener("load", iwantdata);

//------------- navigation
const navToggle = document.querySelector(".nav-toggle");
const categories = document.querySelector(".nav-categories");
navToggle.addEventListener("click", function () {
  categories.classList.toggle("show-categories");
});

//------------------ products data base
const data = [
  {
    id: "0",
    name: "Kit number 1",
    img: "img/DIYJewelryKit_530x@2x.jpg",
    price: 200,
    description: "This is the description of the kit",
    components: "Scissors, wire, wax",
    delivery: "2-3 days",
    itemInCart: false,
    deliveryprice: "35",
  },
  {
    id: "1",
    name: "Kit number 2",
    img: "img/adult-kit2-866x1024-2.jpg",
    price: "300",
    description: "Another description",
    components: "String, more wax, sparkles",
    delivery: "3-4 days",
    itemInCart: false,
    deliveryprice: "110",
  },
  {
    id: "2",
    name: "Kit number 3",
    img: "img/DIYJewelryKit_530x@2x.jpg",
    price: "670",
    description: "Some other description",
    components: "",
    delivery: "",
    itemInCart: false,
    deliveryprice: "35",
  },
  {
    id: "3",
    name: "Kit number 4",
    img: "img/adult-kit2-866x1024-2.jpg",
    price: "560",
    description: "Lalala description",
    components: "",
    delivery: "",
    itemInCart: false,
    deliveryprice: "110",
  },
  {
    id: "4",
    name: "Kit number 5",
    img: "img/DIYJewelryKit_530x@2x.jpg",
    price: "300",
    description: "The last description",
    components: "",
    delivery: "",
    itemInCart: false,
    deliveryprice: "110",
  },
];

////////////Productsss-------------------------------------------------------------------------------------

let cartList = []; //array to store cart lists

var i;
var detail = document.getElementsByClassName("readmore");
var detailsImg = document.getElementById("product-photo");
var detailTitle = document.getElementById("detail-title");
var detailPrice = document.getElementById("detail-price");

var detailsPage = document.getElementById("details-page");
var back = document.getElementById("buy");
back.addEventListener("click", refreshPage);
var addToCarts = document.querySelectorAll("#add-to-cart");
var cart = document.getElementById("basket-icon");

// click event to display cart page
cart.addEventListener("click", displayCart);

var carts = document.getElementById("carts");

//click events to add items to cart from details page
carts.addEventListener("click", () => addToCart(getId));
var home = document.getElementById("logonav");

//click event to hide cart page and return to home page
home.addEventListener("click", hideCart);
//events on dynamically created element to remove items from list
document.addEventListener("click", function (e) {
  if (e.target.id == "remove") {
    var itemId = e.target.parentNode.id;
    removeFromCart(itemId);
  }
});

//click event to display details page
for (i = 0; i < data.length; i++) {
  detail[i].addEventListener("click", handleDetail);
}

var getId;

//click events to add items to cart from home page cart icon
addToCarts.forEach((val) =>
  val.addEventListener("click", () => addToCart(val.parentNode.id))
);
// details function
function handleDetail(e) {
  detailsPage.style.display = "block";
  getId = this.parentNode.id;
  detailsImg.src = data[getId].img;
  detailTitle.innerHTML = data[getId].name;
  detailPrice.innerHTML = "Price : $ " + data[getId].price;
}

// add item to the cart
function addToCart(id) {
  if (!data[id].itemInCart) {
    cartList = [...cartList, data[id]];
    addItem();
    var confirmBox = document.getElementById("confirm");
    confirmBox.style.display = "block";

    var yes = document.getElementById("yes");
    yes.addEventListener("click", function () {
      confirmBox.style.display = "none";
    });

    // alert("item added to your cart");
  } else {
    var confirmBox = document.getElementById("readythere");
    confirmBox.style.display = "block";

    var already = document.getElementById("already");
    already.addEventListener("click", function () {
      confirmBox.style.display = "none";
    });
    // alert("your item is already there");
  }
  data[id].itemInCart = true;
}
//back to main page
function refreshPage() {
  detailsPage.style.display = "none";
}

// hide your cart page
function hideCart() {
  window.location.href = "index.html";
  document.getElementById("shoppage").style.display = "none";
  document.getElementById("basket").style.display = "none";
}

//display your cart page
function displayCart() {
  document.getElementById("shoppage").style.display = "none";
  document.getElementById("details-page").style.display = "none";
  document.getElementById("basket").style.display = "block";
  if (cartList.length == 0) {
    document.getElementById("cart-with-items").style.display = "none";
    document.getElementById("empty-cart").style.display = "block";
  } else {
    document.getElementById("empty-cart").style.display = "none";
    document.getElementById("cart-with-items").style.display = "felx";
  }
}

var totalAmount;
var totalItems;

//add item to the cart
function addItem() {
  totalAmount = 0;
  totalItems = 0;

  var clrNode = document.getElementById("productcontainer");
  clrNode.innerHTML = "";
  console.log(clrNode.childNodes);
  cartList.map((cart) => {
    var content = document.getElementById("cart-with-items");
    var cartCont = document.getElementById("productcontainer");
    var totalCont = document.getElementById("totalcontainer");
    totalAmount = cart.price;

    totalItems = totalItems + 1;

    var tempCart = document.createElement("div");
    tempCart.setAttribute("class", "cart-list");
    tempCart.setAttribute("id", cart.id);

    var containerinfo = document;
    var listImg = document.createElement("img");
    listImg.setAttribute("id", "list-img");
    listImg.src = cart.img;
    tempCart.appendChild(listImg);

    var listName = document.createElement("h3");
    listName.setAttribute("class", "list-name");
    listName.innerHTML = cart.name;
    tempCart.appendChild(listName);

    var listPay = document.createElement("h3");
    listPay.setAttribute("class", "pay");
    listPay.innerHTML = "Price:DKK " + cart.price;
    tempCart.appendChild(listPay);

    /////Quantityyyyyyy
    var labelQuantity = document.createElement("label");
    labelQuantity.setAttribute("for", "quantity");
    labelQuantity.setAttribute("class", "labelq");
    labelQuantity.innerHTML = "Quantity";
    var quantity = document.createElement("div");
    quantity.setAttribute("class", "quantity");
    quantity.setAttribute("id", "quantity");
    var buttond = document.createElement("button");
    buttond.setAttribute("onclick", "dec()");
    buttond.setAttribute("class", "minus");
    buttond.textContent = "-";
    var buttoni = document.createElement("button");
    buttoni.setAttribute("onclick", "inc()");
    buttoni.setAttribute("class", "plus");
    buttoni.textContent = "+";
    var numberq = document.createElement("input");
    numberq.setAttribute("type", "text");
    numberq.setAttribute("name", "number");
    numberq.setAttribute("value", "0");
    numberq.setAttribute("class", "numberq");

    quantity.appendChild(buttond);
    quantity.appendChild(numberq);
    quantity.appendChild(buttoni);

    tempCart.appendChild(labelQuantity);
    tempCart.appendChild(quantity);

    var listTrash = document.createElement("i");
    listTrash.setAttribute("class", "fa fa-trash ");
    listTrash.setAttribute("id", "remove");
    tempCart.appendChild(listTrash);

    cartCont.appendChild(tempCart);
    content.appendChild(cartCont);
    content.appendChild(totalCont);

    document.querySelector(".totalcontainer h2").textContent =
      "Total:DKK" + totalAmount;
    document.querySelector(".totalcontainer h3").textContent =
      "Delivery:DKK" + cart.deliveryprice;
  });

  document.getElementById("totalcontainer").style.display = "block";
}
function dec() {
  let number = document.querySelector('[name="number"]');
  if (parseInt(number.value) > 0) {
    number.value = parseInt(number.value) - 1;
  }
}
function inc() {
  let number = document.querySelector('[name="number"]');
  number.value = parseInt(number.value) + 1;
  console.log(number);
}
//remove item from the cart
function removeFromCart(itemId) {
  data[itemId].itemInCart = false;
  cartList = cartList.filter((list) => list.id != itemId);
  addItem();
  if (cartList.length == 0) {
    document.getElementById("cart-with-items").style.display = "none";
    document.getElementById("empty-cart").style.display = "block";
  }
}
