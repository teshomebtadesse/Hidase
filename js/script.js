// Hamburger toggle
function toggleSidenav() {
    document.getElementById('sidenav').classList.toggle('active');
}

let slideIndex = 0;
let slides = document.querySelectorAll('.slides');
let dots = document.querySelectorAll('.dot');
let slideshowInterval;

// Show initial slide
showSlide(slideIndex);

// Auto-play every 5 seconds
startSlideshow();

function showSlide(index) {
  // Wrap around if out of bounds
  if (index >= slides.length) slideIndex = 0;
  else if (index < 0) slideIndex = slides.length - 1;
  else slideIndex = index;

  // Hide all slides
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // Show current slide
  slides[slideIndex].classList.add('active');

  // Update dots (optional)
  if (dots.length > 0) {
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[slideIndex % dots.length]) {
      dots[slideIndex % dots.length].classList.add('active');
    }
  }
}

function plusSlides(n) {
  showSlide(slideIndex + n);
}

function currentSlide(n) {
  showSlide(n - 1);
}

function startSlideshow() {
  slideshowInterval = setInterval(() => {
    plusSlides(1);
  }, 5000);
}

function pauseSlideshow() {
  clearInterval(slideshowInterval);
}

function resumeSlideshow() {
  startSlideshow();
}


// Side navbar link highlighting & section fade-in
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidenav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) link.classList.add('active');
    });

    // Fade-in sections
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) { section.classList.add('visible'); }
    });
});
