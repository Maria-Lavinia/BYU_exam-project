$('.slide').hiSlide();

document.getElementById("button").addEventListener("click", submitForm);

function submitForm() {
    var reponse = document.getElementById("response");
    reponse.classList.remove("hidden");
    
    document.getElementById("name").value="";
    document.getElementById("email").value="";
};


 const navToggle = document.querySelector(".nav-toggle");
 const categories = document.querySelector(".nav-categories");
 navToggle. addEventListener("click", function() {
     categories.classList.toggle("show-categories");
 });

// navToggle.addEventListener("click", function () {
//   menu.classList.toggle("menu");
// });
// const navSlide = () => {
//     const burger = document.querySelector(".hamburger");
//     const nav = document.querySelector(".header-nav");
//     const navLinks = document.querySelectorAll(".header-nav a");
//     //toggle nav
//     burger.addEventListener("click", () => {
//         nav.classList.toggle("nav-active");

//     //animate links
//     navLinks.forEach((link, index) => {
//         if(link.style.animation) {
//             link.style.animation = ''
//         } else {
//             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
//     }
// });

//     //burger animation
//     burger.classList.toggle("toggle");
// });
// }

// navSlide();

