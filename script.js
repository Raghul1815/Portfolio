// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Existing navigation active link code
const links = document.querySelectorAll('.nav a');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(el => el.classList.remove('active'));
    link.classList.add('active');
    
    // Close mobile menu after selection
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });
});