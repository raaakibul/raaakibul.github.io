// Example blog data
const blogPosts = [
    {
        // id: 1,
        // title: "Getting Started with Machine Learning",
        // category: "Machine Learning",
        // desc: "If you’re new to ML, this post covers the foundational concepts, libraries, and resources to get you up and running as an ML practitioner.",
        // content: `Machine Learning (ML) is a branch of Artificial Intelligence that enables computers to learn from data. In this article, I'll guide you through basic ML concepts, popular libraries like scikit-learn, TensorFlow, and PyTorch, and how to choose your first project. \n\nTips:\n- Start with supervised learning algorithms.\n- Practice on datasets from Kaggle or UCI ML Repository.\n- Read documentation and join ML communities for support.`,
        // author: "Rakibul Islam",
        // date: "2024-06-05"
    },
    {
        // id: 2,
        // title: "Data Science: From Zero to Hero",
        // category: "Data Science",
        // desc: "A roadmap for beginners on how to learn data science, recommended resources, and building your first portfolio project.",
        // content: `Data Science is all about extracting insights from data. The journey begins with learning Python, statistics, and visualization tools like matplotlib and seaborn. Building a portfolio is key!\n\nChecklist:\n- Master Python basics\n- Learn Pandas and Numpy\n- Explore real datasets\n- Share your projects on GitHub`,
        // author: "Rakibul Islam",
        // date: "2024-06-10"
    },
    {
        // id: 3,
        // title: "Introduction to Neural Networks",
        // category: "AI",
        // desc: "Understand the basics of neural networks, how they work, and where to apply them in real-world scenarios.",
        // content: `Neural networks power many AI applications today. They consist of layers of interconnected nodes. This post explains feedforward networks, activation functions, and gives an implementation example in Python with TensorFlow.`,
        // author: "Rakibul Islam",
        // date: "2024-06-15"
    },
    {
        // id: 4,
        // title: "Python Tricks for Data Scientists",
        // category: "Python",
        // desc: "Level up your Python game with these tips, tricks, and lesser-known features for data science and analysis.",
        // content: `Python has many features that make data analysis easier. List comprehensions, lambda functions, itertools, and more! Here are some code snippets and use cases for each feature.`,
        // author: "Rakibul Islam",
        // date: "2024-06-20"
    },
    {
        // id: 5,
        // title: "Recent Advances in Deep Learning",
        // category: "Machine Learning",
        // desc: "Exploring the latest breakthroughs in deep learning architectures and their applications.",
        // content: `Deep learning is evolving rapidly. Transformers, GANs, and self-supervised learning are changing the field. Learn about the most influential papers and open-source projects to watch in 2024.`,
        // author: "Rakibul Islam",
        // date: "2024-07-01"
    },
    {
        id: 1,
        title: "My Thesis Journey: Deep Learning-Based Background Noise Classification and Reduction for Audio Enhancement",
        category: "Research",
        desc: "A personal reflection on my thesis and experiments with deep learning for audio noise reduction.",
        content: `During my undergraduate thesis, I worked on background noise classification and reduction for audio signals. In this article, I share the methodology, challenges, and results of my experiments, plus code snippets for reproducibility.`,
        author: "Rakibul Islam",
        date: "2024-07-10"
    },
    // Add more posts for demo purposes
];

// Pagination and filtering state
let currentPage = 1;
const postsPerPage = 3;
let filteredPosts = blogPosts.slice();
let sortAsc = false;

