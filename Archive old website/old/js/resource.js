// Resource data
const resources = {
  "web-dev": {
    title: "Machine Learning Tutorial Resourse Hub",
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
  "ui-ux": {
    title: "UI/UX Design Principles",
    content: `
                    <h3>Design Fundamentals</h3>
                    <p>Great design is invisible. It focuses on user needs, creates intuitive interfaces, and delivers seamless experiences. Key principles include consistency, hierarchy, contrast, and balance. Always design with the end user in mind, conduct user research, and iterate based on feedback to create products that people love to use.</p>
                    <p>User Interface (UI) design focuses on the visual aspects of a product. It includes colors, typography, spacing, and layout. A good UI is aesthetically pleasing and guides users through the product effortlessly.</p>
                    <p>User Experience (UX) design focuses on the overall experience of using a product. It includes usability, accessibility, and the emotional response of users. A good UX makes users feel satisfied and accomplished.</p>
                    <p>Together, UI and UX design create products that are both beautiful and functional. By following design principles and understanding user needs, you can create exceptional digital experiences.</p>
                `,
  },
  performance: {
    title: "Performance Optimization",
    content: `
                    <h3>Speed Matters</h3>
                    <p>Website performance directly impacts user experience and conversion rates. Optimize images, minify CSS and JavaScript, leverage browser caching, and use content delivery networks. Implement lazy loading, reduce render-blocking resources, and monitor performance metrics regularly to ensure your site loads quickly for all users.</p>
                    <p>Image optimization is crucial for performance. Use appropriate image formats (JPEG for photos, PNG for graphics with transparency, SVG for icons), compress images without losing quality, and use responsive images with the srcset attribute.</p>
                    <p>Minification removes unnecessary characters from code without changing functionality. Minify HTML, CSS, and JavaScript files to reduce their size and improve loading times.</p>
                    <p>Browser caching stores static files on a user's device, reducing the need to download them again on subsequent visits. Set appropriate cache headers to leverage this technique effectively.</p>
                `,
  },
  security: {
    title: "Web Security Best Practices",
    content: `
                    <h3>Stay Secure</h3>
                    <p>Security should be built into every layer of your application. Use HTTPS, validate user input, implement proper authentication and authorization, and keep dependencies updated. Protect against common attacks like XSS, CSRF, and SQL injection. Regular security audits and penetration testing help identify and fix vulnerabilities before they can be exploited.</p>
                    <p>HTTPS encrypts data transmitted between the user's browser and your server, protecting sensitive information from interception. Always use HTTPS, especially for login pages and forms that collect personal information.</p>
                    <p>Input validation ensures that user-submitted data is safe and expected. Validate both on the client side for immediate feedback and on the server side for security. Never trust user input.</p>
                    <p>Authentication verifies the identity of users, while authorization determines what they can do. Implement strong password policies, multi-factor authentication, and role-based access control to protect user accounts and sensitive data.</p>
                `,
  },
  responsive: {
    title: "Responsive Web Design",
    content: `
                    <h3>Mobile-First Approach</h3>
                    <p>Responsive design ensures your website looks great on any device. Use flexible grids, fluid images, and CSS media queries to adapt layouts. Start with mobile design and progressively enhance for larger screens. Test on various devices and use tools like Chrome DevTools to simulate different screen sizes and ensure a consistent experience everywhere.</p>
                    <p>Flexible grids use relative units like percentages instead of fixed units like pixels. This allows your layout to adapt to different screen sizes. CSS Grid and Flexbox are powerful tools for creating flexible layouts.</p>
                    <p>Fluid images scale with the size of their container. Use max-width: 100% to ensure images never overflow their containers. Consider using responsive images with the srcset and sizes attributes to serve different image sizes based on the device.</p>
                    <p>Media queries allow you to apply different styles based on device characteristics like screen width, height, and orientation. Use them to create breakpoints where your layout changes to better suit the device.</p>
                `,
  },
  frameworks: {
    title: "Modern JavaScript Frameworks",
    content: `
                    <h3>Choose Your Framework</h3>
                    <p>JavaScript frameworks revolutionize web development by providing structured approaches to building complex applications. React offers component-based architecture, Vue provides progressive enhancement, and Angular delivers a full-featured platform. Each has its strengths - choose based on project requirements, team expertise, and long-term maintenance considerations.</p>
                    <p>React, developed by Facebook, is a library for building user interfaces with a component-based architecture. It uses a virtual DOM for efficient updates and has a rich ecosystem of tools and libraries. React is great for building single-page applications and complex user interfaces.</p>
                    <p>Vue.js is a progressive framework that can be adopted incrementally. It's known for its gentle learning curve, excellent documentation, and flexibility. Vue is great for projects of all sizes, from small enhancements to large-scale applications.</p>
                    <p>Angular, developed by Google, is a comprehensive framework for building web and mobile applications. It includes features like dependency injection, two-way data binding, and a powerful CLI. Angular is great for enterprise applications with complex requirements.</p>
                `,
  },
  datasets: {
    title: "Machine Learning Datasets",
    content: `
                    <h3>Quality Data for ML Projects</h3>
                    <p>High-quality datasets are the foundation of successful machine learning projects. This collection includes carefully curated datasets across various domains including image recognition, natural language processing, and predictive analytics.</p>
                    <p>Image datasets include MNIST for digit recognition, CIFAR-10 for object classification, and ImageNet for large-scale visual recognition. These datasets are essential for training computer vision models.</p>
                    <p>Text datasets cover a wide range of NLP tasks including sentiment analysis, named entity recognition, and machine translation. Popular datasets include IMDB reviews, CoNLL-2003, and WMT translation datasets.</p>
                    <p>Tabular datasets for predictive analytics include housing prices, customer churn, and financial forecasting. These datasets are perfect for practicing regression and classification techniques.</p>
                `,
  },
  "dev-tools": {
    title: "Development Tools",
    content: `
                    <h3>Essential Tools for Developers</h3>
                    <p>Modern development requires a robust set of tools to streamline workflows and improve productivity. This resource covers essential tools for code editing, version control, debugging, and deployment.</p>
                    <p>Code editors like Visual Studio Code, Sublime Text, and Atom provide syntax highlighting, code completion, and extensive plugin ecosystems. Choose an editor that fits your workflow and enhances your productivity.</p>
                    <p>Version control systems like Git are essential for tracking changes, collaborating with teams, and managing code history. Platforms like GitHub, GitLab, and Bitbucket provide hosting and collaboration features.</p>
                    <p>Debugging tools including browser developer tools, linters, and testing frameworks help identify and fix issues early in the development process. Mastering these tools significantly improves code quality and reduces bugs.</p>
                `,
  },
  "data-science": {
    title: "Data Science Fundamentals",
    content: `
                    <h3>Introduction to Data Science</h3>
                    <p>Data science combines statistics, programming, and domain knowledge to extract insights from data. This course covers the fundamental concepts and techniques used by data scientists to analyze data and build predictive models.</p>
                    <p>Statistics forms the foundation of data science. Learn about descriptive statistics, probability distributions, hypothesis testing, and regression analysis. These concepts are essential for understanding data and making informed decisions.</p>
                    <p>Programming skills are crucial for data science. This course covers Python and R, the most popular languages for data analysis, along with libraries like pandas, NumPy, and scikit-learn for data manipulation and machine learning.</p>
                    <p>Data visualization helps communicate insights effectively. Learn to create compelling visualizations using tools like matplotlib, seaborn, and Tableau. Good visualizations make complex data understandable and actionable.</p>
                `,
  },
};

// Modal functionality
const modal = document.getElementById("resourceModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

function openModal(resourceId) {
  const resource = resources[resourceId];
  if (resource) {
    modalTitle.textContent = resource.title;
    modalBody.innerHTML = resource.content;
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
const resourceCards = document.querySelectorAll(".resource-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Update active button
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    // Show/hide resource cards based on filter
    resourceCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});
