const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const mainContent = document.getElementById('mainContent');

function updateMenu() {
    if (window.innerWidth <= 700) {
        if (navLinks.classList.contains('show')) {
            mainContent.classList.add('menu-open');
        } else {
            mainContent.classList.remove('menu-open');
        }
    } else {
        mainContent.classList.remove('menu-open');
    }
}

navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('show');
    updateMenu();
});

// Optional: Close nav on link click (mobile UX)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        updateMenu();
    });
});

// Update menu on resize
window.addEventListener('resize', updateMenu);

// Initial state
updateMenu();