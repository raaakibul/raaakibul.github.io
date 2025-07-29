// Blog posts data
const blogPosts = [
  {
    title: "Paper Title: Locally Adaptive Conformal Inference for Operator Models",
    authors: "Trevor A. Harris and Yan Liu",
    summary:
      "This paper introduces a new framework called Local Spectral Conformal Inference (LSCI) that provides distribution-free, locally adaptive uncertainty quantification specifically for neural operator (NO) models. It’s the first method designed to capture localized predictive uncertainty in operator learning, which is especially important for applications like approximating partial differential equations (PDEs) and weather forecasting.",
    paperLink: "https://arxiv.org/pdf/2507.20975",
    keyContributions: [
      "<u>A New Uncertainty Quantification Approach:</u> LSCI blends projection-based depth measures (called Φ-depths) with localized conformal inference techniques to create prediction sets that adapt to local changes in the data, delivering function-valued uncertainty bands that respond to varying behavior.<br>",
      
      "<u>Strong Theoretical Guarantees:</u> The authors prove that LSCI achieves approximate finite-sample coverage under a new, more flexible assumption called local exchangeability. This is a relaxed version of the classical exchangeability assumption used in conformal methods, broadening its applicability.<br>",
      
      "<u>Efficient Sampling Algorithm:</u> They propose a practical algorithm to generate ensembles and prediction bands from LSCI, making the method feasible and efficient for real-world operator learning tasks.<br>",
      
      "<u>Empirical Validation:</u> Through both synthetic tests and real-world experiments, LSCI consistently outperforms existing conformal inference approaches and other uncertainty quantification techniques used for operator models—delivering better coverage, adaptivity, and computational efficiency. <br>"
    ],

    impact:[
        "Advancing Scientific Machine Learning: LSCI offers trustworthy uncertainty estimates for black-box operator models widely used in climate science, medical imaging, and large-scale physics simulations.",
        "Supporting Safer Model Deployment: By providing reliable confidence measures, LSCI helps ensure neural operators can be safely used in high-stakes environments where understanding prediction certainty is crucial.",
        "Laying the Groundwork for Future Research: This work opens up exciting new directions for probabilistic operator learning, adaptive uncertainty quantification, and function-valued prediction methods, especially in situations involving distribution shifts.",    

    ],

    strongPoints: [
      "Novel and Reliable Uncertainty Quantification for Neural Operators: This paper presents LSCI, a groundbreaking method that offers distribution-free, function-valued uncertainty estimates for black-box neural operator models. Unlike traditional neural operators, which typically don’t provide reliable uncertainty measures, LSCI delivers calibrated predictions—marking a major step forward in trustworthy operator learning.",
      
      "Strong Theory Meets Practical Usability: LSCI is backed by solid theory, built on the concepts of local exchangeability and Φ-depth-based conformal inference, ensuring finite-sample coverage guarantees. What’s impressive is that despite this theoretical depth, the method is efficient and scalable, making it well-suited for real-world applications that demand both speed and reliability.",

      "Thorough Testing Across Real-World Domains: The approach is validated on a range of synthetic and real-world datasets, including applications like weather forecasting, energy demand prediction, and air quality modeling. In every case, LSCI outperforms existing methods—offering narrower prediction bands, better adaptation to local data patterns, and stronger risk control. This shows not only its robustness but also its versatility across diverse tasks."
    ],
    weakPoints: [
      "Computational Overhead at Test Time: While LSCI offers strong theoretical guarantees, its reliance on localization and rejection-based sampling during inference adds notable computational cost. This can become a bottleneck, especially for large-scale or real-time applications, potentially limiting its practicality in scenarios where speed is critical.",

      "Sensitivity to Bandwidth Parameter: LSCI’s performance heavily depends on the choice of the localization bandwidth parameter (λ). Although cross-validation helps tune this parameter, there’s no principled or automated way to choose the optimal value. This sensitivity may affect generalization and make the method harder to deploy across varied datasets without manual tuning.",

      "Limited Support for Complex Output Structures: The current version of LSCI is designed for scalar or function-valued outputs, but it doesn't extend naturally to multivariate functional outputs—such as spatiotemporal data with multiple channels. Supporting these more complex structures would require significant modifications, limiting LSCI’s applicability in many real-world operator learning problems involving rich, structured outputs.",
    ],
    futureIdeas: [
      "Speeding Up with Amortized Inference:To make LSCI suitable for real-time or online use, one promising direction is to develop amortized or neural approximations that can bypass the expensive sampling and localization steps at test time. This could make conformal prediction for neural operators fast enough for high-throughput applications.",

      "Smarter Projection Operators: The current method relies on fixed projection strategies (like random or Fourier-based ones), but there's potential in making this more adaptive and data-driven. For example, using attention mechanisms or learned basis functions could improve how Φ-depths capture the structure of the data, making predictions more accurate and locally adaptive.",

      "Handling Complex, Multi-Channel Outputs: LSCI currently focuses on single-output or function-valued data. Extending it to handle multivariate outputs—like climate data with multiple interacting variables—would require developing joint conformity scores or hierarchical depth models. This would open doors to using LSCI in more complex scientific and engineering tasks.",

      "Bridging to Probabilistic Models: Another exciting avenue is to combine LSCI with probabilistic neural operators, such as Bayesian FNOs or stochastic DeepONets. This hybrid approach could improve how we capture both epistemic and aleatoric uncertainty, merging the strengths of conformal inference and probabilistic modeling.",

      "Smarter Bandwidth Tuning: Currently, the bandwidth parameter (λ) in LSCI is selected via cross-validation. Future work could explore automated, task-aware tuning methods—like meta-learning or Bayesian optimization—to choose λ more efficiently and ensure reliable uncertainty estimates across different datasets.",

      "Scaling Up to Real-World Spatiotemporal Data: LSCI has great potential for large-scale spatiotemporal tasks—such as climate simulation or fluid dynamics—but it needs optimization. This could include GPU acceleration, distributed sampling, or compressed representations to scale LSCI to massive 3D or time-dependent datasets.",

      "Towards Causal and Counterfactual Inference: Finally, a bold and forward-looking direction is to explore how LSCI can be adapted for causal operator models. For instance, it could quantify uncertainty over counterfactual function-valued predictions—like simulating the effects of climate interventions or treatment plans in medicine.",
    ],
    questions: [
        "How sensitive is LSCI to the choice of the projection class Φ? Although the paper shows different projection families perform similarly, could there be cases where this choice significantly affects coverage or efficiency?"
    ]
  }
];

