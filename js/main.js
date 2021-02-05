
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuInput = document.querySelector(".hamburger-menu__input");
const hamburger = document.querySelector(".hamburger");
const headerContent = document.querySelector(".header__content");
const headerLogo = document.querySelector(".header__logo");

function noScroll() {
  window.scrollTo(0, 0);
}

/////////////// HAMBURGER ////////////////////////////////
hamburgerMenu.addEventListener('click', function(e) {
  e.preventDefault;
  if (hamburgerMenuInput.checked == true) {
    hamburger.style.display = "flex";
    headerContent.style.justifyContent = "flex-end";
    headerLogo.style.opacity = "0";
    window.addEventListener('scroll', noScroll); 
  } else {
    hamburger.style.display = "none";
    headerContent.style.justifyContent = "space-between";
    headerLogo.style.opacity = "1";
    window.removeEventListener('scroll', noScroll);
  }
});