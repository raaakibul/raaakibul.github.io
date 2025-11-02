document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const courseCards = document.querySelectorAll(".course-card");

  // Create notification element
  const notification = document.createElement("div");
  notification.className = "notification";
  document.body.appendChild(notification);

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Get the category to filter
      const category = this.getAttribute("data-category");

      // Apply filter - show/hide cards immediately
      courseCards.forEach((card) => {
        if (
          category === "all" ||
          card.getAttribute("data-category") === category
        ) {
          // Show card
          card.classList.remove("hide");
        } else {
          // Hide card immediately
          card.classList.add("hide");
        }
      });
    });
  });

  // Certificate button functionality
  const certificateButtons = document.querySelectorAll(".certificate-btn");

  certificateButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const courseName = this.getAttribute("data-course");

      // Show notification
      notification.innerHTML = `<strong>Certificate:</strong><br>${courseName}`;
      notification.classList.add("show");

      // Hide notification after 3 seconds
      setTimeout(() => {
        notification.classList.remove("show");
      }, 3000);
    });
  });
});
