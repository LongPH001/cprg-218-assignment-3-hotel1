// Auto-fill today and tomorrow
function setDefaultDates(id1, id2) {
    const checkin = document.getElementById(id1);
    const checkout = document.getElementById(id2);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    checkin.valueAsDate = today;
    checkout.valueAsDate = tomorrow;
  }
  setDefaultDates("inline-checkin", "inline-checkout");
  setDefaultDates("modal-checkin", "modal-checkout");
  
  // Modal toggle
  function toggleModal() {
    document.getElementById("searchModal").classList.toggle("active");
  }
  
  // Quantity control
  function adjustQuantity(id, change) {
    const input = document.getElementById(id);
    let value = parseInt(input.value);
    if (!isNaN(value)) {
      input.value = Math.max(1, value + change);
    }
  }
  
  // Smooth scroll to rooms
  document.querySelector('.scroll-to-rooms')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("searchModal").classList.remove("active");
    document.querySelector('#rooms').scrollIntoView({ behavior: 'smooth' });
  });

  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }
  
  function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
    document.getElementById("hamburger").classList.toggle("active");
  }