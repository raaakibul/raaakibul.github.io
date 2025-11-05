// Filter functionality for projects
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));

    // Add active class to clicked button
    this.classList.add("active");

    const filter = this.getAttribute("data-filter");

    // Show/hide project cards based on filter
    projectCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});
