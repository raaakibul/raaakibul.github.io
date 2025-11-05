// Resource content data
const resourceContent = {
  "ml-tutorial": {
    icon: "📝",
    title: "Machine Learning Tutorial Resource Hub",
    content: `
                    <h3>Introduction to Machine Learning</h3>
                    <p>Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. This tutorial covers the fundamentals of machine learning, including supervised learning, unsupervised learning, and reinforcement learning.</p>
                    
                    <h3>Supervised Learning</h3>
                    <p>Supervised learning is the most common type of machine learning. In supervised learning, the algorithm learns from labeled training data, and makes predictions based on that data. Common supervised learning algorithms include linear regression, logistic regression, decision trees, random forests, and support vector machines.</p>
                    
                    <h3>Unsupervised Learning</h3>
                    <p>Unsupervised learning deals with unlabeled data. The algorithm tries to find patterns and relationships in the data without any prior training. Common unsupervised learning techniques include clustering, dimensionality reduction, and association rule learning.</p>
                    
                    <h3>Reinforcement Learning</h3>
                    <p>Reinforcement learning is a type of machine learning where an agent learns to make decisions by performing actions in an environment to maximize cumulative reward. It's commonly used in robotics, gaming, and navigation systems.</p>
                    
                    <h3>Neural Networks and Deep Learning</h3>
                    <p>Neural networks are computing systems inspired by the biological neural networks that constitute animal brains. Deep learning is a subset of machine learning that uses neural networks with multiple layers (deep neural networks) to model complex patterns in data.</p>
                    
                    <h3>Practical Applications</h3>
                    <p>Machine learning has numerous applications across various industries:</p>
                    <ul>
                        <li>Healthcare: Disease diagnosis, drug discovery, personalized treatment</li>
                        <li>Finance: Fraud detection, algorithmic trading, risk assessment</li>
                        <li>Retail: Recommendation systems, demand forecasting, customer segmentation</li>
                        <li>Transportation: Autonomous vehicles, traffic prediction, route optimization</li>
                        <li>Manufacturing: Quality control, predictive maintenance, supply chain optimization</li>
                    </ul>
                    
                    <h3>Getting Started with Machine Learning</h3>
                    <p>To get started with machine learning, you'll need:</p>
                    <ol>
                        <li>A good understanding of mathematics (linear algebra, calculus, statistics)</li>
                        <li>Programming skills (Python is the most popular language for ML)</li>
                        <li>Familiarity with ML libraries and frameworks (scikit-learn, TensorFlow, PyTorch)</li>
                        <li>Access to datasets for training and testing</li>
                        <li>Computational resources (GPU for deep learning)</li>
                    </ol>
                    
                    <h3>Conclusion</h3>
                    <p>Machine learning is a rapidly evolving field with enormous potential to transform industries and solve complex problems. By understanding the fundamentals and continuously learning new techniques, you can harness the power of machine learning to create innovative solutions.</p>
                `,
  },
  "ui-ux-principles": {
    icon: "📝",
    title: "UI/UX Design Principles",
    content: `
                    <h3>Understanding UI and UX</h3>
                    <p>User Interface (UI) and User Experience (UX) design are crucial aspects of creating digital products that users love. While often used together, UI and UX refer to different aspects of the design process:</p>
                    <ul>
                        <li><strong>UI Design</strong> focuses on the visual aspects of the product - the look, feel, and interactivity.</li>
                        <li><strong>UX Design</strong> encompasses the entire experience a user has with a product, including usability, accessibility, and pleasure derived from using the product.</li>
                    </ul>
                    
                    <h3>Fundamental Design Principles</h3>
                    <h4>Visual Hierarchy</h4>
                    <p>Visual hierarchy guides users through the interface by emphasizing important elements and de-emphasizing less important ones. This can be achieved through size, color, contrast, and placement.</p>
                    
                    <h4>Consistency</h4>
                    <p>Consistency in design elements creates familiarity and reduces the learning curve for users. This includes consistent colors, typography, button styles, and interaction patterns throughout the product.</p>
                    
                    <h4>User Feedback</h4>
                    <p>Providing immediate feedback for user actions helps users understand what's happening. This can be visual feedback (button states, loading indicators) or haptic feedback on mobile devices.</p>
                    
                    <h3>Design Thinking Process</h3>
                    <p>The design thinking process is a human-centered approach to innovation that integrates the needs of people, the possibilities of technology, and the requirements for business success:</p>
                    <ol>
                        <li><strong>Empathize</strong>: Understand the users and their needs</li>
                        <li><strong>Define</strong>: Clearly articulate the problem to solve</li>
                        <li><strong>Ideate</strong>: Brainstorm potential solutions</li>
                        <li><strong>Prototype</strong>: Create tangible representations of ideas</li>
                        <li><strong>Test</strong>: Evaluate solutions with real users</li>
                    </ol>
                    
                    <h3>User Research Methods</h3>
                    <p>Effective UX design is based on understanding user needs and behaviors. Common research methods include:</p>
                    <ul>
                        <li>User interviews and surveys</li>
                        <li>Usability testing</li>
                        <li>A/B testing</li>
                        <li>Analytics and heatmaps</li>
                        <li>Persona development</li>
                        <li>User journey mapping</li>
                    </ul>
                    
                    <h3>Wireframing and Prototyping</h3>
                    <p>Wireframes are low-fidelity representations of a product's structure, focusing on layout and functionality rather than visual design. Prototypes are interactive models that simulate the user experience, ranging from low-fidelity paper prototypes to high-fidelity interactive digital prototypes.</p>
                    
                    <h3>Accessibility Considerations</h3>
                    <p>Designing for accessibility ensures that products are usable by people with disabilities. Key considerations include:</p>
                    <ul>
                        <li>Sufficient color contrast</li>
                        <li>Keyboard navigation</li>
                        <li>Screen reader compatibility</li>
                        <li>Clear and simple language</li>
                        <li>Alternative text for images</li>
                    </ul>
                    
                    <h3>Usability Testing</h3>
                    <p>Usability testing involves observing real users as they interact with a product to identify usability issues and gather feedback for improvement. This can be done throughout the design process, from early wireframes to finished products.</p>
                    
                    <h3>Conclusion</h3>
                    <p>Effective UI/UX design requires a balance of creativity, empathy, and analytical thinking. By following established principles and continuously testing with real users, designers can create products that are not only visually appealing but also intuitive, accessible, and enjoyable to use.</p>
                `,
  },
  "performance-optimization": {
    icon: "🛠️",
    title: "Performance Optimization",
    content: `
                    <h3>Why Performance Matters</h3>
                    <p>Website performance is critical for user experience and search engine rankings. Studies show that users expect pages to load in 2 seconds or less, and 53% of mobile users abandon sites that take longer than 3 seconds to load. Performance also directly impacts conversion rates, with faster sites typically achieving higher conversion rates.</p>
                    
                    <h3>Performance Metrics</h3>
                    <p>Key performance metrics to monitor include:</p>
                    <ul>
                        <li><strong>First Contentful Paint (FCP)</strong>: When the first content appears on screen</li>
                        <li><strong>Largest Contentful Paint (LCP)</strong>: When the largest content element appears</li>
                        <li><strong>First Input Delay (FID)</strong>: Time from user interaction to browser response</li>
                        <li><strong>Cumulative Layout Shift (CLS)</strong>: Measure of visual stability</li>
                        <li><strong>Time to Interactive (TTI)</strong>: When the page becomes fully interactive</li>
                    </ul>
                    
                    <h3>Image Optimization</h3>
                    <p>Images often account for the majority of a page's download size. Optimization techniques include:</p>
                    <ul>
                        <li>Choosing the right format (JPEG for photos, PNG for graphics, WebP for both)</li>
                        <li>Compressing images without significant quality loss</li>
                        <li>Using responsive images with srcset and sizes attributes</li>
                        <li>Implementing lazy loading for images below the fold</li>
                        <li>Using modern image formats like WebP and AVIF</li>
                    </ul>
                    
                    <h3>Code Optimization</h3>
                    <p>Optimizing your code can significantly improve performance:</p>
                    <ul>
                        <li>Minify HTML, CSS, and JavaScript files</li>
                        <li>Remove unused CSS and JavaScript</li>
                        <li>Optimize critical rendering path</li>
                        <li>Use code splitting to load only necessary code</li>
                        <li>Implement tree shaking for unused code elimination</li>
                    </ul>
                    
                    <h3>Caching Strategies</h3>
                    <p>Caching reduces server load and improves load times for repeat visitors:</p>
                    <ul>
                        <li>Browser caching with appropriate Cache-Control headers</li>
                        <li>Content Delivery Network (CDN) caching</li>
                        <li>Service worker caching for progressive web apps</li>
                        <li>Database query caching</li>
                        <li>Object caching for frequently accessed data</li>
                    </ul>
                    
                    <h3>Lazy Loading</h3>
                    <p>Lazy loading defers loading of non-critical resources until they're needed:</p>
                    <ul>
                        <li>Images below the fold</li>
                        <li>JavaScript modules not needed for initial render</li>
                        <li>Third-party widgets and iframes</li>
                        <li>Heavy components that aren't immediately visible</li>
                    </ul>
                    
                    <h3>Server-Side Optimizations</h3>
                    <p>Server performance is crucial for overall site speed:</p>
                    <ul>
                        <li>Use HTTP/2 or HTTP/3 for multiplexing and header compression</li>
                        <li>Implement Gzip or Brotli compression</li>
                        <li>Optimize database queries and use indexing</li>
                        <li>Use server-side rendering for initial page load</li>
                        <li>Implement edge computing for faster response times</li>
                    </ul>
                    
                    <h3>Performance Testing Tools</h3>
                    <p>Regular performance testing helps identify bottlenecks:</p>
                    <ul>
                        <li>Google PageSpeed Insights</li>
                        <li>WebPageTest</li>
                        <li>Lighthouse (built into Chrome DevTools)</li>
                        <li>GTmetrix</li>
                        <li>Web Vitals extension</li>
                    </ul>
                    
                    <h3>Progressive Loading Techniques</h3>
                    <p>Progressive loading improves perceived performance:</p>
                    <ul>
                        <li>Skeleton screens while content loads</li>
                        <li>Streaming server rendering</li>
                        <li>Incremental static regeneration</li>
                        <li>Progressive image loading (low-quality image placeholders)</li>
                    </ul>
                    
                    <h3>Conclusion</h3>
                    <p>Performance optimization is an ongoing process that requires attention to both frontend and backend aspects of your application. By implementing these techniques and regularly monitoring performance metrics, you can create fast, responsive websites that provide excellent user experiences and achieve better business results.</p>
                `,
  },
  "web-security": {
    icon: "📄",
    title: "Web Security Best Practices",
    content: `
                    <h3>The Importance of Web Security</h3>
                    <p>Web security is essential for protecting user data, maintaining trust, and ensuring the continuity of online services. Security breaches can lead to financial losses, reputational damage, legal consequences, and loss of customer confidence. Implementing robust security measures is not just a technical necessity but a business imperative.</p>
                    
                    <h3>Common Web Vulnerabilities</h3>
                    <h4>Cross-Site Scripting (XSS)</h4>
                    <p>XSS attacks occur when attackers inject malicious scripts into web pages viewed by other users. These scripts can steal session cookies, redirect users to malicious sites, or modify page content. Prevention strategies include:</p>
                    <ul>
                        <li>Input validation and sanitization</li>
                        <li>Output encoding</li>
                        <li>Content Security Policy (CSP)</li>
                        <li>Using frameworks with built-in XSS protection</li>
                    </ul>
                    
                    <h4>SQL Injection</h4>
                    <p>SQL injection happens when attackers insert malicious SQL statements into input fields, potentially allowing them to view, modify, or delete database data. Prevention methods include:</p>
                    <ul>
                        <li>Using parameterized queries or prepared statements</li>
                        <li>Stored procedures</li>
                        <li>Input validation</li>
                        <li>Principle of least privilege for database accounts</li>
                    </ul>
                    
                    <h4>Cross-Site Request Forgery (CSRF)</h4>
                    <p>CSRF attacks force users to execute unwanted actions on web applications where they're authenticated. Protection measures include:</p>
                    <ul>
                        <li>Anti-CSRF tokens</li>
                        <li>SameSite cookie attribute</li>
                        <li>Checking the Origin and Referer headers</li>
                        <li>Requiring re-authentication for sensitive actions</li>
                    </ul>
                    
                    <h3>Secure Coding Practices</h3>
                    <p>Adopting secure coding practices is fundamental to building secure applications:</p>
                    <ul>
                        <li>Keep software and dependencies updated</li>
                        <li>Implement proper error handling (avoid exposing sensitive information)</li>
                        <li>Use secure password storage (bcrypt, scrypt, Argon2)</li>
                        <li>Implement rate limiting for authentication endpoints</li>
                        <li>Validate all user input on both client and server sides</li>
                    </ul>
                    
                    <h3>Authentication and Authorization</h3>
                    <p>Proper authentication and authorization are critical for controlling access to resources:</p>
                    <ul>
                        <li>Implement multi-factor authentication (MFA)</li>
                        <li>Use secure session management</li>
                        <li>Implement OAuth 2.0 and OpenID Connect for third-party authentication</li>
                        <li>Follow the principle of least privilege</li>
                        <li>Regularly review and update access permissions</li>
                    </ul>
                    
                    <h3>HTTPS Implementation</h3>
                    <p>HTTPS encrypts data transmitted between the client and server, protecting against eavesdropping and man-in-the-middle attacks:</p>
                    <ul>
                        <li>Obtain SSL/TLS certificates from trusted Certificate Authorities (CAs)</li>
                        <li>Implement HTTP Strict Transport Security (HSTS)</li>
                        <li>Use strong cipher suites and disable weak protocols</li>
                        <li>Regularly monitor certificate expiration</li>
                    </ul>
                    
                    <h3>Content Security Policy (CSP)</h3>
                    <p>CSP is a security layer that helps detect and mitigate certain types of attacks, including XSS and data injection attacks:</p>
                    <ul>
                        <li>Define allowed sources for scripts, styles, images, etc.</li>
                        <li>Prevent inline scripts and eval()</li>
                        <li>Report violations to understand potential issues</li>
                        <li>Gradually implement CSP with report-only mode first</li>
                    </ul>
                    
                    <h3>Secure Cookie Handling</h3>
                    <p>Cookies are often targeted by attackers, so secure handling is essential:</p>
                    <ul>
                        <li>Set the Secure attribute for cookies transmitted over HTTPS</li>
                        <li>Use the HttpOnly attribute to prevent access via JavaScript</li>
                        <li>Implement the SameSite attribute to prevent CSRF</li>
                        <li>Set appropriate expiration times for session cookies</li>
                    </ul>
                    
                    <h3>Security Headers</h3>
                    <p>Security-related HTTP headers provide additional layers of protection:</p>
                    <ul>
                        <li>X-Content-Type-Options: Prevents MIME-type sniffing</li>
                        <li>X-Frame-Options: Protects against clickjacking</li>
                        <li>X-XSS-Protection: Enables cross-site scripting filtering</li>
                        <li>Referrer-Policy: Controls how much referrer information is sent</li>
                        <li>Permissions-Policy: Restricts browser features</li>
                    </ul>
                    
                    <h3>Regular Security Audits</h3>
                    <p>Continuous security monitoring and testing are essential:</p>
                    <ul>
                        <li>Conduct regular vulnerability scans</li>
                        <li>Perform penetration testing</li>
                        <li>Implement security logging and monitoring</li>
                        <li>Establish incident response procedures</li>
                        <li>Stay informed about new vulnerabilities and threats</li>
                    </ul>
                    
                    <h3>Conclusion</h3>
                    <p>Web security is a multifaceted discipline that requires a layered approach. By implementing these best practices, staying informed about emerging threats, and fostering a security-conscious culture, organizations can significantly reduce their risk of security breaches and protect both their assets and their users.</p>
                `,
  },
  "responsive-design": {
    icon: "📝",
    title: "Responsive Web Design",
    content: `
                    <h3>What is Responsive Web Design?</h3>
                    <p>Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It ensures that users have a good viewing experience whether they're using a desktop computer, a tablet, or a smartphone. The goal is to provide an optimal viewing experience—easy reading and navigation with minimal resizing, panning, and scrolling—across a wide range of devices.</p>
                    
                    <h3>Core Principles of Responsive Design</h3>
                    <h4>Fluid Grids</h4>
                    <p>Fluid grids use relative units like percentages, rather than absolute units like pixels, to define page layout. This allows the layout to resize proportionally based on the screen size. For example, instead of setting a container to be 960 pixels wide, you might set it to be 90% of the viewport width.</p>
                    
                    <h4>Flexible Images</h4>
                    <p>Images in responsive design should be able to resize within their containing elements. The most common technique is to use CSS to set max-width: 100% on images, which prevents them from overflowing their containers while maintaining their aspect ratio.</p>
                    
                    <h4>Media Queries</h4>
                    <p>Media queries allow you to apply different CSS styles based on device characteristics, such as screen width, height, orientation, and resolution. They enable you to create different layouts for different screen sizes. For example:</p>
                    <pre><code>@media (max-width: 768px) {
  /* Styles for screens smaller than 768px */
  .container {
    width: 90%;
  }
}</code></pre>
                    
                    <h3>Mobile-First Design</h3>
                    <p>Mobile-first design is an approach where you design for the smallest screen first and then progressively enhance the design for larger screens. This approach has several benefits:</p>
                    <ul>
                        <li>Forces you to focus on essential content and functionality</li>
                        <li>Results in faster loading times on mobile devices</li>
                        <li>Easier to maintain and scale up than to scale down</li>
                        <li>Aligns with the increasing dominance of mobile web traffic</li>
                    </ul>
                    
                    <h3>Breakpoints</h3>
                    <p>Breakpoints are the points at which your layout changes to accommodate different screen sizes. Common breakpoints include:</p>
                    <ul>
                        <li>Mobile: 320px - 480px</li>
                        <li>Tablet: 481px - 768px</li>
                        <li>Small Desktop: 769px - 1024px</li>
                        <li>Large Desktop: 1025px and above</li>
                    </ul>
                    <p>However, it's often better to base breakpoints on your content's needs rather than specific devices. This approach, called "content-first" or "device-agnostic" design, ensures your layout adapts to the content rather than predefined device sizes.</p>
                    
                    <h3>Responsive Navigation</h3>
                    <p>Navigation is one of the most challenging aspects of responsive design. Common responsive navigation patterns include:</p>
                    <ul>
                        <li><strong>Toggle Menu</strong>: A hamburger icon that expands to show navigation links on small screens</li>
                        <li><strong>Priority+ Navigation</strong>: Shows the most important links and hides the rest in a "more" dropdown</li>
                        <li><strong>Footer Anchor</strong>: Moves navigation to the footer on small screens</li>
                        <li><strong>Off-Canvas Navigation</strong>: Slides in from the side of the screen when activated</li>
                    </ul>
                    
                    <h3>Responsive Images</h3>
                    <p>Optimizing images for different screen sizes is crucial for performance. Techniques include:</p>
                    <ul>
                        <li><strong>srcset attribute</strong>: Provides multiple image sources for different resolutions</li>
                        <li><strong>sizes attribute</strong>: Helps the browser select the most appropriate image source</li>
                        <li><strong>Picture element</strong>: Allows for art direction with different images for different contexts</li>
                        <li><strong>Modern image formats</strong>: Using WebP or AVIF for better compression</li>
                    </ul>
                    
                    <h3>Responsive Typography</h3>
                    <p>Typography should also adapt to different screen sizes for optimal readability:</p>
                    <ul>
                        <li>Use relative units like rem or em for font sizes</li>
                        <li>Implement fluid typography with viewport units (vw)</li>
                        <li>Adjust line height and spacing for different screen sizes</li>
                        <li>Consider using CSS clamp() for minimum and maximum font sizes</li>
                    </ul>
                    
                    <h3>Touch Interactions</h3>
                    <p>On touch devices, consider these interaction patterns:</p>
                    <ul>
                        <li>Ensure touch targets are at least 44×44 pixels</li>
                        <li>Provide adequate spacing between interactive elements</li>
                        <li>Avoid hover-dependent interactions</li>
                        <li>Consider swipe gestures for navigation</li>
                    </ul>
                    
                    <h3>Performance Considerations</h3>
                    <p>Responsive design can impact performance, especially on mobile devices:</p>
                    <ul>
                        <li>Implement conditional loading for resources</li>
                        <li>Use lazy loading for images and non-critical content</li>
                        <li>Minimize HTTP requests</li>
                        <li>Optimize for mobile networks (3G/4G)</li>
                    </ul>
                    
                    <h3>Testing Responsive Designs</h3>
                    <p>Thorough testing is essential to ensure your responsive design works across all devices:</p>
                    <ul>
                        <li>Use browser developer tools for device simulation</li>
                        <li>Test on actual devices when possible</li>
                        <li>Use cloud-based testing services for device coverage</li>
                        <li>Check both portrait and landscape orientations</li>
                        <li>Test with different network conditions</li>
                    </ul>
                    
                    <h3>Conclusion</h3>
                    <p>Responsive web design is no longer optional in today's multi-device world. By implementing fluid grids, flexible images, and media queries, you can create websites that provide excellent user experiences across all devices. Remember that responsive design is an ongoing process that requires continuous testing and refinement as new devices and technologies emerge.</p>
                `,
  },
  "js-frameworks": {
    icon: "🎓",
    title: "Modern JavaScript Frameworks",
    content: `
                    <h3>The Evolution of JavaScript Frameworks</h3>
                    <p>JavaScript frameworks have revolutionized web development by providing structured approaches to building complex applications. From the early days of jQuery to modern component-based architectures, these frameworks have continuously evolved to meet the growing demands of web applications.</p>
                    
                    <h3>Why Use JavaScript Frameworks?</h3>
                    <p>JavaScript frameworks offer several advantages over vanilla JavaScript development:</p>
                    <ul>
                        <li><strong>Structured Code Organization</strong>: Frameworks provide clear patterns for organizing code, making it easier to maintain and scale applications.</li>
                        <li><strong>Component-Based Architecture</strong>: Modern frameworks encourage building UIs as reusable components, promoting code reusability and modularity.</li>
                        <li><strong>State Management</strong>: Frameworks provide solutions for managing application state, which becomes complex as applications grow.</li>
                        <li><strong>Performance Optimization</strong>: Frameworks include optimizations like virtual DOM, efficient rendering, and code splitting.</li>
                        <li><strong>Developer Experience</strong>: Features like hot reloading, dev tools, and rich ecosystems improve developer productivity.</li>
                    </ul>
                    
                    <h3>React</h3>
                    <p>React, developed by Facebook, is a library for building user interfaces with a component-based architecture. Key features include:</p>
                    <ul>
                        <li><strong>Virtual DOM</strong>: React uses a virtual DOM to efficiently update the actual DOM, improving performance.</li>
                        <li><strong>JSX</strong>: A syntax extension that allows mixing HTML with JavaScript, making component code more intuitive.</li>
                        <li><strong>Unidirectional Data Flow</strong>: Data flows in one direction, making applications more predictable and easier to debug.</li>
                        <li><strong>Hooks</strong>: Introduced in React 16.8, hooks allow using state and other React features without writing a class.</li>
                    </ul>
                    <p>React has a rich ecosystem with libraries like Redux for state management, React Router for navigation, and Next.js for server-side rendering.</p>
                    
                    <h3>Vue.js</h3>
                    <p>Vue.js is a progressive framework designed to be incrementally adoptable. Its core library focuses on the view layer only, making it easy to integrate with other libraries or existing projects. Key features include:</p>
                    <ul>
                        <li><strong>Reactivity System</strong>: Vue's reactivity system automatically tracks dependencies and updates the DOM when data changes.</li>
                        <li><strong>Templates</strong>: Vue uses HTML-based templates that are syntactically closer to standard HTML.</li>
                        <li><strong>Single-File Components</strong>: Components are defined in .vue files, containing template, script, and style sections.</li>
                        <li><strong>Composition API</strong>: An alternative to the Options API that provides more flexible code organization.</li>
                    </ul>
                    <p>Vue's ecosystem includes Vuex for state management, Vue Router for navigation, and Nuxt.js for server-side rendering.</p>
                    
                    <h3>Angular</h3>
                    <p>Angular, developed by Google, is a comprehensive framework for building large-scale applications. It's a complete rewrite of AngularJS and uses TypeScript as its primary language. Key features include:</p>
                    <ul>
                        <li><strong>TypeScript</strong>: Strong typing helps catch errors early and improves code maintainability.</li>
                        <li><strong>Dependency Injection</strong>: Built-in dependency injection system makes testing and managing dependencies easier.</li>
                        <li><strong>CLI</strong>: Angular CLI provides powerful tools for project generation, development, and deployment.</li>
                        <li><strong>Ivy Renderer</strong>: The latest rendering engine that produces smaller bundle sizes and faster compilation.</li>
                    </ul>
                    <p>Angular includes built-in solutions for routing, HTTP client, forms, and more, making it a comprehensive solution for enterprise applications.</p>
                    
                    <h3>Svelte</h3>
                    <p>Svelte is a newer framework that takes a different approach: it compiles components to highly efficient vanilla JavaScript at build time, rather than interpreting code in the browser. Key features include:</p>
                    <ul>
                        <li><strong>No Virtual DOM</strong>: Svelte updates the DOM directly, resulting in faster performance.</li>
                        <li><strong>Smaller Bundle Sizes</strong>: Since it compiles away framework code, applications have smaller footprints.</li>
                        <li><strong>Reactive Declarations</strong>: Simple syntax for creating reactive variables and computations.</li>
                        <li><strong>Built-in Transitions</strong>: Easy-to-use animations and transitions between UI states.</li>
                    </ul>
                    
                    <h3>Choosing the Right Framework</h3>
                    <p>When selecting a framework for your project, consider these factors:</p>
                    <ul>
                        <li><strong>Project Size and Complexity</strong>: Angular is well-suited for large enterprise applications, while React and Vue are more flexible for projects of various sizes.</li>
                        <li><strong>Learning Curve</strong>: Vue is often considered the easiest to learn, followed by React, then Angular.</li>
                        <li><strong>Performance Requirements</strong>: Svelte offers the best runtime performance, while React and Vue have good performance with virtual DOM.</li>
                        <li><strong>Ecosystem and Community</strong>: React has the largest ecosystem, followed by Angular and Vue.</li>
                        <li><strong>TypeScript Support</strong>: Angular has built-in TypeScript support, while React and Vue have good TypeScript integration.</li>
                        <li><strong>Job Market</strong>: Consider the demand for each framework in your target job market.</li>
                    </ul>
                    
                    <h3>State Management Solutions</h3>
                    <p>As applications grow, managing state becomes increasingly important. Popular state management solutions include:</p>
                    <ul>
                        <li><strong>Redux</strong>: Predictable state container for JavaScript apps, commonly used with React.</li>
                        <li><strong>MobX</strong>: Simple, scalable state management using observable patterns.</li>
                        <li><strong>Vuex</strong>: State management pattern and library for Vue.js applications.</li>
                        <li><strong>NgRx</strong>: Reactive state management for Angular applications.</li>
                        <li><strong>Zustand</strong>: A small, fast, and scalable state management solution.</li>
                    </ul>
                    
                    <h3>Testing Strategies</h3>
                    <p>Testing is crucial for maintaining code quality in framework-based applications:</p>
                    <ul>
                        <li><strong>Unit Testing</strong>: Testing individual components or functions in isolation.</li>
                        <li><strong>Integration Testing</strong>: Testing how components work together.</li>
                        <li><strong>End-to-End Testing</strong>: Testing the entire application flow from a user's perspective.</li>
                    </ul>
                    <p>Popular testing tools include Jest, React Testing Library, Vue Test Utils, and Cypress.</p>
                    
                    <h3>Performance Optimization</h3>
                    <p>Optimizing framework-based applications involves several techniques:</p>
                    <ul>
                        <li><strong>Code Splitting</strong>: Splitting code into smaller chunks that can be loaded on demand.</li>
                        <li><strong>Lazy Loading</strong>: Loading components or routes only when needed.</li>
                        <li><strong>Tree Shaking</strong>: Eliminating unused code from the final bundle.</li>
                        <li><strong>Server-Side Rendering</strong>: Generating HTML on the server for faster initial page loads.</li>
                        <li><strong>Static Site Generation</strong>: Pre-rendering pages at build time for better performance.</li>
                    </ul>
                    
                    <h3>The Future of JavaScript Frameworks</h3>
                    <p>The JavaScript framework landscape continues to evolve with emerging trends:</p>
                    <ul>
                        <li><strong>Micro-Frontends</strong>: Breaking down large applications into smaller, independently deployable parts.</li>
                        <li><strong>WebAssembly</strong>: Using WebAssembly to run high-performance code in the browser.</li>
                        <li><strong>JIT Compilation</strong>: Just-in-time compilation for better runtime performance.</li>
                        <li><strong>Island Architecture</strong>: Combining server-rendered pages with interactive client-side components.</li>
                    </ul>
                    
                    <h3>Conclusion</h3>
                    <p>JavaScript frameworks have transformed web development by providing structured approaches to building complex applications. Whether you choose React, Vue, Angular, Svelte, or another framework, understanding their core concepts and best practices is essential for modern web development. As the ecosystem continues to evolve, staying informed about new developments and patterns will help you build better applications.</p>
                `,
  },
  "ml-datasets": {
    icon: "📊",
    title: "Machine Learning Datasets",
    content: `
                    <h3>The Importance of Quality Datasets</h3>
                    <p>Quality datasets are the foundation of successful machine learning projects. The performance of machine learning models is directly influenced by the quality, quantity, and relevance of the training data. As the saying goes, "garbage in, garbage out" - even the most sophisticated algorithms cannot produce meaningful results from poor-quality data.</p>
                    
                    <h3>Characteristics of Good Datasets</h3>
                    <p>Effective machine learning datasets should have these characteristics:</p>
                    <ul>
                        <li><strong>Relevance</strong>: The data should be relevant to the problem you're trying to solve.</li>
                        <li><strong>Size</strong>: Sufficiently large to capture the complexity of the problem and avoid overfitting.</li>
                        <li><strong>Quality</strong>: Accurate, consistent, and free from significant errors or biases.</li>
                        <li><strong>Diversity</strong>: Representative of the real-world scenarios the model will encounter.</li>
                        <li><strong>Balance</strong>: For classification tasks, classes should be appropriately balanced to avoid bias.</li>
                    </ul>
                    
                    <h3>Popular Public Datasets</h3>
                    <h4>Image Recognition</h4>
                    <ul>
                        <li><strong>ImageNet</strong>: Large-scale dataset with over 14 million images across 20,000 categories.</li>
                        <li><strong>CIFAR-10/100</strong>: 60,000 32x32 color images in 10 or 100 classes.</li>
                        <li><strong>MNIST</strong>: 70,000 handwritten digits, often used as a benchmark dataset.</li>
                        <li><strong>COCO (Common Objects in Context)</strong>: Large-scale object detection, segmentation, and captioning dataset.</li>
                    </ul>
                    
                    <h4>Natural Language Processing</h4>
                    <ul>
                        <li><strong>IMDb Reviews</strong>: 50,000 movie reviews for sentiment analysis.</li>
                        <li><strong>Wikipedia Text Corpus</strong>: Large corpus of Wikipedia articles for various NLP tasks.</li>
                        <li><strong>GLUE (General Language Understanding Evaluation)</strong>: Benchmark for evaluating language models.</li>
                        <li><strong>SQuAD (Stanford Question Answering Dataset)</strong>: Reading comprehension dataset with questions and answers.</li>
                    </ul>
                    
                    <h4>Tabular Data</h4>
                    <ul>
                        <li><strong>UCI Machine Learning Repository</strong>: Collection of databases, domain theories, and data generators.</li>
                        <li><strong>Kaggle Datasets</strong>: Wide variety of datasets from Kaggle competitions and community contributions.</li>
                        <li><strong>California Housing Prices</strong>: Housing data with various features for regression tasks.</li>
                        <li><strong>Titanic: Machine Learning from Disaster</strong>: Classic dataset for binary classification.</li>
                    </ul>
                    
                    <h4>Time Series</h4>
                    <ul>
                        <li><strong>Airline Passengers</strong>: Monthly airline passenger numbers from 1949 to 1960.</li>
                        <li><strong>Electricity Consumption</strong>: Hourly electricity consumption data.</li>
                        <li><strong>Stock Market Data</strong>: Historical stock prices and trading volumes.</li>
                        <li><strong>Weather Data</strong>: Historical weather measurements from various locations.</li>
                    </ul>
                    
                    <h3>Data Preprocessing Techniques</h3>
                    <p>Raw data often requires preprocessing before it can be used for machine learning:</p>
                    <ul>
                        <li><strong>Data Cleaning</strong>: Handling missing values, removing duplicates, and correcting errors.</li>
                        <li><strong>Data Transformation</strong>: Normalization, standardization, and encoding categorical variables.</li>
                        <li><strong>Feature Engineering</strong>: Creating new features from existing data to improve model performance.</li>
                        <li><strong>Data Augmentation</strong>: Artificially increasing dataset size by creating modified copies of existing data.</li>
                        <li><strong>Data Splitting</strong>: Dividing data into training, validation, and test sets.</li>
                    </ul>
                    
                    <h3>Data Collection Strategies</h3>
                    <p>When public datasets aren't sufficient, consider these data collection methods:</p>
                    <ul>
                        <li><strong>Web Scraping</strong>: Extracting data from websites using tools like BeautifulSoup or Scrapy.</li>
                        <li><strong>APIs</strong>: Accessing data through application programming interfaces provided by services.</li>
                        <li><strong>Surveys and Questionnaires</strong>: Collecting data directly from users or experts.</li>
                        <li><strong>Sensors and IoT Devices</strong>: Gathering real-time data from physical devices.</li>
                        <li><strong>Synthetic Data Generation</strong>: Creating artificial data that mimics real-world patterns.</li>
                    </ul>
                    
                    <h3>Data Ethics and Bias</h3>
                    <p>Ethical considerations are crucial when working with datasets:</p>
                    <ul>
                        <li><strong>Privacy Protection</strong>: Ensuring personal data is anonymized and protected.</li>
                        <li><strong>Bias Detection and Mitigation</strong>: Identifying and addressing biases in data that could lead to unfair models.</li>
                        <li><strong>Informed Consent</strong>: Obtaining proper consent when collecting data from individuals.</li>
                        <li><strong>Transparency</strong>: Being clear about how data is collected and used.</li>
                        <li><strong>Fairness</strong>: Ensuring datasets represent diverse populations and perspectives.</li>
                    </ul>
                    
                    <h3>Data Versioning and Management</h3>
                    <p>Proper data management is essential for reproducible research and development:</p>
                    <ul>
                        <li><strong>Version Control</strong>: Tracking changes to datasets over time using tools like DVC or Git LFS.</li>
                        <li><strong>Metadata Documentation</strong>: Maintaining detailed documentation about dataset sources, collection methods, and characteristics.</li>
                        <li><strong>Data Lineage</strong>: Tracking the origin and transformations applied to data.</li>
                        <li><strong>Storage Solutions</strong>: Choosing appropriate storage based on data size, access patterns, and cost.</li>
                    </ul>
                    
                    <h3>Specialized Dataset Repositories</h3>
                    <p>Beyond general repositories, specialized datasets are available for specific domains:</p>
                    <ul>
                        <li><strong>Healthcare</strong>: MIMIC, ChestX-ray14, and COVID-19 datasets.</li>
                        <li><strong>Finance</strong>: Quandl, Alpha Vantage, and Yahoo Finance datasets.</li>
                        <li><strong>Climate and Environment</strong>: NASA Earthdata, NOAA datasets.</li>
                        <li><strong>Social Sciences</strong>: World Bank Open Data, Gapminder.</li>
                        <li><strong>Autonomous Driving</strong>: KITTI, BDD100K, and Waymo Open Dataset.</li>
                    </ul>
                    
                    <h3>Creating Your Own Dataset</h3>
                    <p>When creating custom datasets, follow these best practices:</p>
                    <ul>
                        <li>Define clear objectives and requirements for the dataset.</li>
                        <li>Establish consistent data collection and annotation procedures.</li>
                        <li>Implement quality control measures to ensure data accuracy.</li>
                        <li>Document the dataset thoroughly, including any limitations.</li>
                        <li>Consider making the dataset available to the research community when appropriate.</li>
                    </ul>
                    
                    <h3>Conclusion</h3>
                    <p>High-quality datasets are essential for developing effective machine learning models. By understanding where to find relevant datasets, how to preprocess them, and how to work with them ethically, you can build more accurate and fair machine learning systems. As the field continues to evolve, new datasets and data management techniques will emerge, providing even more opportunities for innovation in machine learning.</p>
                `,
  },
  "dev-tools": {
    icon: "🛠️",
    title: "Development Tools",
    content: `
                    <h3>The Evolution of Development Tools</h3>
                    <p>Modern web development relies on a sophisticated ecosystem of tools that streamline workflows, improve code quality, and enhance productivity. From simple text editors to comprehensive development environments, these tools have evolved dramatically to meet the increasing complexity of web applications.</p>
                    
                    <h3>Code Editors and IDEs</h3>
                    <p>The choice of code editor or Integrated Development Environment (IDE) significantly impacts developer productivity:</p>
                    <ul>
                        <li><strong>Visual Studio Code</strong>: Free, open-source editor with extensive extension marketplace, integrated terminal, and excellent TypeScript support.</li>
                        <li><strong>WebStorm</strong>: Commercial IDE from JetBrains with powerful refactoring tools, intelligent code completion, and integrated debugging.</li>
                        <li><strong>Sublime Text</strong>: Lightweight, fast editor known for its speed and minimal interface, with a robust package ecosystem.</li>
                        <li><strong>Atom</strong>: Open-source editor developed by GitHub, highly customizable with packages and themes.</li>
                        <li><strong>Vim/Neovim</strong>: Highly efficient modal editors favored by many experienced developers for their speed and keyboard-centric workflow.</li>
                    </ul>
                    
                    <h3>Version Control Systems</h3>
                    <p>Version control is fundamental to modern software development, enabling collaboration and code management:</p>
                    <ul>
                        <li><strong>Git</strong>: Distributed version control system that has become the industry standard. Key concepts include repositories, commits, branches, and merges.</li>
                        <li><strong>GitHub</strong>: Web-based hosting service for Git repositories with features like pull requests, issue tracking, and project management.</li>
                        <li><strong>GitLab</strong>: Complete DevOps platform that includes Git repository management, CI/CD, and monitoring.</li>
                        <li><strong>Bitbucket</strong>: Git-based code hosting and collaboration platform with integration with other Atlassian products.</li>
                    </ul>
                    
                    <h3>Package Managers</h3>
                    <p>Package managers simplify dependency management and project setup:</p>
                    <ul>
                        <li><strong>npm</strong>: Default package manager for Node.js, with the largest registry of JavaScript packages.</li>
                        <li><strong>Yarn</strong>: Fast, reliable, and secure alternative to npm with improved dependency resolution.</li>
                        <li><strong>pnpm</strong>: Efficient package manager that uses symlinks to save disk space and installation time.</li>
                        <li><strong>Bower</strong>: Package manager for front-end components (largely superseded by npm/yarn).</li>
                    </ul>
                    
                    <h3>Build Tools and Task Runners</h3>
                    <p>Build tools automate common development tasks and optimize assets for production:</p>
                    <ul>
                        <li><strong>Webpack</strong>: Powerful module bundler that can process and bundle various asset types with extensive plugin ecosystem.</li>
                        <li><strong>Vite</strong>: Next-generation build tool that provides fast development server and optimized builds.</li>
                        <li><strong>Parcel</strong>: Zero-configuration bundler that offers out-of-the-box support for various file types.</li>
                        <li><strong>Rollup</strong>: Module bundler focused on producing small, efficient bundles for libraries.</li>
                        <li><strong>Gulp</strong>: Task runner that uses streams to process files, ideal for complex build pipelines.</li>
                        <li><strong>Grunt</strong>: Task runner with a large plugin ecosystem for automating repetitive tasks.</li>
                    </ul>
                    
                    <h3>Testing Frameworks</h3>
                    <p>Testing is crucial for maintaining code quality and preventing regressions:</p>
                    <ul>
                        <li><strong>Jest</strong>: Delightful JavaScript testing framework with built-in assertions, mocking, and coverage.</li>
                        <li><strong>Mocha</strong>: Flexible testing framework that works with various assertion libraries.</li>
                        <li><strong>Jasmine</strong>: Behavior-driven development framework with no external dependencies.</li>
                        <li><strong>Cypress</strong>: End-to-end testing framework with excellent developer experience and debugging capabilities.</li>
                        <li><strong>Selenium</strong>: Browser automation framework for end-to-end testing across multiple browsers.</li>
                        <li><strong>Testing Library</strong>: Family of libraries that promote testing best practices with simple and complete utilities.</li>
                    </ul>
                    
                    <h3>Linting and Code Quality</h3>
                    <p>Linters and formatters help maintain consistent code style and catch potential errors:</p>
                    <ul>
                        <li><strong>ESLint</strong>: Pluggable linter for JavaScript and JSX with extensive rule set and customization options.</li>
                        <li><strong>Prettier</strong>: Opinionated code formatter that enforces a consistent style across the codebase.</li>
                        <li><strong>Stylelint</strong>: Powerful linter for CSS that helps avoid errors and enforce conventions.</li>
                        <li><strong>TSLint</strong>: Linter for TypeScript (largely superseded by ESLint with TypeScript support).</li>
                    </ul>
                    
                    <h3>Debugging Tools</h3>
                    <p>Effective debugging tools are essential for identifying and fixing issues:</p>
                    <ul>
                        <li><strong>Browser DevTools</strong>: Built-in developer tools in modern browsers for inspecting HTML, CSS, JavaScript, and network activity.</li>
                        <li><strong>React Developer Tools</strong>: Browser extension for inspecting React component hierarchies, state, and props.</li>
                        <li><strong>Vue DevTools</strong>: Browser extension for debugging Vue.js applications.</li>
                        <li><strong>Redux DevTools</strong>: Time-travel debugging and state inspection for Redux applications.</li>
                        <li><strong>VS Code Debugger</strong>: Integrated debugging in Visual Studio Code with breakpoints, watch expressions, and call stacks.</li>
                    </ul>
                    
                    <h3>API Development and Testing</h3>
                    <p>Tools for building and testing APIs:</p>
                    <ul>
                        <li><strong>Postman</strong>: Collaboration platform for API development with features for testing, documentation, and monitoring.</li>
                        <li><strong>Insomnia</strong>: REST client with focus on GraphQL support and collaborative features.</li>
                        <li><strong>Swagger/OpenAPI</strong>: Specification for defining RESTful APIs with tools for documentation and client generation.</li>
                        <li><strong>GraphQL Playground</strong>: IDE for GraphQL development with features for schema exploration and query testing.</li>
                    </ul>
                    
                    <h3>Containerization and Virtualization</h3>
                    <p>Containerization tools ensure consistent environments across development and production:</p>
                    <ul>
                        <li><strong>Docker</strong>: Platform for developing, shipping, and running applications in containers.</li>
                        <li><strong>Docker Compose</strong>: Tool for defining and running multi-container Docker applications.</li>
                        <li><strong>Kubernetes</strong>: Container orchestration platform for automating deployment, scaling, and management.</li>
                        <li><strong>Vagrant</strong>: Tool for building and managing virtual machine environments.</li>
                    </ul>
                    
                    <h3>Continuous Integration and Deployment</h3>
                    <p>CI/CD tools automate the testing and deployment process:</p>
                    <ul>
                        <li><strong>Jenkins</strong>: Open-source automation server with extensive plugin ecosystem.</li>
                        <li><strong>GitHub Actions</strong>: CI/CD platform directly integrated with GitHub repositories.</li>
                        <li><strong>GitLab CI/CD</strong>: Built-in continuous integration and deployment in GitLab.</li>
                        <li><strong>CircleCI</strong>: Cloud-based CI/CD platform with simple configuration and fast builds.</li>
                        <li><strong>Travis CI</strong>: Cloud-based CI service with GitHub integration.</li>
                    </ul>
                    
                    <h3>Performance Monitoring</h3>
                    <p>Tools for monitoring application performance and identifying bottlenecks:</p>
                    <ul>
                        <li><strong>Lighthouse</strong>: Open-source tool for improving web page quality with performance, accessibility, and SEO audits.</li>
                        <li><strong>WebPageTest</strong>: Online tool for website performance testing from multiple locations.</li>
                        <li><strong>Google PageSpeed Insights</strong>: Tool that analyzes page content and provides suggestions for speed improvements.</li>
                        <li><strong>New Relic</strong>: Full-stack observability platform for monitoring application performance.</li>
                        <li><strong>Sentry</strong>: Error monitoring tool that helps track and fix crashes in real-time.</li>
                    </ul>
                    
                    <h3>Documentation Tools</h3>
                    <p>Good documentation is essential for maintainable software:</p>
                    <ul>
                        <li><strong>Markdown</strong>: Lightweight markup language for creating formatted text using plain text editor.</li>
                        <li><strong>JSDoc</strong>: Documentation generator for JavaScript code from inline comments.</li>
                        <li><strong>Swagger UI</strong>: Interactive documentation for APIs defined with OpenAPI specification.</li>
                        <li><strong>Docusaurus</strong>: Tool for building optimized websites easily with Markdown.</li>
                        <li><strong>Storybook</strong>: Development environment for UI components with documentation and testing.</li>
                    </ul>
                    
                    <h3>Setting Up a Productive Development Environment</h3>
                    <p>Creating an efficient development environment involves:</p>
                    <ol>
                        <li>Choosing the right code editor and configuring it with useful extensions.</li>
                        <li>Setting up version control and establishing branching strategies.</li>
                        <li>Configuring linters and formatters to maintain code quality.</li>
                        <li>Implementing automated testing and CI/CD pipelines.</li>
                        <li>Setting up local development environments with Docker or similar tools.</li>
                        <li>Establishing documentation practices and tools.</li>
                    </ol>
                    
                    <h3>Conclusion</h3>
                    <p>The modern web development tool ecosystem is vast and continuously evolving. While it can be overwhelming to keep up with all the tools, focusing on those that solve specific problems in your workflow can significantly improve productivity and code quality. The key is to find the right balance between tool complexity and the benefits they provide, always keeping in mind that tools should serve the development process, not complicate it.</p>
                `,
  },
  "data-science": {
    icon: "🎓",
    title: "Data Science Fundamentals",
    content: `
                    <h3>What is Data Science?</h3>
                    <p>Data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It combines expertise from statistics, computer science, domain knowledge, and data visualization to solve complex problems and make data-driven decisions.</p>
                    
                    <h3>The Data Science Lifecycle</h3>
                    <p>Data science projects typically follow a structured lifecycle:</p>
                    <ol>
                        <li><strong>Problem Definition</strong>: Clearly defining the business problem or research question to be addressed.</li>
                        <li><strong>Data Collection</strong>: Gathering relevant data from various sources including databases, APIs, web scraping, and surveys.</li>
                        <li><strong>Data Cleaning and Preparation</strong>: Processing raw data to handle missing values, outliers, and inconsistencies.</li>
                        <li><strong>Exploratory Data Analysis (EDA)</strong>: Analyzing data to understand its characteristics, patterns, and relationships.</li>
                        <li><strong>Feature Engineering</strong>: Creating new features from existing data to improve model performance.</li>
                        <li><strong>Model Development</strong>: Building and training machine learning models to make predictions or uncover patterns.</li>
                        <li><strong>Model Evaluation</strong>: Assessing model performance using appropriate metrics and validation techniques.</li>
                        <li><strong>Deployment</strong>: Implementing the model in a production environment to make predictions on new data.</li>
                        <li><strong>Monitoring and Maintenance</strong>: Continuously monitoring model performance and updating as needed.</li>
                    </ol>
                    
                    <h3>Essential Skills for Data Scientists</h3>
                    <h4>Statistical Knowledge</h4>
                    <p>A strong foundation in statistics is crucial for data science:</p>
                    <ul>
                        <li>Descriptive statistics (mean, median, mode, variance, standard deviation)</li>
                        <li>Inferential statistics (hypothesis testing, confidence intervals)</li>
                        <li>Probability theory and distributions</li>
                        <li>Experimental design and A/B testing</li>
                    </ul>
                    
                    <h4>Programming Skills</h4>
                    <p>Data scientists need proficiency in programming languages for data manipulation and analysis:</p>
                    <ul>
                        <li><strong>Python</strong>: Most popular language for data science with libraries like NumPy, pandas, scikit-learn, and TensorFlow.</li>
                        <li><strong>R</strong>: Statistical programming language with extensive packages for data analysis and visualization.</li>
                        <li><strong>SQL</strong>: Essential for querying and manipulating data in relational databases.</li>
                        <li><strong>Scala/Java</strong>: Used in big data ecosystems like Apache Spark.</li>
                    </ul>
                    
                    <h4>Data Visualization</h4>
                    <p>Effective visualization helps communicate insights and findings:</p>
                    <ul>
                        <li>Understanding chart types and when to use them</li>
                        <li>Tools like Matplotlib, Seaborn, ggplot2, and Tableau</li>
                        <li>Principles of effective data visualization</li>
                        <li>Interactive visualizations with libraries like Plotly and D3.js</li>
                    </ul>
                    
                    <h4>Machine Learning</h4>
                    <p>Machine learning is a core component of data science:</p>
                    <ul>
                        <li>Supervised learning (regression, classification)</li>
                        <li>Unsupervised learning (clustering, dimensionality reduction)</li>
                        <li>Model evaluation and selection</li>
                        <li>Feature selection and importance</li>
                        <li>Ensemble methods (random forests, gradient boosting)</li>
                    </ul>
                    
                    <h4>Domain Knowledge</h4>
                    <p>Understanding the business or research domain is essential for:</p>
                    <ul>
                        <li>Asking the right questions</li>
                        <li>Interpreting results in context</li>
                        <li>Identifying relevant features</li>
                        <li>Communicating findings effectively to stakeholders</li>
                    </ul>
                    
                    <h3>Data Collection and Sources</h3>
                    <p>Data can come from various sources:</p>
                    <ul>
                        <li><strong>Internal Databases</strong>: Company databases containing transactional data, customer information, and operational metrics.</li>
                        <li><strong>Public Datasets</strong>: Government data, research datasets, and open data initiatives.</li>
                        <li><strong>APIs</strong>: Application Programming Interfaces that provide access to data from web services.</li>
                        <li><strong>Web Scraping</strong>: Extracting data from websites using tools like BeautifulSoup and Scrapy.</li>
                        <li><strong>Sensors and IoT Devices</strong>: Real-time data from physical devices and sensors.</li>
                        <li><strong>Social Media</strong>: Data from platforms like Twitter, Facebook, and Instagram.</li>
                    </ul>
                    
                    <h3>Data Cleaning and Preparation</h3>
                    <p>Data cleaning is often the most time-consuming part of data science projects:</p>
                    <ul>
                        <li><strong>Handling Missing Values</strong>: Techniques like imputation, deletion, or using algorithms that handle missing data.</li>
                        <li><strong>Outlier Detection</strong>: Identifying and handling extreme values that may skew analysis.</li>
                        <li><strong>Data Transformation</strong>: Normalization, standardization, and encoding categorical variables.</li>
                        <li><strong>Data Integration</strong>: Combining data from multiple sources into a unified dataset.</li>
                        <li><strong>Data Quality Assessment</strong>: Evaluating the accuracy, completeness, and consistency of data.</li>
                    </ul>
                    
                    <h3>Exploratory Data Analysis (EDA)</h3>
                    <p>EDA involves examining data to understand its properties and relationships:</p>
                    <ul>
                        <li>Summary statistics and data distribution</li>
                        <li>Correlation analysis between variables</li>
                        <li>Visualization of data patterns and trends</li>
                        <li>Identification of potential relationships and hypotheses</li>
                        <li>Feature selection based on relevance to the problem</li>
                    </ul>
                    
                    <h3>Machine Learning Models</h3>
                    <h4>Supervised Learning</h4>
                    <ul>
                        <li><strong>Regression</strong>: Predicting continuous values (e.g., house prices, temperature).</li>
                        <li><strong>Classification</strong>: Predicting discrete categories (e.g., spam detection, image classification).</li>
                        <li>Common algorithms: Linear regression, logistic regression, decision trees, random forests, support vector machines, neural networks.</li>
                    </ul>
                    
                    <h4>Unsupervised Learning</h4>
                    <ul>
                        <li><strong>Clustering</strong>: Grouping similar data points together (e.g., customer segmentation).</li>
                        <li><strong>Dimensionality Reduction</strong>: Reducing the number of features while preserving important information (e.g., PCA, t-SNE).</li>
                        <li><strong>Association Rule Learning</strong>: Discovering relationships between variables (e.g., market basket analysis).</li>
                    </ul>
                    
                    <h3>Model Evaluation and Validation</h3>
                    <p>Evaluating model performance is crucial for ensuring reliability:</p>
                    <ul>
                        <li><strong>Train-Test Split</strong>: Dividing data into training and testing sets.</li>
                        <li><strong>Cross-Validation</strong>: Technique for assessing model performance with limited data.</li>
                        <li><strong>Performance Metrics</strong>: Accuracy, precision, recall, F1-score, ROC-AUC, MSE, MAE, R-squared.</li>
                        <li><strong>Overfitting and Underfitting</strong>: Balancing model complexity to generalize well to new data.</li>
                    </ul>
                    
                    <h3>Big Data Technologies</h3>
                    <p>For handling large-scale data, data scientists use:</p>
                    <ul>
                        <li><strong>Hadoop</strong>: Framework for distributed storage and processing of big data.</li>
                        <li><strong>Spark</strong>: Unified analytics engine for large-scale data processing.</li>
                        <li><strong>NoSQL Databases</strong>: MongoDB, Cassandra, Redis for handling unstructured data.</li>
                        <li><strong>Data Warehouses</strong>: Amazon Redshift, Google BigQuery, Snowflake for analytical processing.</li>
                    </ul>
                    
                    <h3>Data Communication and Storytelling</h3>
                    <p>Communicating findings effectively is as important as the analysis itself:</p>
                    <ul>
                        <li>Creating compelling visualizations that highlight key insights</li>
                        <li>Building narratives around data to make findings memorable</li>
                        <li>Tailoring communication to different audiences (technical vs. non-technical)</li>
                        <li>Using dashboards and reports for ongoing monitoring</li>
                    </ul>
                    
                    <h3>Ethical Considerations in Data Science</h3>
                    <p>Data scientists must consider ethical implications:</p>
                    <ul>
                        <li><strong>Privacy</strong>: Protecting personal data and complying with regulations like GDPR.</li>
                        <li><strong>Bias and Fairness</strong>: Ensuring models don't perpetuate or amplify biases.</li>
                        <li><strong>Transparency</strong>: Making model decisions interpretable and explainable.</li>
                        <li><strong>Accountability</strong>: Taking responsibility for the impact of data-driven decisions.</li>
                    </ul>
                    
                    <h3>Practical Applications of Data Science</h3>
                    <p>Data science is applied across various industries:</p>
                    <ul>
                        <li><strong>Healthcare</strong>: Disease prediction, drug discovery, personalized treatment.</li>
                        <li><strong>Finance</strong>: Fraud detection, risk assessment, algorithmic trading.</li>
                        <li><strong>Retail</strong>: Recommendation systems, demand forecasting, customer segmentation.</li>
                        <li><strong>Manufacturing</strong>: Predictive maintenance, quality control, supply chain optimization.</li>
                        <li><strong>Transportation</strong>: Route optimization, demand prediction, autonomous vehicles.</li>
                        <li><strong>Marketing</strong>: Customer lifetime value, campaign optimization, sentiment analysis.</li>
                    </ul>
                    
                    <h3>Getting Started in Data Science</h3>
                    <p>For those interested in pursuing data science:</p>
                    <ol>
                        <li>Build a strong foundation in statistics and mathematics.</li>
                        <li>Learn programming languages like Python or R.</li>
                        <li>Practice with real datasets on platforms like Kaggle.</li>
                        <li>Work on personal projects to build a portfolio.</li>
                        <li>Stay updated with the latest developments in the field.</li>
                        <li>Develop communication skills to effectively share insights.</li>
                    </ol>
                    
                    <h3>Conclusion</h3>
                    <p>Data science is a dynamic and rapidly evolving field that combines technical skills with domain knowledge and business acumen. By mastering the fundamentals of data collection, cleaning, analysis, and visualization, data scientists can extract valuable insights from data and drive informed decision-making. As organizations continue to recognize the value of data-driven approaches, the demand for skilled data scientists is likely to grow, making it an exciting and rewarding career path.</p>
                `,
  },
};


