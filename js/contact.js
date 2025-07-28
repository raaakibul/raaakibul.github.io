document.querySelector('.contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const status = document.getElementById('form-status');
      status.textContent = "Thank you! Your message has been sent.";
      status.style.color = "#059669";
      this.reset();
});