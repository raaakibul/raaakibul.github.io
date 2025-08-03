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

const categoryButtons = document.querySelectorAll(".category-btn");
const certificateCards = document.querySelectorAll(".certificate-card");

// Setup event listeners
function setupEventListeners() {
  // Category filter buttons
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active button
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter certificates
      const category = button.getAttribute("data-category");
      filterCertificates(category);
    });
  });
}

// Filter certificates based on category
function filterCertificates(category) {
  certificateCards.forEach((card) => {
    if (category === "all") {
      card.classList.remove("hidden");
    } else {
      const cardCategories = card.getAttribute("data-categories");
      if (cardCategories === category) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    }
  });
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", setupEventListeners);

// // Filter functionality
// const filterButtons = document.querySelectorAll(".filter-btn");
// const courseCards = document.querySelectorAll(".course-card");

// filterButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     // Remove active class from all buttons
//     filterButtons.forEach((btn) => btn.classList.remove("active"));
//     // Add active class to clicked button
//     button.classList.add("active");

//     const filter = button.getAttribute("data-filter");

//     courseCards.forEach((card) => {
//       if (filter === "all" || card.getAttribute("data-category") === filter) {
//         card.style.display = "flex";
//         // Add animation
//         setTimeout(() => {
//           card.style.opacity = "1";
//           card.style.transform = "scale(1)";
//         }, 10);
//       } else {
//         card.style.opacity = "0";
//         card.style.transform = "scale(0.8)";
//         setTimeout(() => {
//           card.style.display = "none";
//         }, 300);
//       }
//     });
//   });
// });

// // Dynamic card height adjustment for consistent alignment
// function adjustCardHeights() {
//   const infoCards = document.querySelectorAll(".info-card");
//   const courseCards = document.querySelectorAll(".course-card");

//   // Reset heights to auto to get natural height
//   infoCards.forEach((card) => {
//     card.style.height = "auto";
//   });

//   courseCards.forEach((card) => {
//     card.style.height = "auto";
//   });

//   // Find the maximum height for info cards
//   let maxInfoHeight = 0;
//   infoCards.forEach((card) => {
//     const height = card.offsetHeight;
//     if (height > maxInfoHeight) {
//       maxInfoHeight = height;
//     }
//   });

//   // Find the maximum height for course cards
//   let maxCourseHeight = 0;
//   courseCards.forEach((card) => {
//     const height = card.offsetHeight;
//     if (height > maxCourseHeight) {
//       maxCourseHeight = height;
//     }
//   });

//   // Set all cards to the maximum height
//   if (window.innerWidth > 768) {
//     infoCards.forEach((card) => {
//       card.style.height = `${maxInfoHeight}px`;
//     });

//     courseCards.forEach((card) => {
//       card.style.height = `${maxCourseHeight}px`;
//     });
//   }
// }

// // Adjust card heights on load and resize
// window.addEventListener("load", adjustCardHeights);
// window.addEventListener("resize", adjustCardHeights);
