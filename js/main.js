// ************/////
//HAMBURGER MENU //
// ************/////
const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
  hamburger.classList.toggle("rotate");
});

// ##################################//
// Remove hamburger menu on Scroll
// ####################################//
const mainHeader = document.querySelector(".main-header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    navUl.classList.remove("show");
    hamburger.classList.remove("rotate");
  }
  lastScrollY = window.scrollY;
});
