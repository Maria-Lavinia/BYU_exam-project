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


