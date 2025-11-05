// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");
const menuIcon = document.getElementById("menuIcon");

mobileMenuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("active");

  // Toggle between hamburger and close icon
  if (navMenu.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll("nav ul li > a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // Don't close if it's a dropdown toggle
    if (!link.parentElement.classList.contains("dropdown")) {
      navMenu.classList.remove("active");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });
});

// Add smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simple form validation
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    // Show success message
    document.getElementById("successMessage").style.display = "block";

    // Reset form
    this.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      document.getElementById("successMessage").style.display = "none";
    }, 5000);
  }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").classList.add("show");
  this.reset();

  setTimeout(function () {
    document.getElementById("formMessage").classList.remove("show");
  }, 5000);
});
