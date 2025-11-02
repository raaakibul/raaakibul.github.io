// Sample publication data with detailed content
const publications = [
  {
    title:
      "Paper Title: Locally Adaptive Conformal Inference for Operator Models",
    authors: "Author: Trevor A. Harris and Yan Liu",
    category: "papers",
    description: "Papers review ",
    tags: ["Machine Learning", "Efficiency"],
    content: `
                    <h3>Summary:</h3>
                    <p>This paper introduces a new framework called Local Spectral Conformal Inference (LSCI) that provides distribution-free, locally adaptive uncertainty quantification specifically for neural operator (NO) models. It’s the first method designed to capture localized predictive uncertainty in operator learning, which is especially important for applications like approximating partial differential equations (PDEs) and weather forecasting.</p>
                    <h3>Key Contributions:</h3>
                    <ul>
                        <li>
                        A New Uncertainty Quantification Approach: LSCI blends projection-based depth measures (called Φ-depths) with localized conformal inference techniques to create prediction sets that adapt to local changes in the data, delivering function-valued uncertainty bands that respond to varying behavior.
                        </li>

                        <li>
                        
                        Strong Theoretical Guarantees: The authors prove that LSCI achieves approximate finite-sample coverage under a new, more flexible assumption called local exchangeability. This is a relaxed version of the classical exchangeability assumption used in conformal methods, broadening its applicability.
                        
                        </li>
                        <li>
                        Efficient Sampling Algorithm:</b> They propose a practical algorithm to generate ensembles and prediction bands from LSCI, making the method feasible and efficient for real-world operator learning tasks.
                        </li>
                        <li>Empirical Validation: </b> Through both synthetic tests and real-world experiments, LSCI consistently outperforms existing conformal inference approaches and other uncertainty quantification techniques used for operator models—delivering better coverage, adaptivity, and computational efficiency.</li>
                    </ul>
                    <h3>Impact of this paper:</h3>
    
                    <ol>
                    <li>Advancing Scientific Machine Learning: LSCI offers trustworthy uncertainty estimates for black-box operator models widely used in climate science, medical imaging, and large-scale physics simulations.</li>
                    <li>Supporting Safer Model Deployment: By providing reliable confidence measures, LSCI helps ensure neural operators can be safely used in high-stakes environments where understanding prediction certainty is crucial.</li>
                    <li>Laying the Groundwork for Future Research: This work opens up exciting new directions for probabilistic operator learning, adaptive uncertainty quantification, and function-valued prediction methods, especially in situations involving distribution shifts.</li>
                    </ol>

                    <h3>Three strong points of this paper:</h3>
                  <ol>
                  <li>Novel and Reliable Uncertainty Quantification for Neural Operators: This paper presents LSCI, a groundbreaking method that offers distribution-free, function-valued uncertainty estimates for black-box neural operator models. Unlike traditional neural operators, which typically don’t provide reliable uncertainty measures, LSCI delivers calibrated predictions—marking a major step forward in trustworthy operator learning.</li>
                  <li>Strong Theory Meets Practical Usability: LSCI is backed by solid theory, built on the concepts of local exchangeability and Φ-depth-based conformal inference, ensuring finite-sample coverage guarantees. What’s impressive is that despite this theoretical depth, the method is efficient and scalable, making it well-suited for real-world applications that demand both speed and reliability.</li>

                  <li>Thorough Testing Across Real-World Domains: The approach is validated on a range of synthetic and real-world datasets, including applications like weather forecasting, energy demand prediction, and air quality modeling. In every case, LSCI outperforms existing methods—offering narrower prediction bands, better adaptation to local data patterns, and stronger risk control. This shows not only its robustness but also its versatility across diverse tasks.</li>
                  </ol>

                  <h3>Three weak points of this paper:</h3>
                  <ol>
                  <li>Computational Overhead at Test Time: While LSCI offers strong theoretical guarantees, its reliance on localization and rejection-based sampling during inference adds notable computational cost. This can become a bottleneck, especially for large-scale or real-time applications, potentially limiting its practicality in scenarios where speed is critical.</li>
        
                  <li>Sensitivity to Bandwidth Parameter: LSCI’s performance heavily depends on the choice of the localization bandwidth parameter (λ). Although cross-validation helps tune this parameter, there’s no principled or automated way to choose the optimal value. This sensitivity may affect generalization and make the method harder to deploy across varied datasets without manual tuning.</li>

                  <li>Limited Support for Complex Output Structures: The current version of LSCI is designed for scalar or function-valued outputs, but it doesn't extend naturally to multivariate functional outputs—such as spatiotemporal data with multiple channels. Supporting these more complex structures would require significant modifications, limiting LSCI’s applicability in many real-world operator learning problems involving rich, structured outputs.</li>
                  </ol>

                <h3>Potential ideas for future work based on this paper.</h3>
                <ul>
                <li>Speeding Up with Amortized Inference:To make LSCI suitable for real-time or online use, one promising direction is to develop amortized or neural approximations that can bypass the expensive sampling and localization steps at test time. This could make conformal prediction for neural operators fast enough for high-throughput applications.</li>
                <li>Smarter Projection Operators: The current method relies on fixed projection strategies (like random or Fourier-based ones), but there's potential in making this more adaptive and data-driven. For example, using attention mechanisms or learned basis functions could improve how Φ-depths capture the structure of the data, making predictions more accurate and locally adaptive.</li>
                <li>Handling Complex, Multi-Channel Outputs: LSCI currently focuses on single-output or function-valued data. Extending it to handle multivariate outputs—like climate data with multiple interacting variables—would require developing joint conformity scores or hierarchical depth models. This would open doors to using LSCI in more complex scientific and engineering tasks.</li>
                </ul>

                <h3>Questions</h3>
                <ul>
                  <li>How sensitive is LSCI to the choice of the projection class Φ? Although the paper shows different projection families perform similarly, could there be cases where this choice significantly affects coverage or efficiency?</li>
                  
                </ul>
                `,
  },
];

