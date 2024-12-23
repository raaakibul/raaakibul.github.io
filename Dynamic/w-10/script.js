document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const section = document.querySelector(link.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
