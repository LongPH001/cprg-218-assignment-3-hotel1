document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.toggle-desc');
  
    toggles.forEach((toggle) => {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        const thisCard = this.closest('.room-list-card');
        const thisDesc = thisCard.querySelector('.room-desc');
  
        // Close all other room descriptions
        document.querySelectorAll('.room-desc.open').forEach(desc => {
          if (desc !== thisDesc) {
            desc.classList.remove('open');
            desc.closest('.room-list-card').querySelector('.toggle-desc').textContent = 'View More';
          }
        });
  
        // Toggle this one
        const isOpen = thisDesc.classList.contains('open');
        thisDesc.classList.toggle('open');
        this.textContent = isOpen ? 'View More' : 'View Less';
      });
    });
  });
  
  