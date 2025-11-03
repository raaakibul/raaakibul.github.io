// Filter functionality
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const courseCards = document.querySelectorAll(".course-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const category = button.getAttribute("data-category");

      courseCards.forEach((card) => {
        if (
          category === "all" ||
          card.getAttribute("data-category") === category
        ) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
