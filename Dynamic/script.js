function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    alert('Thank you for reaching out! I will get back to you soon.');
    document.getElementById('contact-form').reset(); // Reset the form
});