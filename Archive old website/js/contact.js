document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").classList.add("show");
  this.reset();

  setTimeout(function () {
    document.getElementById("formMessage").classList.remove("show");
  }, 5000);
});