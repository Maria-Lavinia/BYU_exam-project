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
    name: "Kit1",
    img: "img/DIYJewelryKit_530x@2x.jpg",
    price: "DKK200",
    description: "This is the description of the kit",
    components: "Scissors, wire, wax",
    delivery: "2-3 days",
    itemInCart: false,
  },
  {
    id: "1",
    name: "Kit2",
    img: "img/DIYJewelryKit_530x@2x.jpg",
    price: "DKK300",
    description: "Another description",
    components: "String, more wax, sparkles",
    delivery: "3-4 days",
    itemInCart: false,
  },
  {
    id: "2",
    name: "Kit3",
    img: "img/DIYJewelryKit_530x@2x.jpg",
    price: "DKK670",
    description: "Some other description",
    components: "",
    delivery: "",
    itemInCart: false,
  },
  {
    id: "3",
    name: "Kit4",
    img: "img/DIYJewelryKit_530x@2x.jpg",
    price: "DKK560",
    description: "Lalala description",
    components: "",
    delivery: "",
    itemInCart: false,
  },
  {
    id: "4",
    name: "Kit5",
    img: "img/DIYJewelryKit_530x@2x.jpg",
    price: "DKK300",
    description: "The last description",
    components: "",
    delivery: "",
    itemInCart: false,
  },
];

// data.forEach(showProduct);

// function showProduct(data) {
//   // select the template
//   const template = document.querySelector(".template").content;
//   //   clone it
//   const clone = template.cloneNode(true);
//   //   change the content
//   clone.querySelector(".product-title h3").textContent = data.name;
//   clone.querySelector(".product-photo").src = data.img;
//   clone.querySelector(".product-title h4").textContent = data.price;
//   clone.querySelector(".product-description .description").textContent =
//     data.description;
//   clone.querySelector(".product-description .components").textContent =
//     "Components: " + data.components;
//   //   append it
//   const parent = document.querySelector("#products");
//   parent.appendChild(clone);
// }

//showing the data dynamicaly in the shop
// data.forEach(showProduct);
// function showProduct(data) {
// const product1 = document.getElementById("1");
// const product0 = document.getElementById("0");
// console.log(product0);
// product1.querySelector(".product-title h3").textContent = data.name;
// product1.querySelector(".product-photo").src = data.img;
// product1.querySelector(".product-title h4").textContent = data.price;
// product1.querySelector(".product-description .description").textContent =
//   data.description;
// product1.querySelector(".product-description .components").textContent =
//   "Components: " + data.components;
//   product0.querySelector(".product-title h3").textContent = data.name;
//   product0.querySelector(".product-photo").src = data.img;
//   product0.querySelector(".product-title h4").textContent = data.price;
//   product0.querySelector(".product-description .description").textContent =
//     data.description;
//   product0.querySelector(".product-description .components").textContent =
//     "Components: " + data.components;
// }
// data.forEach(showProduct:(value: {
//   id:
// }));
// function showProduct(data) {
//   const product = document.querySelector(".card-item");
//   product.querySelector(".product-title h3").textContent = data.name;
//   product.querySelector(".product-photo").src = data.img;
//   product.querySelector(".product-title h4").textContent = data.price;
//   product.querySelector(".product-description .description").textContent =
//     data.description;
//   document.querySelector(".product-description .components").textContent =
//     "Components: " + data.components;
// }

//--------------------------------------------------------------THIS WAS GOOD
let cartList = []; //array to store cartlist
var i;
//the whole product
var detail = document.getElementsByClassName("product-text");
//details about the product
var imgProduct = document.getElementsByClassName("product-photo");
var titleProduct = document.getElementsByClassName("product-title");
var priceProduct = document.getElementsByClassName("priceProduct");
var descriptionProduct = document.getElementsByClassName("description");
var componentsProduct = document.getElementsByClassName("components");
// the basket page did not really use
var basketPage = document.getElementById("basket");
//-----------------------------------------------------------------------------------------
// data.forEach(showProduct);
// function showProduct(data) {
//   var getId;
//   document.getElementById("shoppage").style.display = "block";
//   getId = detail.parentNode.id;
//   console.log(this);
//   imgProduct.src = data[getId].img;
// }
// var back = document.getElementById("back");
// back.addEventListener("click", refreshPage); // click events to go home page did not do it yet nu cred ca avem
//---------------------------------------------------------------------------------------
// buttons
var addToCartBtn = document.querySelectorAll("#add-to-cart"); //butonul de add to cart
var basket = document.getElementById("basket-icon");
basket.addEventListener("click", displayCart);

