// Abstract expand/collapse functionality
const expandBtns = document.querySelectorAll(".expand-btn");

expandBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const abstract = this.previousElementSibling.previousElementSibling;
    const gradient = this.previousElementSibling;

    if (abstract.classList.contains("collapsed")) {
      abstract.classList.remove("collapsed");
      abstract.classList.add("expanded");
      gradient.classList.add("hidden");
      this.classList.add("expanded");
      this.querySelector("span").textContent = "Read less";
    } else {
      abstract.classList.remove("expanded");
      abstract.classList.add("collapsed");
      gradient.classList.remove("hidden");
      this.classList.remove("expanded");
      this.querySelector("span").textContent = "Read more";
    }
  });
});