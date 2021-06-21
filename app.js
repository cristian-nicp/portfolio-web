const navHamburger = document.querySelector(".nav-hamburger");
const navLinks = document.querySelector(".nav-links");//navMenu
const navUrl = document.querySelectorAll(".nav-links__url");//close menu on click
const navCto = document.querySelector(".nav-cto");

navHamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    navHamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
}

//close menu on linkclick
navUrl.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
    navHamburger.classList.remove("active");
    navLinks.classList.remove("active");
}
