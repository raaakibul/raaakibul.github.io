const researchPosts = [
  {
    title: "Paper Title: Locally Adaptive Conformal Inference for Operator Models",
    authors: "Author: Trevor A. Harris and Yan Liu",
    summary: `This paper introduces a new framework called Local Spectral Conformal Inference (LSCI) that provides distribution-free, locally adaptive uncertainty quantification specifically for neural operator (NO) models. It’s the first method designed to capture localized predictive uncertainty in operator learning, which is especially important for applications like approximating partial differential equations (PDEs) and weather forecasting.`,
    paperLink: "https://arxiv.org/pdf/2507.20975",
    keyContributions: `
      <h2>Key Contributions:</h2>
      <p><b>A New Uncertainty Quantification Approach:</b> LSCI blends projection-based depth measures (called Φ-depths) with localized conformal inference techniques to create prediction sets that adapt to local changes in the data, delivering function-valued uncertainty bands that respond to varying behavior. <br>

      <b>Strong Theoretical Guarantees:</b> The authors prove that LSCI achieves approximate finite-sample coverage under a new, more flexible assumption called local exchangeability. This is a relaxed version of the classical exchangeability assumption used in conformal methods, broadening its applicability. <br>

      <b>Efficient Sampling Algorithm:</b> They propose a practical algorithm to generate ensembles and prediction bands from LSCI, making the method feasible and efficient for real-world operator learning tasks. <br>

      <b>Empirical Validation: </b> Through both synthetic tests and real-world experiments, LSCI consistently outperforms existing conformal inference approaches and other uncertainty quantification techniques used for operator models—delivering better coverage, adaptivity, and computational efficiency.
      </p>

      <h2>Impact of this paper:</h2>
      <ol>
        <li>Advancing Scientific Machine Learning: LSCI offers trustworthy uncertainty estimates for black-box operator models widely used in climate science, medical imaging, and large-scale physics simulations.</li>
        <li>Supporting Safer Model Deployment: By providing reliable confidence measures, LSCI helps ensure neural operators can be safely used in high-stakes environments where understanding prediction certainty is crucial.</li>
        <li>Laying the Groundwork for Future Research: This work opens up exciting new directions for probabilistic operator learning, adaptive uncertainty quantification, and function-valued prediction methods, especially in situations involving distribution shifts.</li>
      </ol>

      <h2>Three strong points of this paper:</h2>
      <ol>
        <li>Novel and Reliable Uncertainty Quantification for Neural Operators: This paper presents LSCI, a groundbreaking method that offers distribution-free, function-valued uncertainty estimates for black-box neural operator models. Unlike traditional neural operators, which typically don’t provide reliable uncertainty measures, LSCI delivers calibrated predictions—marking a major step forward in trustworthy operator learning.</li>
        
        <li>Strong Theory Meets Practical Usability: LSCI is backed by solid theory, built on the concepts of local exchangeability and Φ-depth-based conformal inference, ensuring finite-sample coverage guarantees. What’s impressive is that despite this theoretical depth, the method is efficient and scalable, making it well-suited for real-world applications that demand both speed and reliability.</li>

        <li>Thorough Testing Across Real-World Domains: The approach is validated on a range of synthetic and real-world datasets, including applications like weather forecasting, energy demand prediction, and air quality modeling. In every case, LSCI outperforms existing methods—offering narrower prediction bands, better adaptation to local data patterns, and stronger risk control. This shows not only its robustness but also its versatility across diverse tasks.</li>
      </ol>

      <h2>Three weak points of this paper:</h2>
      <ol>
        <li>Computational Overhead at Test Time: While LSCI offers strong theoretical guarantees, its reliance on localization and rejection-based sampling during inference adds notable computational cost. This can become a bottleneck, especially for large-scale or real-time applications, potentially limiting its practicality in scenarios where speed is critical.</li>
        
        <li>Sensitivity to Bandwidth Parameter: LSCI’s performance heavily depends on the choice of the localization bandwidth parameter (λ). Although cross-validation helps tune this parameter, there’s no principled or automated way to choose the optimal value. This sensitivity may affect generalization and make the method harder to deploy across varied datasets without manual tuning.</li>

        <li>Limited Support for Complex Output Structures: The current version of LSCI is designed for scalar or function-valued outputs, but it doesn't extend naturally to multivariate functional outputs—such as spatiotemporal data with multiple channels. Supporting these more complex structures would require significant modifications, limiting LSCI’s applicability in many real-world operator learning problems involving rich, structured outputs.</li>
      </ol>

      <h2>Potential ideas for future work based on this paper.</h2>
      <ul>
        <li>Speeding Up with Amortized Inference:To make LSCI suitable for real-time or online use, one promising direction is to develop amortized or neural approximations that can bypass the expensive sampling and localization steps at test time. This could make conformal prediction for neural operators fast enough for high-throughput applications.</li>
        <li>Smarter Projection Operators: The current method relies on fixed projection strategies (like random or Fourier-based ones), but there's potential in making this more adaptive and data-driven. For example, using attention mechanisms or learned basis functions could improve how Φ-depths capture the structure of the data, making predictions more accurate and locally adaptive.</li>
        <li>Handling Complex, Multi-Channel Outputs: LSCI currently focuses on single-output or function-valued data. Extending it to handle multivariate outputs—like climate data with multiple interacting variables—would require developing joint conformity scores or hierarchical depth models. This would open doors to using LSCI in more complex scientific and engineering tasks.</li>
      </ul>

      <h2>Questions</h2>
      <ul>
        <li>How sensitive is LSCI to the choice of the projection class Φ? Although the paper shows different projection families perform similarly, could there be cases where this choice significantly affects coverage or efficiency?</li>
        
      </ul>
    `
  },
  {
    title: "Paper Title: Locally Adaptive Conformal Inference for Operator Models",
    authors: "Author: Trevor A. Harris and Yan Liu",
    summary: `This paper introduces a new framework called Local Spectral Conformal Inference (LSCI) that provides distribution-free, locally adaptive uncertainty quantification specifically for neural operator (NO) models. It’s the first method designed to capture localized predictive uncertainty in operator learning, which is especially important for applications like approximating partial differential equations (PDEs) and weather forecasting.`,
    paperLink: "https://arxiv.org/pdf/2507.20975",
    keyContributions: `
      <h2>Key Contributions:</h2>
      <p><b>A New Uncertainty Quantification Approach:</b> LSCI blends projection-based depth measures (called Φ-depths) with localized conformal inference techniques to create prediction sets that adapt to local changes in the data, delivering function-valued uncertainty bands that respond to varying behavior. <br>

      <b>Strong Theoretical Guarantees:</b> The authors prove that LSCI achieves approximate finite-sample coverage under a new, more flexible assumption called local exchangeability. This is a relaxed version of the classical exchangeability assumption used in conformal methods, broadening its applicability. <br>

      <b>Efficient Sampling Algorithm:</b> They propose a practical algorithm to generate ensembles and prediction bands from LSCI, making the method feasible and efficient for real-world operator learning tasks. <br>

      <b>Empirical Validation: </b> Through both synthetic tests and real-world experiments, LSCI consistently outperforms existing conformal inference approaches and other uncertainty quantification techniques used for operator models—delivering better coverage, adaptivity, and computational efficiency.
      </p>

      <h2>Impact of this paper:</h2>
      <ol>
        <li>Advancing Scientific Machine Learning: LSCI offers trustworthy uncertainty estimates for black-box operator models widely used in climate science, medical imaging, and large-scale physics simulations.</li>
        <li>Supporting Safer Model Deployment: By providing reliable confidence measures, LSCI helps ensure neural operators can be safely used in high-stakes environments where understanding prediction certainty is crucial.</li>
        <li>Laying the Groundwork for Future Research: This work opens up exciting new directions for probabilistic operator learning, adaptive uncertainty quantification, and function-valued prediction methods, especially in situations involving distribution shifts.</li>
      </ol>

      <h2>Three strong points of this paper:</h2>
      <ol>
        <li>Novel and Reliable Uncertainty Quantification for Neural Operators: This paper presents LSCI, a groundbreaking method that offers distribution-free, function-valued uncertainty estimates for black-box neural operator models. Unlike traditional neural operators, which typically don’t provide reliable uncertainty measures, LSCI delivers calibrated predictions—marking a major step forward in trustworthy operator learning.</li>
        
        <li>Strong Theory Meets Practical Usability: LSCI is backed by solid theory, built on the concepts of local exchangeability and Φ-depth-based conformal inference, ensuring finite-sample coverage guarantees. What’s impressive is that despite this theoretical depth, the method is efficient and scalable, making it well-suited for real-world applications that demand both speed and reliability.</li>

        <li>Thorough Testing Across Real-World Domains: The approach is validated on a range of synthetic and real-world datasets, including applications like weather forecasting, energy demand prediction, and air quality modeling. In every case, LSCI outperforms existing methods—offering narrower prediction bands, better adaptation to local data patterns, and stronger risk control. This shows not only its robustness but also its versatility across diverse tasks.</li>
      </ol>

      <h2>Three weak points of this paper:</h2>
      <ol>
        <li>Computational Overhead at Test Time: While LSCI offers strong theoretical guarantees, its reliance on localization and rejection-based sampling during inference adds notable computational cost. This can become a bottleneck, especially for large-scale or real-time applications, potentially limiting its practicality in scenarios where speed is critical.</li>
        
        <li>Sensitivity to Bandwidth Parameter: LSCI’s performance heavily depends on the choice of the localization bandwidth parameter (λ). Although cross-validation helps tune this parameter, there’s no principled or automated way to choose the optimal value. This sensitivity may affect generalization and make the method harder to deploy across varied datasets without manual tuning.</li>

        <li>Limited Support for Complex Output Structures: The current version of LSCI is designed for scalar or function-valued outputs, but it doesn't extend naturally to multivariate functional outputs—such as spatiotemporal data with multiple channels. Supporting these more complex structures would require significant modifications, limiting LSCI’s applicability in many real-world operator learning problems involving rich, structured outputs.</li>
      </ol>

      <h2>Potential ideas for future work based on this paper.</h2>
      <ul>
        <li>Speeding Up with Amortized Inference:To make LSCI suitable for real-time or online use, one promising direction is to develop amortized or neural approximations that can bypass the expensive sampling and localization steps at test time. This could make conformal prediction for neural operators fast enough for high-throughput applications.</li>
        <li>Smarter Projection Operators: The current method relies on fixed projection strategies (like random or Fourier-based ones), but there's potential in making this more adaptive and data-driven. For example, using attention mechanisms or learned basis functions could improve how Φ-depths capture the structure of the data, making predictions more accurate and locally adaptive.</li>
        <li>Handling Complex, Multi-Channel Outputs: LSCI currently focuses on single-output or function-valued data. Extending it to handle multivariate outputs—like climate data with multiple interacting variables—would require developing joint conformity scores or hierarchical depth models. This would open doors to using LSCI in more complex scientific and engineering tasks.</li>
      </ul>

      <h2>Questions</h2>
      <ul>
        <li>How sensitive is LSCI to the choice of the projection class Φ? Although the paper shows different projection families perform similarly, could there be cases where this choice significantly affects coverage or efficiency?</li>
        
      </ul>
    `
  },
   
];