// Select the container elements
const postListDiv = document.getElementById("post-list");
const fullPostDiv = document.getElementById("full-post");

// Render list of blog post previews
function renderPostList() {
  postListDiv.innerHTML = blogPosts
    .map(
      (post, index) => `
      <div class="blog-post">
        <h2>${post.title}</h2>
        <p><strong>Authors:</strong> ${post.authors}</p>
        <p>${post.summary}</p>
        <button class="button read-btn" onclick="readFullPost(${index})">Read Full Post</button>
        <a href="${post.paperLink}" target="_blank" rel="noopener" class="button paper-link-btn">Paper Link</a>
      </div>
    `
    )
    .join("");

  // Show list view, hide full post
  postListDiv.style.display = "block";
  fullPostDiv.style.display = "none";
}

// Render the full post view
function readFullPost(index) {
  const post = blogPosts[index];

  fullPostDiv.innerHTML = `
    <div class="blog-post-full">
      <h2>${post.title}</h2>
      <p><strong>Authors:</strong> ${post.authors}</p>

      <h3>Summary:</h3>
      <p>${post.summary}</p>

      <h3>Key Contributions:</h3>
      <p>${post.keyContributions.join("")}</p>

      <h3>Impact of this paper:</h3>
      <ul>${post.impact.map(item => `<li>${item}</li>`).join("")}</ul>

      <h3>Three strong points of this paper:</h3>
      <ul>${post.strongPoints.map(item => `<li>${item}</li>`).join("")}</ul>

      <h3>Three weak points of this paper</h3>
      <ul>${post.weakPoints.map(item => `<li>${item}</li>`).join("")}</ul>

      <h3>Potential ideas for future work based on this paper.</h3>
      <ol>${post.futureIdeas.map(item => `<li>${item}</li>`).join("")}</ol>

      <h3>Questions</h3>
      <ul>${post.questions.map(item => `<li>${item}</li>`).join("")}</ul>

      <div class="post-actions">
        <button class="button back-btn" onclick="renderPostList()">Back to All Posts</button>
      </div>
    </div>
  `;

  // Show full post, hide list view
  postListDiv.style.display = "none";
  fullPostDiv.style.display = "block";
}

// Load on page ready
document.addEventListener("DOMContentLoaded", renderPostList);