// addToCartBtn.addEventListener("click", () => addToCart(getId));

// -----------------------------------------------------------THIS WAS GOOD
for (i = 0; i < data.length; i++) {
  addToCartBtn[i].addEventListener("click", addToCart);
}
var getId;
var homeFromCart = document.querySelector(".logonav");
homeFromCart.addEventListener("click", hideCart); //event listener to hide card page and return to home page;
//----------------------------------------------------------------------------------------------------------------------------
// document.addEventListener("DOMContentLoaded", function (data) {
//   var getId;
//   document.getElementById("shoppage").style.display = "block";
//   getId = this.parentNode.id;
//   console.log(this);
//   imgProduct.src = data[getId].img;
// });

// click events on dynamically created elements to remove items from list

document.addEventListener("click", function (e) {
  if (e.target.id == "remove") {
    var itemId = e.target.parentNode.id;
    removeFromCart(itemId);
  }
});
//click event to add items to cart from button add to cart button
addToCartBtn.forEach((val) =>
  val.addEventListener("click", () => addToCart(val.parentNode.id))
);
//-----------------------------------------------------------------------------------------------
// addToCartBtn.addEventListener("click", addToCart(val.parentNode.id));
//add items to cart function

//tHIS WAS GOOD-------------------------------------------------------------------------------------
function addToCart(id) {
  if (!data[id].itemInCart.val) {
    console.log(!data[id]);
    cartList = [...cartList, data[id]];
    addItem();
    alert("Items added to your cart");
  } else {
    console.log(!data[id].itemInCart);
    alert("item is already there");
  }
  data[id].itemInCart = true;
}
function hideCart() {
  document.getElementById("shoppage").style.display = "block";
  document.getElementById("basket").style.display = "none";
}
function displayCart() {
  document.getElementById("basket").style.display = "block";
  document.getElementById("shoppage").style.display = "none";
  if (cartList.length == 0) {
    document.getElementById("cart-with-items").style.display = "none";
    document.getElementById("empty-cart").style.display = "block";
  } else {
    document.getElementById("empty-cart").style.display = "none";
    document.getElementById("cart-with-items").style.display = "block";
  }
}
var totalAmount;
var totalItems;
// var totalSavings;

function addItem() {
  totalAmount = 0;
  totalItems = 0;
  // totalSavings = 0;
  var clrNode = document.getElementsByClassName("productcontainer");
  clrNode.innerHTML = "";
  // console.log(clrNode.childNodes);
  cartList.map((data) => {
    var cartCont = document.getElementsByClassName("productcontainer");
    totalAmount = totalAmount + data.price;
    totalItems = totalItems + 1;

    var tempCart = document.createElement("div");
    tempCart.setAttribute("class", "cart-list");
    tempCart.setAttribute("id", data.id);

    var listImg = document.createElement("img");
    listImg.setAttribute("id", "list-img");
    listImg.src = data.img;
    tempCart.appendChild(listImg);

    var listName = document.createElement("h3");
    listName.setAttribute("class", "list-name");
    listName.innerHTML = data.name;
    tempCart.appendChild(listName);

    var listPay = document.createElement("h3");
    listPay.setAttribute("class", "pay");
    listPay.innerHTML = data.price;
    tempCart.appendChild(listPay);
    //---------------------------------------------------------------------------------------------------------------
    // var listQuantity = document.createElement("h3");
    // listQuantity.setAttribute("class", "quantity");
    // listQuantity.innerHTML = "1";
    // tempCart.appendChild(listQuantity);
    //tHIS WAS GOOD-------------------------------------------------------------------------------------
    var listTrash = document.createElement("i");
    listTrash.setAttribute("class", "fa fa-trash");
    listTrash.setAttribute("id", "remove");
    tempCart.appendChild(listTrash);

    cartCont.appendChild(tempCart);
  });
  document.getElementsByClassName("totalprice").innerHTML =
    "total:Dkk" + totalAmount;
  document.getElementsByClassName("totalcontainer").style.display = "block";
}
