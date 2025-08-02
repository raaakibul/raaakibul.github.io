// Sample resource data with detailed content
const resources = [
  {
    title: "Machine Learning Tutorial Resourse Hub",
    category: "tutorial",
    description:
      "Machine Learning Tutorial Resource",
    tags: ["Machine Learning"],
    content: `
                    <p>Welcome to the Machine Learning Tutorial Resource Hub a curated collection of quality tutorials, guides, and references to help you learn and explore the field of machine learning. This resource is designed to support learners at various levels by providing access to tutorials covering essential topics, algorithms, tools, and real-world applications. Whether you're just starting out or expanding your knowledge, this hub offers a centralized place to discover valuable learning materials and deepen your understanding of machine learning.</p>
                    <h3>YouTube-Based Machine Learning Learning Resource</h3>
                    <p>1. Sebastian Raschka
                        <a href="https://www.youtube.com/watch?v=OgK8JFjkSto&list=PLTKMiZHVd_2KyGirGEvKlniaWeLOHhUF3" target="_blank">Intro to Machine Learning and Statistical Pattern Classification Course</a> <br>
                    2. UofU Data Science: 
                        <a href="https://www.youtube.com/watch?v=G4RhudIawVY&list=PLbuogVdPnkCo06Fs1LketYTz3f61BxcnL" target="_blank">Machine Learning (Spring 2025)</a><br>
                    3. UofU Data Science: 
                        <a href="https://www.youtube.com/watch?v=hPsvYcI9fnE&list=PLbuogVdPnkCr-ANNi5GZid3MvSkzm_wnM" target="_blank">Machine Learning (Spring 2024)</a>
                    </p>

                    <h3>Machine Learning Lectures by University Professors</h3>
                    <p>1. Sebastian Raschka
                        <a href="https://www.youtube.com/watch?v=OgK8JFjkSto&list=PLTKMiZHVd_2KyGirGEvKlniaWeLOHhUF3" target="_blank">Intro to Machine Learning and Statistical Pattern Classification Course</a> <br>
                    2. UofU Data Science: 
                        <a href="https://www.youtube.com/watch?v=G4RhudIawVY&list=PLbuogVdPnkCo06Fs1LketYTz3f61BxcnL" target="_blank">Machine Learning (Spring 2025)</a>
                    </p><br>
                    
                `,
  },
  // {
  //   title: "TensorFlow Tutorial",
  //   category: "tutorials",
  //   description:
  //     "Comprehensive guide to building machine learning models with TensorFlow.",
  //   tags: ["Deep Learning", "Neural Networks", "Python"],
  //   content: `
  //                   <p>This tutorial provides a comprehensive introduction to TensorFlow, an open-source machine learning framework developed by Google.</p>
  //                   <h3>What You'll Learn</h3>
  //                   <ul>
  //                       <li>TensorFlow basics and core concepts</li>
  //                       <li>Building and training neural networks</li>
  //                       <li>Working with tensors and computational graphs</li>
  //                       <li>Implementing common deep learning architectures</li>
  //                       <li>Deploying models to production</li>
  //                   </ul>
  //                   <h3>Prerequisites</h3>
  //                   <p>Basic knowledge of Python programming and understanding of machine learning concepts are recommended before starting this tutorial.</p>
  //                   <h3>Getting Started</h3>
  //                   <p>First, install TensorFlow using pip:</p>
  //                   <p><code>pip install tensorflow</code></p>
  //                   <p>Then, follow the step-by-step examples in the tutorial to build your first neural network model.</p>
  //               `,
  // },
  // {
  //   title: "Jupyter Notebook",
  //   category: "tools",
  //   description:
  //     "Interactive web application for creating and sharing computational documents.",
  //   tags: ["Python", "Data Analysis", "Visualization"],
  //   content: `
  //                   <p>Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text.</p>
  //                   <h3>Key Features</h3>
  //                   <ul>
  //                       <li>Interactive computing environment</li>
  //                       <li>Support for over 40 programming languages</li>
  //                       <li>Ability to share notebooks with others</li>
  //                       <li>Integration with big data tools</li>
  //                       <li>Rich output formats (HTML, images, videos, etc.)</li>
  //                   </ul>
  //                   <h3>Installation</h3>
  //                   <p>You can install Jupyter using pip:</p>
  //                   <p><code>pip install jupyter</code></p>
  //                   <p>Then start the Jupyter server with:</p>
  //                   <p><code>jupyter notebook</code></p>
  //                   <h3>Common Use Cases</h3>
  //                   <p>Jupyter Notebooks are widely used for data cleaning and transformation, numerical simulation, statistical modeling, data visualization, machine learning, and much more.</p>
  //               `,
  // },
  // {
  //   title: "Attention Is All You Need",
  //   category: "papers",
  //   description:
  //     "Seminal paper introducing the Transformer architecture for sequence processing.",
  //   tags: ["NLP", "Transformers", "Attention"],
  //   content: `
  //                   <p>"Attention Is All You Need" is a groundbreaking research paper published in 2017 that introduced the Transformer architecture, which has since become the foundation for many state-of-the-art natural language processing models.</p>
  //                   <h3>Key Contributions</h3>
  //                   <ul>
  //                       <li>Introduced the Transformer architecture based solely on attention mechanisms</li>
  //                       <li>Eliminated recurrence and convolutions, enabling more parallelization</li>
  //                       <li>Achieved superior translation quality with reduced training time</li>
  //                       <li>Paved the way for models like BERT, GPT, and T5</li>
  //                   </ul>
  //                   <h3>Architecture Overview</h3>
  //                   <p>The Transformer consists of an encoder and decoder, each composed of stacked self-attention and point-wise fully connected layers. The encoder maps an input sequence to a continuous representation, while the decoder generates an output sequence one element at a time.</p>
  //                   <h3>Impact</h3>
  //                   <p>This paper revolutionized NLP and has influenced numerous other fields beyond language processing, including computer vision, audio processing, and reinforcement learning.</p>
  //               `,
  // },
  // {
  //   title: "Machine Learning Course",
  //   category: "courses",
  //   description:
  //     "Comprehensive introduction to machine learning algorithms and applications.",
  //   tags: ["Supervised Learning", "Unsupervised Learning", "Algorithms"],
  //   content: `
  //                   <p>This comprehensive machine learning course covers both the theoretical foundations and practical applications of machine learning algorithms.</p>
  //                   <h3>Course Content</h3>
  //                   <ul>
  //                       <li>Introduction to machine learning and its applications</li>
  //                       <li>Supervised learning: regression and classification</li>
  //                       <li>Unsupervised learning: clustering and dimensionality reduction</li>
  //                       <li>Best practices in machine learning</li>
  //                       <li>Neural networks and deep learning</li>
  //                       <li>Reinforcement learning</li>
  //                   </ul>
  //                   <h3>Learning Objectives</h3>
  //                   <p>By the end of this course, you will be able to:</p>
  //                   <ul>
  //                       <li>Identify appropriate machine learning algorithms for different problems</li>
  //                       <li>Implement machine learning models using Python</li>
  //                       <li>Evaluate model performance and improve accuracy</li>
  //                       <li>Apply machine learning to real-world problems</li>
  //                   </ul>
  //                   <h3>Prerequisites</h3>
  //                   <p>Basic programming knowledge (preferably Python), high school mathematics, and familiarity with basic statistics.</p>
  //               `,
  // },
  // {
  //   title: "Kaggle Datasets",
  //   category: "datasets",
  //   description:
  //     "Community platform with thousands of datasets for data science projects.",
  //   tags: ["Competition", "Public Data", "Various Domains"],
  //   content: `
  //                   <p>Kaggle is an online community of data scientists and machine learning practitioners that offers a vast collection of datasets for data science projects and competitions.</p>
  //                   <h3>Key Features</h3>
  //                   <ul>
  //                       <li>Thousands of public datasets across various domains</li>
  //                       <li>Ability to create and share your own datasets</li>
  //                       <li>Integration with Kaggle Kernels (now Kaggle Notebooks)</li>
  //                       <li>Dataset versioning and metadata</li>
  //                       <li>Discussion forums for each dataset</li>
  //                   </ul>
  //                   <h3>Popular Datasets</h3>
  //                   <p>Some of the most popular datasets on Kaggle include:</p>
  //                   <ul>
  //                       <li>Titanic: Machine Learning from Disaster</li>
  //                       <li>House Prices: Advanced Regression Techniques</li>
  //                       <li>Digit Recognizer</li>
  //                       <li>Netflix Prize</li>
  //                       <li>COVID-19 Open Research Dataset Challenge</li>
  //                   </ul>
  //                   <h3>How to Use Kaggle Datasets</h3>
  //                   <p>You can download datasets directly from the Kaggle website or use them in Kaggle Notebooks without downloading. To use datasets in your local environment, you can install the Kaggle API and download datasets using the command line.</p>
  //               `,
  // },
  // {
  //   title: "PyTorch Tutorial",
  //   category: "tutorials",
  //   description:
  //     "Learn how to build deep learning models with PyTorch framework.",
  //   tags: ["Deep Learning", "Python", "Neural Networks"],
  //   content: `
  //                   <p>This tutorial provides a comprehensive introduction to PyTorch, an open-source machine learning framework developed by Facebook's AI Research lab.</p>
  //                   <h3>What You'll Learn</h3>
  //                   <ul>
  //                       <li>PyTorch basics and tensors</li>
  //                       <li>Building neural networks with nn.Module</li>
  //                       <li>Automatic differentiation with autograd</li>
  //                       <li>Training models with optimizers</li>
  //                       <li>Working with datasets and dataloaders</li>
  //                       <li>Transfer learning with pretrained models</li>
  //                   </ul>
  //                   <h3>Why PyTorch?</h3>
  //                   <p>PyTorch is known for its simplicity, flexibility, and dynamic computation graph, which makes it particularly suitable for research and rapid prototyping. It also has strong community support and extensive documentation.</p>
  //                   <h3>Getting Started</h3>
  //                   <p>First, install PyTorch using pip or conda. Visit the official PyTorch website to get the installation command tailored to your system and requirements.</p>
  //                   <p>Then, follow the tutorial examples to build your first neural network model and train it on a sample dataset.</p>
  //               `,
  // },
  // {
  //   title: "Tableau",
  //   category: "tools",
  //   description:
  //     "Powerful data visualization tool for creating interactive dashboards.",
  //   tags: ["Visualization", "Business Intelligence", "Dashboards"],
  //   content: `
  //                   <p>Tableau is a powerful data visualization tool used in the Business Intelligence industry. It helps in simplifying raw data into a very easily understandable format.</p>
  //                   <h3>Key Features</h3>
  //                   <ul>
  //                       <li>Drag-and-drop interface</li>
  //                       <li>Real-time data analysis</li>
  //                       <li>Collaboration features</li>
  //                       <li>Integration with various data sources</li>
  //                       <li>Interactive dashboards and reports</li>
  //                       <li>Mobile compatibility</li>
  //                   </ul>
  //                   <h3>Products</h3>
  //                   <p>Tableau offers several products to meet different needs:</p>
  //                   <ul>
  //                       <li>Tableau Desktop: For individual analysts</li>
  //                       <li>Tableau Server: For enterprise-wide sharing</li>
  //                       <li>Tableau Online: Cloud-based version</li>
  //                       <li>Tableau Public: Free version with public sharing</li>
  //                       <li>Tableau Prep: For data preparation</li>
  //                   </ul>
  //                   <h3>Learning Resources</h3>
  //                   <p>Tableau provides extensive learning resources including:</p>
  //                   <ul>
  //                       <li>Free training videos</li>
  //                       <li>Tableau Desktop Specialist Certification</li>
  //                       <li>Community forums</li>
  //                       <li>Sample workbooks and datasets</li>
  //                   </ul>
  //               `,
  // },
  // {
  //   title: "BERT Paper",
  //   category: "papers",
  //   description:
  //     "Pre-training of Deep Bidirectional Transformers for Language Understanding.",
  //   tags: ["NLP", "Transformers", "Language Models"],
  //   content: `
  //                   <p>"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding" is a seminal paper published by Google AI in 2018 that introduced BERT (Bidirectional Encoder Representations from Transformers).</p>
  //                   <h3>Key Contributions</h3>
  //                   <ul>
  //                       <li>Introduced a new language representation model called BERT</li>
  //                       <li>Demonstrated the importance of bidirectional pre-training</li>
  //                       <li>Achieved state-of-the-art results on eleven natural language processing tasks</li>
  //                       <li>Released pre-trained models that can be fine-tuned for specific tasks</li>
  //                   </ul>
  //                   <h3>Architecture</h3>
  //                   <p>BERT uses the Transformer encoder architecture. It's designed to pre-train deep bidirectional representations by jointly conditioning on both left and right context in all layers. As a result, the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models for a wide range of tasks.</p>
  //                   <h3>Pre-training Tasks</h3>
  //                   <p>BERT is pre-trained on two tasks:</p>
  //                   <ul>
  //                       <li>Masked Language Model (MLM): Randomly masks some of the tokens from the input, and the objective is to predict the original vocabulary id of the masked word based only on its context.</li>
  //                       <li>Next Sentence Prediction (NSP): Predicts whether two sentences are consecutive in the original text.</li>
  //                   </ul>
  //                   <h3>Impact</h3>
  //                   <p>BERT has revolutionized natural language processing and has been used as a foundation for numerous models and applications, including search engines, chatbots, and text analysis tools.</p>
  //               `,
  // },
  // {
  //   title: "Deep Learning Specialization",
  //   category: "courses",
  //   description:
  //     "Comprehensive deep learning course covering neural networks and applications.",
  //   tags: ["Deep Learning", "CNNs", "RNNs"],
  //   content: `
  //                   <p>The Deep Learning Specialization is a comprehensive online program created by Andrew Ng that teaches you the foundations of deep learning, how to build neural networks, and how to lead successful machine learning projects.</p>
  //                   <h3>Course Structure</h3>
  //                   <p>The specialization consists of five courses:</p>
  //                   <ol>
  //                       <li>Neural Networks and Deep Learning</li>
  //                       <li>Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization</li>
  //                       <li>Structuring Machine Learning Projects</li>
  //                       <li>Convolutional Neural Networks</li>
  //                       <li>Sequence Models</li>
  //                   </ol>
  //                   <h3>Learning Outcomes</h3>
  //                   <p>Upon completing this specialization, you will be able to:</p>
  //                   <ul>
  //                       <li>Build and train deep neural networks</li>
  //                       <li>Implement vectorized neural networks</li>
  //                       <li>Apply deep learning to your own applications</li>
  //                       <li>Build CNNs and RNNs</li>
  //                       <li>Understand industry best practices for deep learning</li>
  //                   </ul>
  //                   <h3>Prerequisites</h3>
  //                   <p>Basic programming knowledge (Python), and understanding of linear algebra and machine learning concepts. The first course provides a refresher on the necessary math concepts.</p>
  //                   <h3>Projects</h3>
  //                   <p>Throughout the specialization, you'll work on hands-on projects including:</p>
  //                   <ul>
  //                       <li>Building a neural network to classify cat images</li>
  //                       <li>Implementing optimization algorithms to improve model performance</li>
  //                       <li>Building a CNN for image recognition</li>
  //                       <li>Creating an RNN for sequence prediction</li>
  //                   </ul>
  //               `,
  // },
];
// DOM elements
const resourcesGrid = document.getElementById("resourcesGrid");
const categoryButtons = document.querySelectorAll(".category-btn");
const modal = document.getElementById("resourceModal");
const closeModal = document.getElementById("closeModal");
const backBtn = document.getElementById("backBtn");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

