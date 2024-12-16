// javascript code
// Toggle the navigation menu in mobile view
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Toggle between dark and light themes
function toggleTheme() {
    const body = document.body;
    const homeSection = document.getElementById('home');

    body.classList.toggle('dark-mode');
    homeSection.classList.toggle('dark-mode');
}