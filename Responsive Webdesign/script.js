"use strict";
/*Eventlistener Burger menu*/
const menuBtn = document.querySelector(".icon");
let menuOpen = flase;
menuBtn.addEventListener("click", () => {
  if(!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen= true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen =false;
  }
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


