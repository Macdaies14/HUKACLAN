const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.style.display = 'none';
});





// ==================== HAMBURGER MENU ===================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});






// ==================== GSAP ANIMATION ===================


var hero_tl = gsap.timeline();

  hero_tl.fromTo('.hero-img, .hero-text', 
  {
     opacity : 0,
     y : "5%"
  },

  {
    opacity : 1, 
    duration : 0.8,
    y : 0, 
    ease : "power1.in"
  }
);

 
// ==================== GSAP ANIMATION ===================


// --------------------------------------------------------


// ==================== TYPED ANIMATION ===================


const typed = new Typed('.typing-space', {
    strings: [' AN Experienced Frontend Developer', 'AN Experienced Frontend Developer', 'AN Experienced Frontend Developer'],
    loop : true,
    typeSpeed : 80,
    backSpeed : 40,
    cursorChar : '|',
    showCursor : true,
});

// ==================== TYPED ANIMATION ===================


// --------------------------------------------------------


// ==================== TILT ANIMATION ===================


$('.hero-img').tilt({
    perspective: 900,
});

// ==================== TILT ANIMATION ===================


// --------------------------------------------------------


// ==================== MARQUEE3K ANIMATION ===================

Marquee3k.init();


// ==================== MARQUEE3K ANIMATION ===================


// --------------------------------------------------------


// ==================== AOS ANIMATION ===================


AOS.init({
  easing : "ease-in-out",
  duration : 800,
});


// ==================== AOS ANIMATION ===================
  
// --------------------------------------------------------


// --------------------------------------------------------
