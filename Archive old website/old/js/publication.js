// Sample publication data
const publications = [
  {
    id: 1,
    title:
      "Deep Learning-Based Background Noise Classification and Reduction for Audio Enhancement",
    authors: "Rakibul Islam, Rashik Rahman",
    journal: "#",
    year: 2023,
    type: "Thesis",
    doi: "#",
    abstract:
      " Background noise can deteriorate audio quality and interfere with the ability to concentrate on the intended sounds. The categorization and reduction of back- ground noise are crucial in audio enhancement since they help to identify and diminish undesired noise. Implementing this technique improves audio record- ing intelligibility and quality, ensuring that the intended sound is dominant and free of background noise. The objective is to improve the user’s auditory ex- perience by minimizing ambient or unnecessary sounds in audio applications. In order to accurately categorize audio due to fluctuations in sound pitch and volume, a Deep Learning-Based Background Noise Classification and Reduction for Audio Enhancement is proposed in this research. By employing deep learn- ing techniques, particularly Long Short-Term Memory (LSTM) networks, the methodology achieves an impressive accuracy rate of 88.35%. To train the pro- posed system, the Urbansound8 dataset is used, which has approximately 8,732 audio files in WAV format. The enhancement of background noise identification is achieved by employing an innovative sliding window technique that incorpo- rates both audio wavelet characteristics and time information. In addition, a comparative analysis of Tiny Machine Learning (TinyML) models is used to construct a robust, efficient and effective background noise categorization and reduction model. Further research will develop an LSTM model using TinyML as a foundation to enhance and rectify noise in practical situations.",
    tags: ["Deep Learning", "RNN", "Audio", "LSTM"],
    url: "#",
    pdf: "#",
  },
  {
    id: 2,
    title: "Real-time Object Detection Using Lightweight Neural Networks",
    authors: " ",
    journal: " ",
    year: "",
    type: "",
    doi: "",
    abstract:
      "We introduce a lightweight neural network architecture designed for real-time object detection on edge devices. Our approach achieves state-of-the-art performance while reducing computational complexity by 60% compared to existing methods. The proposed architecture incorporates novel attention mechanisms and depth-wise separable convolutions to optimize both speed and accuracy. Extensive experiments on COCO and PASCAL VOC datasets demonstrate that our method outperforms previous lightweight models while running at over 30 FPS on mobile devices.",
    tags: ["CV", "AI", "Edge Computing"],
    url: "",
    pdf: "#",
  },
];

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  renderPublications();
});

// Render publications
function renderPublications() {
  const container = document.getElementById("publicationsContainer");

  container.innerHTML = publications
    .map(
      (pub) => `
                <article class="publication-card" data-id="${pub.id}">
                    <div class="publication-header">
                        <h2 class="publication-title">
                            <a href="${pub.url}" target="_blank">${
        pub.title
      }</a>
                        </h2>
                        <div class="publication-authors">${pub.authors}</div>
                    </div>
                    
                    <div class="publication-meta">
                        <div class="meta-item">
                            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                            </svg>
                            <span>${pub.journal}</span>
                        </div>
                        <div class="meta-item">
                            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="16" y1="2" x2="16" y2="6"/>
                                <line x1="8" y1="2" x2="8" y2="6"/>
                                <line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                            <span>${pub.year}</span>
                        </div>
                        <div class="meta-item">
                            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                                <polyline points="13 2 13 9 20 9"/>
                            </svg>
                            <span>DOI: ${pub.doi}</span>
                        </div>
                    </div>
                    
                    <div class="abstract-container">
                        <div class="publication-abstract collapsed" id="abstract-${
                          pub.id
                        }">
                            ${pub.abstract}
                        </div>
                        <div class="abstract-gradient" id="gradient-${
                          pub.id
                        }"></div>
                        <button class="expand-btn" id="expand-btn-${
                          pub.id
                        }" onclick="toggleAbstract(${pub.id})">
                            <span>Read more</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6 9 12 15 18 9"/>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="publication-footer">
                        <div class="publication-tags">
                            ${pub.tags
                              .map((tag) => `<span class="tag">${tag}</span>`)
                              .join("")}
                        </div>
                        
                        <div class="publication-actions">
                            <a href="${
                              pub.pdf
                            }" class="action-btn" target="_blank">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                    <polyline points="14 2 14 8 20 8"/>
                                    <line x1="16" y1="13" x2="8" y2="13"/>
                                    <line x1="16" y1="17" x2="8" y2="17"/>
                                    <polyline points="10 9 9 9 8 9"/>
                                </svg>
                                PDF
                            </a>
                            <a href="${
                              pub.url
                            }" class="action-btn" target="_blank">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                    <polyline points="15 3 21 3 21 9"/>
                                    <line x1="10 14 21 3"/>
                                </svg>
                                DOI
                            </a>
                        </div>
                    </div>
                </article>
            `
    )
    .join("");
}

// Toggle abstract expansion with smooth animation
function toggleAbstract(id) {
  const abstract = document.getElementById(`abstract-${id}`);
  const button = document.getElementById(`expand-btn-${id}`);
  const gradient = document.getElementById(`gradient-${id}`);
  const buttonText = button.querySelector("span");

  if (abstract.classList.contains("collapsed")) {
    // Expand
    abstract.classList.remove("collapsed");
    abstract.classList.add("expanded");
    gradient.classList.add("hidden");
    button.classList.add("expanded");
    buttonText.textContent = "Read less";

    // Smooth scroll to keep button in view
    setTimeout(() => {
      button.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  } else {
    // Collapse
    abstract.classList.remove("expanded");
    abstract.classList.add("collapsed");
    gradient.classList.remove("hidden");
    button.classList.remove("expanded");
    buttonText.textContent = "Read more";
  }
}
