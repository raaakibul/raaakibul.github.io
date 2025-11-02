// Research paper data
const researchPapers = {
  "deep-learning-healthcare": {
    title: "Deep Learning Applications in Healthcare",
    type: "Journal",
    date: "Nov 2023",
    authors: "Johnson, M., Smith, A., Williams, B.",
    journal: "Journal of Medical AI, Vol. 15, Issue 3",
    content: `
                    <p>This comprehensive study examines the transformative impact of deep learning technologies across various healthcare domains. Through systematic analysis of recent advancements, we demonstrate how neural networks are revolutionizing medical diagnosis, treatment planning, and patient care management.</p>
                    <h3>Medical Image Analysis</h3>
                    <p>Deep learning algorithms have shown remarkable success in medical image analysis, achieving accuracy rates that surpass human experts in certain tasks. Our research highlights applications in radiology, pathology, and dermatology where convolutional neural networks (CNNs) excel at detecting abnormalities and predicting disease progression.</p>
                    <h3>Predictive Analytics</h3>
                    <p>The integration of deep learning with electronic health records (EHRs) has enabled powerful predictive analytics capabilities. We present case studies where recurrent neural networks (RNNs) and transformers successfully predict patient outcomes, readmission risks, and disease trajectories with unprecedented accuracy.</p>
                    <h3>Personalized Treatment</h3>
                    <p>Our research demonstrates how deep learning facilitates personalized medicine by analyzing complex patient data to recommend tailored treatment plans. We explore the use of generative adversarial networks (GANs) for drug discovery and reinforcement learning for optimizing treatment protocols.</p>
                    <h3>Ethical Considerations</h3>
                    <p>While the potential benefits are substantial, we also address critical ethical considerations including data privacy, algorithmic bias, and the need for transparent decision-making processes. Our framework for responsible AI implementation in healthcare settings provides guidelines for practitioners and policymakers.</p>
                    <p>The findings suggest that deep learning will continue to play an increasingly central role in healthcare delivery, but its successful integration requires careful attention to technical, ethical, and practical challenges.</p>
                `,
  },
  // "quantum-computing": {
  //   title: "Advances in Quantum Computing Algorithms",
  //   type: "Conference",
  //   date: "Oct 2023",
  //   authors: "Chen, L., Rodriguez, P., Kumar, S.",
  //   journal: "International Conference on Quantum Computing 2023",
  //   content: `
  //                   <p>This paper presents groundbreaking developments in quantum computing algorithms that demonstrate significant computational advantages over classical approaches. Our research focuses on three key areas: optimization problems, machine learning, and cryptography.</p>
  //                   <h3>Quantum Optimization</h3>
  //                   <p>We introduce a novel quantum algorithm for solving combinatorial optimization problems that achieves quadratic speedup over the best-known classical methods. Experimental results on quantum simulators show promising performance on real-world logistics and scheduling problems.</p>
  //                   <h3>Quantum Machine Learning</h3>
  //                   <p>Our research demonstrates how quantum algorithms can enhance machine learning tasks, particularly in handling high-dimensional data and complex pattern recognition. We present quantum versions of support vector machines and neural networks that show potential for exponential speedup in specific scenarios.</p>
  //                   <h3>Post-Quantum Cryptography</h3>
  //                   <p>With the advent of quantum computers threatening current cryptographic systems, we propose new quantum-resistant encryption methods. Our lattice-based cryptographic schemes maintain security even against attacks from quantum adversaries.</p>
  //                   <h3>Practical Implementation</h3>
  //                   <p>Addressing the challenge of noisy intermediate-scale quantum (NISQ) devices, we develop error mitigation techniques that improve algorithm performance on current quantum hardware. Our hybrid quantum-classical approaches bridge the gap between theoretical advantages and practical applications.</p>
  //                   <p>The results indicate that quantum computing is approaching practical utility for specific problem domains, with continued progress expected as hardware capabilities improve.</p>
  //               `,
  // },
  // "climate-biodiversity": {
  //   title: "Climate Change Impact on Biodiversity",
  //   type: "Article",
  //   date: "Sep 2023",
  //   authors: "Garcia, M., Thompson, K., Patel, R.",
  //   journal: "Nature Climate Change Review",
  //   content: `
  //                   <p>This comprehensive analysis examines the multifaceted impacts of climate change on global biodiversity across terrestrial, marine, and freshwater ecosystems. Through meta-analysis of recent studies and original research, we document unprecedented rates of species loss and ecosystem transformation.</p>
  //                   <h3>Terrestrial Ecosystems</h3>
  //                   <p>Our research reveals that rising temperatures and altered precipitation patterns are forcing species to migrate toward poles or higher elevations at rates exceeding 10 km per decade. This rapid redistribution is creating novel species assemblages and disrupting established ecological relationships.</p>
  //                   <h3>Marine Biodiversity</h3>
  //                   <p>Ocean acidification and warming are causing widespread coral bleaching and disrupting marine food webs. We document declines in fish populations exceeding 50% in tropical regions over the past three decades, with cascading effects on ecosystem services and human communities.</p>
  //                   <h3>Phenological Shifts</h3>
  //                   <p>Climate change is altering the timing of seasonal events, creating mismatches between species that have co-evolved. Our analysis shows that plants are flowering earlier, insects are emerging sooner, and migratory patterns are shifting, disrupting critical ecological interactions.</p>
  //                   <h3>Conservation Strategies</h3>
  //                   <p>We propose a framework for climate-adaptive conservation that includes protected area expansion, habitat corridors, and assisted migration. Our models suggest that proactive management could reduce projected biodiversity losses by up to 40% compared to passive approaches.</p>
  //                   <p>The findings underscore the urgent need for integrated climate and biodiversity policies, with immediate action required to prevent irreversible losses of ecosystem function and services.</p>
  //               `,
  // },
  // "renewable-energy": {
  //   title: "Next Generation Renewable Energy Systems",
  //   type: "Paper",
  //   date: "Aug 2023",
  //   authors: "Wilson, J., Anderson, T., Lee, H.",
  //   journal: "Energy Research Institute",
  //   content: `
  //                   <p>This paper presents cutting-edge developments in renewable energy systems that address key challenges in efficiency, storage, and grid integration. Our research combines materials science advances with innovative system architectures to create more sustainable and reliable energy solutions.</p>
  //                   <h3>Advanced Photovoltaics</h3>
  //                   <p>We introduce novel perovskite-silicon tandem solar cells achieving conversion efficiencies exceeding 30%, significantly higher than conventional silicon panels. Our manufacturing process reduces production costs by 40% while extending operational lifetime to over 30 years.</p>
  //                   <h3>Energy Storage Breakthroughs</h3>
  //                   <p>Our research in solid-state batteries demonstrates energy densities of 500 Wh/kg with improved safety profiles compared to lithium-ion systems. We also present flow battery systems using organic electrolytes that enable long-duration storage at grid scale.</p>
  //                   <h3>Smart Grid Integration</h3>
  //                   <p>We develop AI-powered grid management systems that optimize renewable energy integration, reducing curtailment by 60% and improving grid stability. Our decentralized control architecture enables peer-to-peer energy trading and demand response at community scale.</p>
  //                   <h3>Hydrogen Economy</h3>
  //                   <p>Our research in green hydrogen production achieves 95% efficiency using novel electrolysis catalysts. We present integrated systems for hydrogen production, storage, and utilization in transportation and industrial applications.</p>
  //                   <p>The combination of these technologies creates a pathway to 100% renewable energy systems that are not only environmentally sustainable but also economically competitive with fossil fuel alternatives.</p>
  //               `,
  // },
  // "explainable-nn": {
  //   title: "Explainable Neural Networks",
  //   type: "Journal",
  //   date: "Jul 2023",
  //   authors: "Zhang, Y., Brown, E., Davis, M.",
  //   journal: "IEEE Transactions on AI, Vol. 28, Issue 4",
  //   content: `
  //                   <p>This paper addresses the critical challenge of interpretability in deep neural networks, presenting a comprehensive framework for making AI decisions transparent and understandable to human users. Our approach combines technical innovations with practical implementation strategies.</p>
  //                   <h3>Attention Visualization</h3>
  //                   <p>We develop novel techniques for visualizing attention mechanisms in transformer models, highlighting which input features influence specific outputs. Our gradient-based attribution methods provide intuitive visual explanations that correlate well with human reasoning patterns.</p>
  //                   <h3>Concept-Based Explanations</h3>
  //                   <p>Our research introduces concept activation vectors (CAVs) that explain neural network decisions in terms of human-understandable concepts rather than raw features. This approach bridges the gap between technical explanations and domain expertise.</p>
  //                   <h3>Counterfactual Explanations</h3>
  //                   <p>We present methods for generating counterfactual examples that show how minimal changes to inputs would alter model outputs. These explanations help users understand decision boundaries and identify potential biases in the model.</p>
  //                   <h3>Interactive Explanation Systems</h3>
  //                   <p>Our interactive interface allows users to explore model behavior through natural language queries and visual feedback. The system adapts explanation complexity based on user expertise and provides context-relevant information.</p>
  //                   <p>Evaluation across multiple domains including healthcare, finance, and autonomous systems demonstrates that our approach significantly improves user trust and decision-making compared to traditional black-box models.</p>
  //               `,
  // },
  // "autonomous-nav": {
  //   title: "Autonomous Navigation in Dynamic Environments",
  //   type: "Conference",
  //   date: "Jun 2023",
  //   authors: "Miller, S., Kim, D., O'Connor, N.",
  //   journal: "International Robotics Conference 2023",
  //   content: `
  //                   <p>This paper presents a novel framework for autonomous robot navigation in dynamic and unpredictable environments. Our approach combines real-time perception, predictive modeling, and adaptive planning to enable safe and efficient navigation in complex scenarios.</p>
  //                   <h3>Multi-Modal Perception</h3>
  //                   <p>We develop sensor fusion algorithms that integrate data from cameras, LiDAR, radar, and ultrasonic sensors to create comprehensive environmental representations. Our deep learning models achieve 98% accuracy in object detection and tracking across diverse weather and lighting conditions.</p>
  //                   <h3>Predictive Modeling</h3>
  //                   <p>Our research introduces trajectory prediction models that anticipate the future positions of dynamic objects including vehicles, pedestrians, and animals. Using transformer architectures, we achieve prediction horizons of 5 seconds with mean errors below 0.5 meters.</p>
  //                   <h3>Adaptive Planning</h3>
  //                   <p>We present real-time planning algorithms that continuously update navigation strategies based on changing environmental conditions. Our hierarchical planning approach balances long-term goals with immediate safety requirements, enabling smooth and predictable robot behavior.</p>
  //                   <h3>Human-Robot Interaction</h3>
  //                   <p>Our framework includes intuitive communication systems that allow robots to signal their intentions to humans and interpret human gestures and commands. This bidirectional communication significantly improves safety and efficiency in shared environments.</p>
  //                   <p>Extensive testing in urban, industrial, and natural environments demonstrates that our approach outperforms existing methods in terms of safety, efficiency, and adaptability to unexpected situations.</p>
  //               `,
  // },
  // "ai-revolution": {
  //   title: "The AI Revolution: Understanding Machine Learning",
  //   type: "Book",
  //   date: "May 2023",
  //   authors: "Dr. Sarah Mitchell",
  //   journal: "TechPress Publications, 2nd Edition",
  //   content: `
  //                   <p>"The AI Revolution: Understanding Machine Learning" is a comprehensive guide that demystifies the complex world of artificial intelligence and machine learning. This second edition has been extensively updated to include the latest developments in the field, making it an essential resource for anyone looking to understand AI technologies.</p>
  //                   <h3>Foundations of Machine Learning</h3>
  //                   <p>The book begins with a thorough introduction to the fundamental concepts of machine learning, including supervised, unsupervised, and reinforcement learning. Dr. Mitchell explains complex mathematical concepts in accessible language, making them understandable to readers without extensive technical backgrounds.</p>
  //                   <h3>Practical Applications</h3>
  //                   <p>Throughout the book, real-world case studies demonstrate how machine learning is transforming industries from healthcare to finance. Each chapter includes practical examples and code snippets that readers can experiment with, providing hands-on experience with AI technologies.</p>
  //                   <h3>Advanced Topics</h3>
  //                   <p>The second edition expands coverage of deep learning, neural networks, and natural language processing. New chapters explore cutting-edge topics including generative AI, transformer models, and the ethical implications of AI deployment in society.</p>
  //                   <h3>Future Directions</h3>
  //                   <p>Dr. Mitchell provides insights into the future trajectory of AI development, discussing emerging trends and potential breakthroughs. The book concludes with practical advice for professionals looking to build careers in AI and guidance for organizations implementing AI solutions.</p>
  //                   <p>This book serves as both an educational resource for students and a reference guide for practitioners, making it a valuable addition to any technical library.</p>
  //               `,
  // },
  // "sustainable-future": {
  //   title: "Sustainable Future: Green Technology Solutions",
  //   type: "Book",
  //   date: "Apr 2023",
  //   authors: "Prof. Michael Green, Dr. Lisa Chen",
  //   journal: "EcoScience Publishing",
  //   content: `
  //                   <p>"Sustainable Future: Green Technology Solutions" presents a comprehensive overview of innovative technologies and approaches that can help address global environmental challenges. Written by leading experts in sustainability and environmental science, this book provides actionable insights for creating a more sustainable world.</p>
  //                   <h3>Renewable Energy Technologies</h3>
  //                   <p>The book explores the latest developments in solar, wind, hydro, and geothermal energy technologies. Prof. Green and Dr. Chen provide detailed analysis of efficiency improvements, cost reductions, and integration challenges for each technology category.</p>
  //                   <h3>Energy Storage and Grid Modernization</h3>
  //                   <p>A significant portion of the book is dedicated to energy storage solutions and smart grid technologies. The authors examine battery technologies, pumped hydro storage, and emerging storage methods, along with the digital infrastructure needed to support renewable energy integration.</p>
  //                   <h3>Sustainable Transportation</h3>
  //                   <p>The transportation section covers electric vehicles, hydrogen fuel cells, and alternative fuels. The authors present realistic pathways for decarbonizing transportation while maintaining mobility and economic growth.</p>
  //                   <h3>Policy and Implementation</h3>
  //                   <p>Beyond technical solutions, the book addresses the policy frameworks, economic incentives, and behavioral changes needed to accelerate the adoption of green technologies. Case studies from around the world demonstrate successful implementation strategies.</p>
  //                   <p>This book serves as both a technical reference and a call to action, providing readers with the knowledge and inspiration to contribute to a sustainable future.</p>
  //               `,
  // },
  // "quantum-physics": {
  //   title: "Quantum Physics: From Theory to Applications",
  //   type: "Book",
  //   date: "Mar 2023",
  //   authors: "Dr. Robert Johnson, Dr. Emma Wilson",
  //   journal: "Academic Press, 3rd Edition",
  //   content: `
  //                   <p>"Quantum Physics: From Theory to Applications" is the definitive guide to understanding quantum mechanics and its real-world applications. This third edition has been completely revised to include the latest discoveries and technological advances in quantum science.</p>
  //                   <h3>Fundamental Principles</h3>
  //                   <p>The book begins with a clear explanation of quantum mechanics fundamentals, including wave-particle duality, uncertainty principle, and quantum superposition. Dr. Johnson and Dr. Wilson use intuitive analogies and thought experiments to make abstract concepts accessible to readers.</p>
  //                   <h3>Quantum Computing</h3>
  //                   <p>A major focus of this edition is quantum computing, with detailed explanations of qubits, quantum gates, and quantum algorithms. The authors provide insights into current quantum computing hardware and the race for quantum supremacy.</p>
  //                   <h3>Quantum Technologies</h3>
  //                   <p>Beyond computing, the book explores other quantum technologies including quantum cryptography, quantum sensors, and quantum communication. Each technology is explained in terms of its underlying physics and potential applications.</p>
  //                   <h3>Future Prospects</h3>
  //                   <p>The final section examines the future of quantum technologies and their potential impact on various industries. The authors discuss timelines for practical applications and the challenges that must be overcome for widespread adoption.</p>
  //                   <p>This comprehensive work serves as an essential resource for students, researchers, and professionals interested in understanding and working with quantum technologies.</p>
  //               `,
  // },
};

// Modal functionality
const modal = document.getElementById("paperModal");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalBody = document.getElementById("modalBody");

function openModal(paperId) {
  const paper = researchPapers[paperId];
  if (paper) {
    modalTitle.textContent = paper.title;
    modalMeta.innerHTML = `
                    <span class="paper-type">${paper.type}</span>
                    <span class="paper-date">
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8z" clip-rule="evenodd"/>
                        </svg>
                        ${paper.date}
                    </span>
                `;
    modalBody.innerHTML = `
                    <p><strong>Authors:</strong> ${paper.authors}</p>
                    <p><strong>Publication:</strong> ${paper.journal}</p>
                    ${paper.content}
                `;
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  }
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = ""; // Restore scrolling
}

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});

// Filter functionality
const filterButtons = document.querySelectorAll(".filter-button");
const paperCards = document.querySelectorAll(".paper-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Update active button
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    // Show/hide paper cards based on filter
    paperCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});
