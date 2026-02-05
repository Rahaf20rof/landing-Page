const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i"); 

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");


});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const ScrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...ScrollRevealOptions,
  origin: "right",

});
ScrollReveal().reveal(".header__content h2", {
  ...ScrollRevealOptions,
  delay: 500,

});

ScrollReveal().reveal(".header__content h1", {
  ...ScrollRevealOptions,
  delay: 1000,

});
ScrollReveal().reveal(".header__content p", {
  ...ScrollRevealOptions,
  delay: 1500,

});
ScrollReveal().reveal(".header__btn", {
  ...ScrollRevealOptions,
  delay: 2000,

});
ScrollReveal().reveal(".header__socials li", {
  ...ScrollRevealOptions,
  delay: 2500,
  interval: 500,

});