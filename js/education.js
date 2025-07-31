const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element);
});

// Filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const courseCards = document.querySelectorAll(".course-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    courseCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "flex";
        // Add animation
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 10);
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.8)";
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  });
});

// Add animation when cards come into view
// const observerOptions = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.style.opacity = 1;
//       entry.target.style.transform = "translateY(0)";
//       observer.unobserve(entry.target);
//     }
//   });
// }, observerOptions);

// document.querySelectorAll(".info-card, .course-card").forEach((card) => {
//   card.style.opacity = 0;
//   card.style.transform = "translateY(20px)";
//   card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
//   observer.observe(card);
// });

// Dynamic card height adjustment for consistent alignment
function adjustCardHeights() {
  const infoCards = document.querySelectorAll(".info-card");
  const courseCards = document.querySelectorAll(".course-card");

  // Reset heights to auto to get natural height
  infoCards.forEach((card) => {
    card.style.height = "auto";
  });

  courseCards.forEach((card) => {
    card.style.height = "auto";
  });

  // Find the maximum height for info cards
  let maxInfoHeight = 0;
  infoCards.forEach((card) => {
    const height = card.offsetHeight;
    if (height > maxInfoHeight) {
      maxInfoHeight = height;
    }
  });

  // Find the maximum height for course cards
  let maxCourseHeight = 0;
  courseCards.forEach((card) => {
    const height = card.offsetHeight;
    if (height > maxCourseHeight) {
      maxCourseHeight = height;
    }
  });

  // Set all cards to the maximum height
  if (window.innerWidth > 768) {
    infoCards.forEach((card) => {
      card.style.height = `${maxInfoHeight}px`;
    });

    courseCards.forEach((card) => {
      card.style.height = `${maxCourseHeight}px`;
    });
  }
}

// Adjust card heights on load and resize
window.addEventListener("load", adjustCardHeights);
window.addEventListener("resize", adjustCardHeights);