// Filter functionality
const filterBtns = document.querySelectorAll(".filter-btn");
const resourceCards = document.querySelectorAll(".resource-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));

    // Add active class to clicked button
    this.classList.add("active");

    // Get filter value
    const filterValue = this.getAttribute("data-filter");

    // Show/hide resource cards based on filter
    resourceCards.forEach((card) => {
      if (
        filterValue === "all" ||
        card.getAttribute("data-category") === filterValue
      ) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Modal functionality
const modal = document.getElementById("resourceModal");
const modalTitle = document.getElementById("modalTitle");
const modalIcon = document.getElementById("modalIcon");
const modalContent = document.getElementById("modalContent");
const closeModalBtn = document.getElementById("closeModal");
const closeModalIconBtn = document.getElementById("closeModalIcon");
const resourceBtns = document.querySelectorAll(".resource-btn");

// Open modal when resource button is clicked
resourceBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    // Get resource ID
    const resourceId = this.getAttribute("data-id");

    // Get resource data from JavaScript object
    const resource = resourceContent[resourceId];

    if (resource) {
      // Set modal content
      modalTitle.textContent = resource.title;
      modalIcon.textContent = resource.icon;
      modalContent.innerHTML = resource.content;

      // Show modal
      modal.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent scrolling

      // Scroll to top of modal content
      modalContent.scrollTop = 0;
    }
  });
});

// Close modal when close button is clicked
closeModalBtn.addEventListener("click", function () {
  modal.classList.remove("active");
  document.body.style.overflow = "auto"; // Enable scrolling
});

// Close modal when close icon is clicked
closeModalIconBtn.addEventListener("click", function () {
  modal.classList.remove("active");
  document.body.style.overflow = "auto"; // Enable scrolling
});

// Close modal when clicking outside of modal content
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto"; // Enable scrolling
  }
});