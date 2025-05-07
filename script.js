// window.addEventListener("DOMContentLoaded", () => {
//   alert("👀✨ You are seeing my Portfolio ✨👨‍💻");
// });

window.addEventListener("DOMContentLoaded", () => {
  const messageDiv = document.getElementById("portfolio-message");
  messageDiv.textContent = "👀✨ You are seeing my Portfolio ✨👨‍💻";
  messageDiv.style.textAlign = "center";
  messageDiv.style.padding = "15px";
  messageDiv.style.fontSize = "1.2rem";
  messageDiv.style.backgroundColor = "#e0f7fa";
  messageDiv.style.color = "#111827";
  messageDiv.style.fontWeight = "bold";
});

// document.getElementById("portfolio-message").textContent = "👀✨ You are seeing my Portfolio ✨👨‍💻";

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
// Scroll animation function
// Scroll reveal animation
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  // Enhanced project card interactions
document.querySelectorAll('.project-card').forEach(card => {
  // Click effect
  card.addEventListener('click', function(e) {
      // Don't trigger if clicking on links
      if (e.target.tagName === 'A' || e.target.parentElement.tagName === 'A') {
          return;
      }
      this.classList.toggle('active');
  });

  // Touch devices hover simulation
  card.addEventListener('touchstart', function() {
      this.classList.add('hover-effect');
  });
  
  card.addEventListener('touchend', function() {
      setTimeout(() => {
          this.classList.remove('hover-effect');
      }, 500);
  });
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Show thank you message
  document.getElementById('thankYouMessage').style.display = 'block';
  
  // Reset form
  this.reset();
  
  // Hide message after 5 seconds (optional)
  setTimeout(function() {
      document.getElementById('thankYouMessage').style.display = 'none';
  }, 5000);
});
