const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Optionally close sidebar when clicking outside (mobile)
document.addEventListener('click', function(e) {
  if (window.innerWidth <= 900 && sidebar.classList.contains('open')) {
    if (!sidebar.contains(e.target) && e.target !== toggleBtn) {
      sidebar.classList.remove('open');
    }
  }
});