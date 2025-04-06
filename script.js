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

// Weather icon + temp only
const iconEl = document.querySelector("#weather .icon");
const tempEl = document.querySelector("#weather .temp");

function fetchWeather() {
  const lat = 21.1619; // Cancún, Mexico latitude
  const lon = -86.8515; // Cancún, Mexico longitude
  const apiKey = "ededa9facc7a53afe6a409daa8f1c952";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = Math.round(data.main.temp);
      const icon = data.weather[0].icon;
      const description = data.weather[0].description;

      iconEl.src = `https://openweathermap.org/img/wn/${icon}.png`;
      iconEl.alt = description;
      tempEl.textContent = `${temp}°`;
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
    });
}

fetchWeather();
