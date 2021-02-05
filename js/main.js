
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuInput = document.querySelector(".hamburger-menu__input");

const hamburger = document.querySelector(".hamburger");

const headerContent = document.querySelector(".header__content");
const headerLogo = document.querySelector(".header__logo");

const team = document.querySelector(".team");
const teamItem = document.querySelectorAll(".team__item");
const teamItemLength = teamItem.length;

const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu__item");
const menuItemLength = menuItem.length;

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


/////////////// ACCO VERTICAL IN TEAM /////////////////////////
team.addEventListener("click", function(e) {
  e.preventDefault();
  for (let i=0; i<teamItemLength; i++) {
    teamItem[i].classList.remove('team__item--active');
  }
});
for (let i=0; i<teamItemLength; i++) {
  teamItem[i].addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (teamItem[i].classList.contains("team__item--active")) {
      teamItem[i].classList.remove("team__item--active");
    } else {
      for (let i=0; i<teamItemLength; i++) {
        teamItem[i].classList.remove("team__item--active");
      }
      teamItem[i].classList.add("team__item--active");
    }
  });
}



/////////////// ACCO HORIZONTAL IN MENU //////////////////////
menu.addEventListener("click", function(e) {
  e.preventDefault();
  for (let i=0; i<menuItemLength; i++) {
    menuItem[i].classList.remove('menu__item--active');
  }
});
for (let i=0; i<menuItemLength; i++) {
  menuItem[i].addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (menuItem[i].classList.contains("menu__item--active")) {
      menuItem[i].classList.remove("menu__item--active");
    } else {
      for (let i=0; i<menuItemLength; i++) {
        menuItem[i].classList.remove("menu__item--active");
      }
      menuItem[i].classList.add("menu__item--active");
    }
  });
}