// Blog rendering
function renderBlogList() {
    const blogList = document.getElementById('blog-list');
    blogList.innerHTML = '';

    const startIdx = (currentPage - 1) * postsPerPage;
    const endIdx = startIdx + postsPerPage;
    const postsToShow = filteredPosts.slice(startIdx, endIdx);

    if (postsToShow.length === 0) {
        blogList.innerHTML = '<p>No blog posts found.</p>';
        return;
    }

    postsToShow.forEach(post => {
        const card = document.createElement('div');
        card.className = "blog-card";
        card.innerHTML = `
            <div class="blog-title">${post.title}</div>
            <div class="blog-meta">
                <span class="blog-category-tag">${post.category}</span>
                <span><i class="fas fa-user"></i> ${post.author}</span> &bull; 
                <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
            </div>
            <div class="blog-desc" id="desc-${post.id}">${post.desc}</div>
            <button class="read-more-btn" data-id="${post.id}">Read More</button>
            <div class="blog-full-content" id="full-${post.id}" style="display:none; margin-top:8px;">${formatContent(post.content)}</div>
        `;
        blogList.appendChild(card);
    });

    renderPagination();
    attachReadMoreHandlers();
}

function formatContent(content) {
    // Simple formatting for paragraphs and line breaks
    const html = content.replace(/\n/g, "<br>");
    return `<div>${html}</div>`;
}

// Pagination controls
function renderPagination() {
    const blogPagination = document.getElementById('blog-pagination');
    blogPagination.innerHTML = '';
    const numPages = Math.ceil(filteredPosts.length / postsPerPage);
    if (numPages <= 1) return;

    for (let i = 1; i <= numPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.className = (i === currentPage) ? 'active' : '';
        btn.addEventListener('click', () => {
            currentPage = i;
            renderBlogList();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        blogPagination.appendChild(btn);
    }
}

// Read More/Hide toggling
function attachReadMoreHandlers() {
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.onclick = function() {
            const postId = btn.getAttribute("data-id");
            const fullContent = document.getElementById("full-" + postId);
            if (fullContent.style.display === "none") {
                fullContent.style.display = "block";
                btn.textContent = "Hide";
            } else {
                fullContent.style.display = "none";
                btn.textContent = "Read More";
            }
        };
    });
}

// Search and filter
document.getElementById('searchInput').addEventListener('input', function(e) {
    filterAndSort();
});
document.getElementById('categorySelect').addEventListener('change', function(e) {
    filterAndSort();
});
document.getElementById('sortBtn').addEventListener('click', function() {
    sortAsc = !sortAsc;
    filterAndSort();
    this.innerHTML = sortAsc ? '<i class="fas fa-sort-amount-up"></i> Oldest First' : '<i class="fas fa-sort"></i> Newest First';
});

function filterAndSort() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedCat = document.getElementById('categorySelect').value;

    filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCat ? post.category === selectedCat : true;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm) ||
            post.desc.toLowerCase().includes(searchTerm) ||
            post.content.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    filteredPosts.sort((a, b) => {
        if (sortAsc) return new Date(a.date) - new Date(b.date);
        else return new Date(b.date) - new Date(a.date);
    });

    currentPage = 1;
    renderBlogList();
}

// Comments integration
const commentList = [];
document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('commentName').value.trim();
    const text = document.getElementById('commentText').value.trim();
    if (!name || !text) return;

    // Save comment to array (could use localStorage for persistence)
    commentList.unshift({
        name: name,
        text: text,
        date: new Date().toLocaleString()
    });

    document.getElementById('commentName').value = '';
    document.getElementById('commentText').value = '';
    renderComments();
});

function renderComments() {
    const container = document.getElementById('commentList');
    container.innerHTML = "";
    if (commentList.length === 0) {
        container.innerHTML = "<p>No comments yet. Be the first to share your thoughts!</p>";
        return;
    }
    commentList.forEach(com => {
        const card = document.createElement('div');
        card.className = 'comment-card';
        card.innerHTML = `
            <div class="comment-meta"><i class="fas fa-user"></i> ${com.name} &bull; <i class="far fa-clock"></i> ${com.date}</div>
            <div>${escapeHTML(com.text)}</div>
        `;
        container.appendChild(card);
    });
}

function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function(m) {
        return ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[m];
    });
}

// Initial rendering
filterAndSort();
renderComments();