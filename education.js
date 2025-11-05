// Filter functionality for courses
const filterBtns = document.querySelectorAll(".filter-btn");
const courseCards = document.querySelectorAll(".course-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));

    // Add active class to clicked button
    this.classList.add("active");

    const filter = this.getAttribute("data-filter");

    // Show/hide course cards based on filter
    courseCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});