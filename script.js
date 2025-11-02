document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");

    // Change icon between bars and times
    const icon = menuToggle.querySelector("i");
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");

      // Reset icon to bars
      const icon = menuToggle.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });

  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - header.offsetHeight,
          behavior: "smooth",
        });
      }
    });
  });
});
