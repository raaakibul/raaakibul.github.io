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