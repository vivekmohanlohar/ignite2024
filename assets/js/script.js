// Program to change navigation bar background on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// Loading animation for the page
var loaderImg = document.querySelector(".img");
var loader = document.querySelector(".loader");

window.addEventListener('load', hides);
function hides() {
  loader.classList.add("hide");
  loaderImg.classList.add("ImgNone");
}

// Side navigation toggle menu button Javascript
const Menu = document.querySelector(".nav__navigation");
const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle("menu-active");
  Menu.classList.toggle("active");
});

const nav = document.querySelector('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down, hide the navigation
    nav.classList.add('hidden');
    nav.classList.remove('visible');

    // Close the menu if open
    if (Menu.classList.contains("active")) {
      menuBtn.classList.remove("menu-active");
      Menu.classList.remove("active");
    }
  } else {
    // Scrolling up, show the navigation
    nav.classList.add('visible');
    nav.classList.remove('hidden');
  }

  lastScrollTop = currentScrollTop;
});

// Close menu when clicking outside of it
document.addEventListener('click', (event) => {
  const isMenuOpen = Menu.classList.contains('active');
  const isClickInsideMenu = Menu.contains(event.target);
  const isClickInsideButton = menuBtn.contains(event.target);

  if (isMenuOpen && !isClickInsideMenu && !isClickInsideButton) {
    menuBtn.classList.remove("menu-active");
    Menu.classList.remove("active");
  }
});



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}