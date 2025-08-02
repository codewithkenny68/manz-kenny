
let currentSlide = 0;
const galleryImages = document.querySelectorAll('.gallery-grid img');

function showSlide(index) {
  galleryImages.forEach((img, i) => {
    img.style.display = (i === index) ? 'block' : 'none';
  });
}


function startSlider() {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % galleryImages.length;
    showSlide(currentSlide);
  }, 3000);
}


if (galleryImages.length > 0) {
  showSlide(0);
  startSlider();
}


const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  const name = form.querySelector('input[type="text"]');
  const email = form.querySelector('input[type="email"]');
  const message = form.querySelector('textarea');

  if (!name.value || !email.value || !message.value) {
    e.preventDefault();
    alert("Please fill out all fields.");
  } else if (!email.value.includes('@')) {
    e.preventDefault();
    alert("Enter a valid email address.");
  }
});


const fadeElements = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});


fadeElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transition = 'all 0.7s ease';
  el.style.transform = 'translateY(50px)';
});

const darkToggle = document.getElementById('darkModeToggle');

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'on');
    darkToggle.textContent = '☀️';
  } else {
    localStorage.setItem('darkMode', 'off');
    darkToggle.textContent = '🌙';
  }
});


window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'on') {
    document.body.classList.add('dark');
    darkToggle.textContent = '☀️';
  }
});

