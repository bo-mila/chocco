
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



///////////////   SLIDER    //////////////////////////
const chocco = document.querySelector('.chocco');
const slider = document.querySelector('.slider');
let sliderItem = document.querySelectorAll('.slider__item');
const sliderLength = sliderItem.length;
const sliderArrowLeft = document.querySelector('.chocco__arrow--left');
const sliderArrowRight = document.querySelector('.chocco__arrow--right');

let sliderCopy = [];
for (let i = 0; i < sliderLength; i++) {
  sliderCopy[i] = sliderItem[i];
  sliderItem[i].remove();
}
let slideView = 1; //кол-во видимых слайдов
let slideNumberView = 0; //номер последнего видимого слайда

createSlider();

sliderArrowLeft.addEventListener('click', function(event) {
  event.preventDefault();
  left();
});
sliderArrowRight.addEventListener('click', function(event) {
  event.preventDefault();
  right();
});
chocco.addEventListener('click', function(event) {
  event.preventDefault();
});

function createSlider() {
  createSlideView();
  createSlideLeft();
  createSlideRight();
}

function createSlideView() {
  for (let i = slideNumberView; i < slideView; i++) {
    let li = document.createElement('li');
    li = sliderCopy[i];
    li.classList.add('slider__item');
    li.style.left = i * (100/slideView) + '%';
    slider.appendChild(li);
    
  }
  slideNumberView = slideView - 1;
}

function createSlideLeft() {
  let slideNumberLeft;
  if ((slideNumberView - slideView) < 0) {
    slideNumberLeft = sliderLength + (slideNumberView - slideView);
  } else {
    slideNumberLeft = slideNumberView - slideView;
  }
  let li = document.createElement('li');
  li = sliderCopy[slideNumberLeft];
  li.classList.add('slider__item');
  li.classList.add('left');
  li.style.left = -(100/slideView) + '%';
  slider.insertBefore(li, slider.firstElementChild);
}

function createSlideRight() {
  let slideNumberRight;
  if (slideNumberView === sliderLength - 1) {
    slideNumberRight = 0;
  } else {
    slideNumberRight = slideNumberView + 1;
  }
  let li = document.createElement('li');
  li = sliderCopy[slideNumberRight];
  li.classList.add('slider__item');
  li.classList.add('right');
  li.style.left = 100 + '%';
  slider.appendChild(li);
}

function left() {
  sliderArrowLeft.onclick = null;
  let sliderL = document.querySelectorAll('.slider__item');
  let offsetL = -1;
  for (let i = 0; i<slideView+2; i++) {
    sliderL[i].style.left = (offsetL*100 - 100)/slideView + "%";
    offsetL++;
  }
  slideNumberView++;
  if (slideNumberView == sliderLength) {
    slideNumberView = 0;
  }
  setTimeout(function () {
    sliderL[0].remove();
    createSlideRight();
    sliderArrowLeft.onclick = left;
  }, 600);
}
function right() {
  sliderArrowRight.onclick = null;
  let sliderR = document.querySelectorAll('.slider__item');
  let offsetR = (slideView+1);
  
  for (let i = (slideView+1); i>-1; i--) {
    sliderR[i].style.left = offsetR*100/slideView + '%';
    offsetR--;
  }
  slideNumberView--;
  if (slideNumberView < 0) {
    slideNumberView = (sliderLength - 1);
  }
  setTimeout(function() {
    sliderR[(slideView+1)].remove();
      createSlideLeft();
      sliderArrowRight.onclick = right;
  }, 600);
}







///////////////// FIXED-MENU  /////////////////////////////
$('.fixed-menu__item').on('click', function(e) {
  e.preventDefault();
  elem = e.target;
  let offset = 0;
  if (elem.classList.contains('scrollToFirst')) {
    offset = $('.first').offset().top;
  } else if (elem.classList.contains('scrollToWhy')) {
    offset = $('.why').offset().top;
  } else if (elem.classList.contains('scrollToChocco')) {
    offset = $('.chocco').offset().top;
  } else if (elem.classList.contains('scrollToTeam')) {
    offset = $('.team').offset().top;
  } else if (elem.classList.contains('scrollToMenu')) {
    offset = $('.menu').offset().top;
  } else if (elem.classList.contains('scrollToReviews')) {
    offset = $('.reviews').offset().top;
  } else if (elem.classList.contains('scrollToHow-work')) {
    offset = $('.how-work').offset().top;
  } else if (elem.classList.contains('scrollToOrder')) {
    offset = $('.order').offset().top;
  } else if (elem.classList.contains('scrollToContacts')) {
    offset = $('.contacts').offset().top;
  } else {
    return;
  }
  scrollToSection(offset);
});

function scrollToSection(offset) {
  $('html, body').animate({
    'scrollTop' : offset
  }, 1000);
  return;
}



////////////////////// SLIDE-SHOW //////////////////////
$('.reviews__item-btn').on('click', function(e) {
  if ($(this).hasClass('reviews__item-btn--active')) {
    return;
  }
  let temp = $('.reviews__item-btn').index(this);
  $('.reviews__item--active').removeClass('reviews__item--active');
  $('.reviews__item-btn--active').removeClass('reviews__item-btn--active');
  $('.reviews__item').eq(temp).addClass('reviews__item--active');
  $(this).addClass('reviews__item-btn--active');
});
// const reviewsItemBtn = document.querySelectorAll('.reviews__item-btn');
// const reviewsListBtns = document.querySelector('.reviews__list-btns');
// reviewsListBtns.addEventListener('click', function(e) {
//   reviewsItemBtn.forEach(i=0, i<reviewsItemBtn, i++){

//   };
//   console.log((e));
//   console.log(e.target.parentNode);
//   // console.log(reviewsItemBtn.indexOf(e.target));
//   // e.target.parentNode
//   // console.log([e.target.parentNode]);
// })