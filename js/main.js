
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
hamburger.addEventListener('click', function(e) {
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
  hamburger.style.display = "none";
  headerContent.style.justifyContent = "space-between";
  headerLogo.style.opacity = "1";
  window.removeEventListener('scroll', noScroll);
  hamburgerMenu.click();
  setTimeout(function () {
    scrollToSection(offset);
  }, 200);
})




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




//////////////////  FORM  ///////////////////////////////
const form = document.querySelector('.form');
const buttonsRes = document.querySelector('.buttons__res');
const buttonsSub = document.querySelector('.buttons__sub');

buttonsRes.addEventListener('click', function(e) {
  e.preventDefault();
  form.reset();
});
buttonsSub.addEventListener('click', function(e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append('name', form.elements.name.value);
  formData.append('phone', form.elements.phone.value);
  formData.append('comment', form.elements.comment.value);
  formData.append('to', 'mi@gmail.com');

  if (validForm(form)) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(formData);
    xhr.addEventListener('load', () => {
      if ((xhr.response.status)|(xhr.response.status==0)) {
        overlayMessage(xhr.response.message);
        form.reset(); 
      }
    });
  }
});

function validForm(form) {
  let valid = true;

  if (!validField(form.elements.name)) {
    valid = false;
  }
  if (!validField(form.elements.phone)) {
    valid = false;
  }
  if (!validField(form.elements.comment)) {
    valid = false;
  }
  return valid;
}

function validField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}






/////////////////////  VALIDATION OF PHONE FIELD  /////////////////////
const formPhoneValid = document.querySelector('.phonevalid');
// let valueReturn = '';
// formPhoneValid.addEventListener('keydown', e => {
//   let keyName = e.key;
//   e.preventDefault();
//   if (((keyName >= '0' && keyName <= "9") || (keyName ==='-')) && (valueReturn.length < 16)) {
//     if (formPhoneValid.selectionStart != formPhoneValid.selectionEnd) {
//       formPhoneValid.setRangeText('');
//       valueReturn = formPhoneValid.value + keyName;
//     } else {
//       valueReturn = valueReturn + keyName;
//     }
//     return formPhoneValid.value = valueReturn;
//   } else {
//     if (keyName === "Backspace") {
//       if (formPhoneValid.selectionStart != formPhoneValid.selectionEnd) {
//         formPhoneValid.setRangeText('');
//         valueReturn = formPhoneValid.value;
//       } else {
//         valueReturn = valueReturn.substring(0,valueReturn.length - 1);
//       }
//       return formPhoneValid.value = valueReturn;
//     }
//   }
// });

formPhoneValid.addEventListener('keydown', function(e) {
  let isDigit = false;
  let isDash = false;
  let isControl = false;
  if (e.key >= 0 || e.key <= 9) {
    isDigit = true;
  }
  if (e.key == '-') {
    isDash = true;
  }
  if (e.key == 'ArrowLeft' ||
      e.key == 'ArrowRight' ||
      e.key == 'Backspace' ||
      e.key == 'Delete' ||
      e.key == 'Tab') {
    isControl = true;
  }
  if (!isDigit && !isDash && !isControl) {
    e.preventDefault();
  }
});






////////////////// OVERLAY  //////////////////////////
const template = document.querySelector('#overlayTemp').innerHTML;
const overlay = createOverlay(template);

function createOverlay(template) {
  let fragment = document.createElement('div');

  fragment.innerHTML = template;

  const overlayElement = fragment.querySelector('.overlay');
  const contentElement = fragment.querySelector('.overlay__content');
  const closeElement = fragment.querySelector('.overlay__close');

  overlayElement.addEventListener('click', function(e) {
    if (e.target === overlayElement) {
      closeElement.click();
      document.body.style.overflow = 'initial';
    }
  });
  closeElement.addEventListener('click', function(e) {
    document.body.removeChild(overlayElement);
    document.body.style.overflow = 'initial';
  });

  return {
    open() {
      document.body.appendChild(overlayElement);
    },
    close() {
      closeElement.click();
    },
    setContent(message) {
      contentElement.innerHTML = message;
    }
  };
}

function overlayMessage(message) {   //////вызывается из функции формы после прихода ответа
  overlay.open();
  overlay.setContent(message);
  document.body.style.overflow = 'hidden';
}