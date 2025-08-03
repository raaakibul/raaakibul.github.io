
document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("active");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("formMessage").classList.add("show");
  this.reset();

  setTimeout(function () {
    document.getElementById("formMessage").classList.remove("show");
  }, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".info-card, .social-icon");
  cards.forEach((card) => {
    card.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      this.appendChild(ripple);

      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});