 document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // You can integrate form submission to backend/email service here
            document.getElementById('contactSuccess').style.display = 'block';
            this.reset();
            setTimeout(() => {
                document.getElementById('contactSuccess').style.display = 'none';
            }, 5000);
});