// Render post cards on main page
function renderPostsList() {
  const postsList = document.getElementById("posts-list");
  postsList.innerHTML = "";
  researchPosts.forEach((post, idx) => {
    const div = document.createElement("div");
    div.className = "paper-card";
    div.innerHTML = `
      <div class="paper-card-header">
        <div class="paper-title" tabindex="0">${post.title}</div>
        <div class="authors" tabindex="0">${post.authors}</div>
      </div>
      <div class="paper-card-abstract">${post.summary}</div>
      <div class="paper-card-btns">
        <button class="read-post-btn" data-idx="${idx}" aria-label="Read full post for ${post.title}">Read Full Post</button>
        <a 
          class="paper-link-btn" 
          href="${post.paperLink}" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Open paper link for ${post.title}">
          Paper Link
        </a>
      </div>
    `;
    postsList.appendChild(div);
  });

  // Add event listener for all Read Full Post buttons
  document.querySelectorAll(".read-post-btn").forEach((btn) => {
    btn.onclick = function () {
      const idx = this.getAttribute("data-idx");
      showFullPost(idx);
    };
  });
}

// Show modal with full post content
function showFullPost(idx) {
  const post = researchPosts[idx];
  const modal = document.getElementById("post-modal");
  const modalContent = document.getElementById("modal-content");

  // Modal content including "Go Back" button to close modal
  modalContent.innerHTML = `
    <h1 id="modal-post-title" class="modal-title" tabindex="0">${post.title}</h1>
    <div class="modal-authors">${post.authors}</div>
    <div class="modal-body">${post.summary}</div>
    <div class="modal-body">${post.keyContributions}</div>
    <button class="paper-link-btn" id="modal-go-back-btn">Go Back</button>
  `;

  // Add event listener for Go Back button inside modal
  document.getElementById("modal-go-back-btn").onclick = () => {
    closeModal();
  };

  document.body.classList.add("modal-open");
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.add("show");
    document.getElementById("modal-post-title").focus();
  }, 15);
}

// Close modal handler
function closeModal() {
  const modal = document.getElementById("post-modal");
  modal.classList.remove("show");
  document.body.classList.remove("modal-open");
  setTimeout(() => modal.classList.add("hidden"), 180);
}

document.getElementById("modal-close-btn").onclick = () => {
  closeModal();
};

// Close modal if user clicks outside modal content
document.getElementById("post-modal").addEventListener("click", (evt) => {
  if (evt.target.id === "post-modal") {
    closeModal();
  }
});

// Sidebar toggle for small screens
const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// Close sidebar on click outside (mobile)
document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 900 &&
    sidebar.classList.contains("open") &&
    !sidebar.contains(e.target) &&
    e.target !== toggleBtn
  ) {
    sidebar.classList.remove("open");
  }
});

renderPostsList();