// Initialize the page
function init() {
  renderResources("all");
  setupEventListeners();
}

// Render resources based on category
function renderResources(category) {
  resourcesGrid.innerHTML = "";

  const filteredResources =
    category === "all"
      ? resources
      : resources.filter((resource) => resource.category === category);

  filteredResources.forEach((resource) => {
    const card = createResourceCard(resource);
    resourcesGrid.appendChild(card);
  });
}

// Create a resource card element
function createResourceCard(resource) {
  const card = document.createElement("div");
  card.className = "resource-card";

  card.innerHTML = `
                <div class="card-header">
                    <h3>${resource.title}</h3>
                    <div class="category">${resource.category}</div>
                </div>
                <div class="card-body">
                    <p>${resource.description}</p>
                </div>
                <div class="card-footer">
                    <div class="card-tags">
                        ${resource.tags
                          .map((tag) => `<span class="tag">${tag}</span>`)
                          .join("")}
                    </div>
                    <button class="view-btn" data-id="${resource.title}">
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

      // Filter resources
      const category = button.getAttribute("data-category");
      renderResources(category);
    });
  });


  // View button click event
  resourcesGrid.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("view-btn") ||
      e.target.parentElement.classList.contains("view-btn")
    ) {
      const button = e.target.classList.contains("view-btn")
        ? e.target
        : e.target.parentElement;
      const resourceId = button.getAttribute("data-id");
      showResourceDetails(resourceId);
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

// Show resource details in modal
function showResourceDetails(resourceId) {
  const resource = resources.find((r) => r.title === resourceId);

  if (resource) {
    modalTitle.textContent = resource.title;
    modalBody.innerHTML = resource.content;

    modal.style.display = "block";
  }
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", init);