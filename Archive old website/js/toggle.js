const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

// Toggle navigation open/close
navToggle.addEventListener('click', function(e) {
    const isOpen = !navLinks.classList.contains('show');
    navToggle.classList.toggle('open', isOpen);
    navLinks.classList.toggle('show', isOpen);
    navOverlay.classList.toggle('show', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? "true" : "false");
    if (isOpen) {
        // Prevent background scroll
        document.body.style.overflow = "hidden";
        // Focus first link
        navLinks.querySelector('a').focus();
    } else {
        document.body.style.overflow = "";
    }
    e.stopPropagation();
});



// Overlay click closes nav
navOverlay.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('show');
    navOverlay.classList.remove('show');
    navToggle.setAttribute('aria-expanded', "false");
    document.body.style.overflow = "";
});

// Close nav on link click (mobile UX)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('show');
        navOverlay.classList.remove('show');
        navToggle.setAttribute('aria-expanded', "false");
        document.body.style.overflow = "";
    });
});

// Keyboard accessibility (Esc closes, Tab cycles)
document.addEventListener('keydown', (e) => {
    if (window.innerWidth <= 700 && navLinks.classList.contains('show')) {
        if (e.key === "Escape") {
            navToggle.classList.remove('open');
            navLinks.classList.remove('show');
            navOverlay.classList.remove('show');
            navToggle.setAttribute('aria-expanded', "false");
            document.body.style.overflow = "";
        }
    }
});

// On resize, always close mobile nav
window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
        navToggle.classList.remove('open');
        navLinks.classList.remove('show');
        navOverlay.classList.remove('show');
        navToggle.setAttribute('aria-expanded', "false");
        document.body.style.overflow = "";
    }
});