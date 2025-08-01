
// Form submission
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const loading = document.getElementById("loading");
const submitBtn = contactForm.querySelector(".btn-submit");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Show loading
  loading.style.display = "inline-block";
  submitBtn.disabled = true;

  // Simulate form submission
  setTimeout(() => {
    // Hide loading
    loading.style.display = "none";
    submitBtn.disabled = false;

    // Show success message
    successMessage.style.display = "block";

    // Reset form
    contactForm.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
  }, 1500);
});

// Smooth scroll for navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // Add your navigation logic here
  });
});

// Add hover effect to contact items
document.querySelectorAll(".contact-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.querySelector(".contact-icon").style.transform = "scale(1.1)";
  });

  item.addEventListener("mouseleave", function () {
    this.querySelector(".contact-icon").style.transform = "scale(1)";
  });
});

// Window resize handler
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    sidebar.classList.remove("active");
  }
});