// DOM elements
const publicationsGrid = document.getElementById("publicationsGrid");
const categoryButtons = document.querySelectorAll(".category-btn");
const modal = document.getElementById("publicationModal");
const closeModal = document.getElementById("closeModal");
const backBtn = document.getElementById("backBtn");
const modalTitle = document.getElementById("modalTitle");
const modalAuthors = document.getElementById("modalAuthors");
const modalBody = document.getElementById("modalBody");

// Initialize the page
function init() {
  renderPublications("all");
  setupEventListeners();
}

// Render publications based on category
function renderPublications(category) {
  publicationsGrid.innerHTML = "";

  const filteredPublications =
    category === "all"
      ? publications
      : publications.filter((publication) => publication.category === category);

  filteredPublications.forEach((publication) => {
    const card = createPublicationCard(publication);
    publicationsGrid.appendChild(card);
  });
}

// Create a publication card element
function createPublicationCard(publication) {
  const card = document.createElement("div");
  card.className = "publication-card";

  card.innerHTML = `
                <div class="card-header">
                    <h3>${publication.title}</h3>
                    <div class="category">${publication.category}</div>
                </div>
                <div class="card-body">
                    <div class="card-authors">${publication.authors}</div>
                    <p>${publication.description}</p>
                </div>
                <div class="card-footer">
                    <div class="card-tags">
                        ${publication.tags
                          .map((tag) => `<span class="tag">${tag}</span>`)
                          .join("")}
                    </div>
                    <button class="view-btn" data-id="${publication.title}">
                        View <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            `;

  return card;
}

// Setup event listeners
function setupEventListeners() {
  // Category filter buttons
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active button
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter publications
      const category = button.getAttribute("data-category");
      renderPublications(category);
    });
  });

  // View button click event
  publicationsGrid.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("view-btn") ||
      e.target.parentElement.classList.contains("view-btn")
    ) {
      const button = e.target.classList.contains("view-btn")
        ? e.target
        : e.target.parentElement;
      const publicationId = button.getAttribute("data-id");
      showPublicationDetails(publicationId);
    }
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Back button click event
  backBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Show publication details in modal
function showPublicationDetails(publicationId) {
  const publication = publications.find((p) => p.title === publicationId);

  if (publication) {
    modalTitle.textContent = publication.title;
    modalAuthors.textContent = publication.authors;
    modalBody.innerHTML = publication.content;

    modal.style.display = "block";
  }
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", init);